<!--本文件由FirstUI授权予江苏络思物联科技有限公司（手机号： 13  621 51  7    199，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Textarea</view>
			<view class="fui-page__desc">Textarea 多行输入框，该组件是对原生textarea组件的增强，内置了常用布局样式，同时包含 textarea 所有功能。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基本使用</view>
			<fui-textarea placeholder="请输入内容"></fui-textarea>
			<view class="fui-section__title">带标题</view>
			<fui-textarea flexStart label="标题" placeholder="请输入内容"></fui-textarea>
			<view class="fui-section__title">调整高度、必填</view>
			<!-- #ifndef MP-TOUTIAO -->
			<fui-textarea required height="40rpx" label="标题" placeholder="请输入内容"></fui-textarea>
			<!-- #endif -->
			<!-- #ifdef MP-TOUTIAO -->
			<fui-textarea required height="40rpx" label="标题"></fui-textarea>
			<!-- #endif -->
			<view class="fui-section__title">输入长度计数、双向绑定</view>
			<fui-textarea isCounter placeholder="请输入内容" v-model="text"></fui-textarea>
			<view class="fui-section__title">带边框</view>
			<view class="fui-textarea__box">
				<fui-textarea textareaBorder placeholder="请输入简介"></fui-textarea>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-textarea__box {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
</style>