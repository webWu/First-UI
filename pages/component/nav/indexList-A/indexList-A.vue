<!--本文件由FirstUI授权予江苏络思物联科技有限公司（手机号： 13621 5 17      19 9，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<fui-index-list isSrc :listData="lists" @init="init" @click="itemClick">
		<fui-search-bar @search="search"></fui-search-bar>
		<template v-slot:footer>
			<fui-loadmore v-if="!show"></fui-loadmore>
			<fui-divider text="66个朋友及联系人" v-if="show"></fui-divider>
		</template>
	</fui-index-list>
</template>

<script>
	import lists from './index.list.js'
	export default {
		data() {
			return {
				lists: lists,
				show: false
			}
		},
		onLoad() {
			// setTimeout(() => {
			// 	this.show = true;
			// }, 500)
		},
		methods: {
			init(){
				this.show = true;
			},
			search(e){
			   this.fui.toast(`搜索：${e.detail.value}`)
			   //相关逻辑自行处理
			   // ...
			},
			itemClick(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}
</style>