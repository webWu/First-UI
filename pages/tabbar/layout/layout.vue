<!--本文件由FirstUI授权予江苏络思物联科技有限公司（手机号： 136   2 1  5  1719 9，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">布局 <image src="/static/images/index/light/icon_member_3x.png" ></image>
			</view>
			<view class="fui-page__desc">常用的页面布局，可提升开发效率以及带来舒服的视觉效果！</view>
		</view>
		<view class="fui-page-bd fui-page__spacing">
			<view class="fui-layout__item" @tap="href" v-for="(item,index) in layoutData" :key="index">
				<view class="fui-layout__item-inner">
					<view class="fui-cover__box fui-flex__center" :style="{background:item.background}">
						<image class="fui-cover" :src="`${resUrl}/layout/img_${item.src}_3x.png`"
							mode="widthFix">
						</image>
					</view>
					<view class="fui-name__cn">{{item.cn}}</view>
					<view class="fui-name__en">{{item.en}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import layoutData from './index.js';
	export default {
		data() {
			return {
				layoutData: layoutData,
				resUrl: this.fui.resUrl()
			}
		},
		methods: {
			href() {
				this.fui.href('/pages/common/coding/coding')
			},
			vip(){
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		},
		onShareAppMessage() {
			return {
				title: 'First UI组件库'
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}

	.fui-page-bd {
		display: flex;
		flex-wrap: wrap;
	}

	.fui-layout__item {
		width: 50%;
		margin-bottom: 32rpx;
		box-sizing: border-box;
	}

	.fui-layout__item:nth-of-type(odd) {
		padding-right: 15rpx;
	}

	.fui-layout__item:nth-of-type(even) {
		padding-left: 15rpx;
	}

	.fui-layout__item-inner {
		background: #FFFFFF;
		box-shadow: 0 4rpx 8rpx 0 rgba(2, 4, 38, 0.05);
		border-radius: 24rpx;
		overflow: hidden;
		padding-bottom: 32rpx;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.fui-cover__box {
		width: 100%;
		height: 202rpx;
	}

	.fui-cover {
		width: 164rpx;
		height: 118rpx;
	}

	.fui-name__cn {
		line-height: 32rpx;
		text-align: center;
		padding-top: 28rpx;
	}

	.fui-name__en {
		font-size: 24rpx;
		line-height: 24rpx;
		color: #B2B2B2;
		text-align: center;
		padding-top: 16rpx;
	}
</style>