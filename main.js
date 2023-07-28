// 本文件由FirstUI授权予江苏络思物联科技有限公司（手机号： 1 3621      5  17199，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。

import App from './App'
import fui from './common/fui-app'
import http from './components/firstui/fui-request'
import store from './store'

//初始化请求配置项
http.create({
	host: 'https://ffa.firstui.cn',
	header: {
		// 'content-type': 'application/x-www-form-urlencoded'
	}
})
//请求拦截
http.interceptors.request.use(config => {
	//请求之前可在请求头中加入token等信息
	let token = uni.getStorageSync('firstui_token') || 'testToken';
	if (config.header) {
		config.header['Authorization'] = token
	} else {
		config.header = {
			'Authorization': token
		}
	}
	return config
})
//响应拦截
http.interceptors.response.use(response => {
	//TODO
	return response
})

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.fui = fui
Vue.prototype.http = http

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.fui = fui;
	app.config.globalProperties.http = http;
	return {
		app
	}
}
// #endif