<!--本文件由FirstUI授权予江苏络思物联科技有限公司（手机号：136  2 1  5  1719   9，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Footer</view>
			<view class="fui-page__desc">Footer 页脚。</view>
		</view>
		<view class="fui-page__bd">
			<fui-footer text="Copyright © 2021 firstui.cn"></fui-footer>
			<fui-footer :navigate="navigate" text="Copyright © 2021 firstui.cn"></fui-footer>
			<fui-footer :navigate="navigate2" text="Copyright © 2021 firstui.cn"></fui-footer>
			<fui-footer isFixed :navigate="navigate" text="Copyright © 2021 firstui.cn"></fui-footer>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigate: [{
					text: '底部链接',
					openType: 'navigateBack'
				}],
				navigate2: [{
					text: '底部链接',
					openType: 'navigateBack'
				}, {
					text: '底部链接',
					openType: 'navigateBack'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>