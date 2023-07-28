<!--本文件由FirstUI授权予江苏络思物联科技有限公司（手机号：  1  36   215 17 1 99，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<fui-list-cell bottom-right="32" :highlight="false">
			<text class="fui-title">First UI {{version}}（{{date}}）</text>
		</fui-list-cell>
		<view class="fui-content">
			<view class="fui-p" v-for="(item,index) in logs" :key="index">
				<text class="fui-sign" v-if="logs.length>1">-</text>
				<text>{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: '',
				date: '',
				logList: {
					'V1.0.0': [
						'First UI 正式上线，本次更新如下：',
						'新增 Color 色彩，First UI用色指南',
						'新增 Icon 图标组件，First UI字体图标库',
						'新增 Button 按钮组件',
						'新增 Footer 页脚组件',
						'新增 Animation 动画组件',
						'新增 StatusBar 状态栏占位组件',
						'新增 Layout 栅格布局组件（fui-row和fui-col）',
						'新增 Grid 宫格组件（fui-grid和fui-grid-item）',
						'新增 List 列表组件（fui-list和fui-list-cell）',
						'新增 Card 卡片组件',
						'新增 Input 输入框组件',
						'新增 InputNumber 数字输入框组件',
						'新增 Label 标签组件',
						'新增 FormField 表单数据传递组件',
						'新增 Radio 单选框组件',
						'新增 Checkbox 复选框组件',
						'新增 Switch 开关组件',
						'新增 Textarea 多行输入框组件',
						'新增 Loading 加载组件',
						'新增 LoadAni 加载动画组件（VIP组件）',
						'新增 Badge 徽章组件',
						'新增 Alert 警告框组件',
						'新增 Divider 分割线组件',
						'新增 LoadMore 加载更多组件',
						'新增 Clipboard 复制文本组件（VIP组件）',
						'新增 Request 网络请求组件（VIP组件）',
						'新增 Utils 工具类组件',
						'新增 Poster 绘制分享海报组件（VIP组件）'
					],
					'V1.1.0': [
						'调整组件对vue3支持与uni-app官方一致',
						'新增 Panel 面板 组件（VIP组件）',
						'新增 Preview 表单预览 组件（VIP组件）',
						'新增 Empty 缺省页 组件',
						'新增 SegmentedControl 分段器 组件',
						'新增 Pagination 分页器 组件',
						'新增 NavBar 导航栏 组件（VIP组件）',
						'新增 Tabs 标签页 组件',
						'新增 Tag 标签 组件',
						'新增 Backdrop 遮罩层 组件',
						'新增 Result 结果页 组件（VIP组件）',
						'新增 Avatar 头像 组件',
						'新增 Form 表单校验 组件（VIP组件）',
						'新增 Validator 表单验证（JS）组件（VIP组件）',
						'新增 SingleInput 单输入框 组件（VIP组件）',
						'新增 IndexList 索引列表 组件（VIP组件）',
						'新增 SearchBar 搜索栏 组件（VIP组件）',
						'新增 登录（A）模板（物料）',
						'新增 登录（B）模板（物料）',
						'新增 登录（C）模板（物料）',
						'新增 登录（D）模板（物料）',
						'优化若干已知问题'
					],
					'V1.2.0': [
						'新增 Tabbar 标签栏 组件（VIP组件）',
						'新增 ActionSheet 上拉菜单 组件',
						'新增 Toast 轻提示 组件',
						'新增 Dialog 对话框 组件',
						'新增 DropdownMenu 下拉菜单 组件',
						'新增 DropdownList 下拉菜单 组件',
						'新增 Modal 模态框 组件（VIP组件）',
						'新增 Landscape 压屏窗 组件（VIP组件）',
						'新增 Message 消息提示 组件（VIP组件）',
						'新增 BottomPopup 底部弹出层 组件',
						'新增 TopPopup 顶部弹出层 组件',
						'新增 Drawer 抽屉 组件',
						'新增 NoticeBar 通告栏 组件（VIP组件）',
						'新增 TimeAxis 时间轴 组件（VIP组件）',
						'新增 Steps 步骤条 组件（VIP组件）',
						'新增 Progress 进度条 组件（VIP组件）',
						'新增 Collapse 折叠面板 组件',
						'新增 SwiperDot 轮播图指示点 组件（VIP组件）',
						'新增 DigitalRoller 数字滚轮 组件（VIP组件）',
						'新增 DigitalKeyboard 数字键盘 组件（VIP组件）',
						'新增 LicensePlate 车牌号键盘 组件（VIP组件）',
						'新增 CountdownVerify 验证码倒计时 组件(VIP组件)',
						'新增 Sticky 吸顶容器 组件（VIP组件）',
						'新增 Fab 浮动按钮 组件（VIP组件）',
						'新增 ShareSheet  分享面板 组件（VIP组件）',
						'新增 FilterBar 筛选栏 组件（VIP组件）',
						'新增 SwipeAction 滑动菜单 组件',
						'新增 Picker 选择器 组件（VIP组件）',
						'新增 DatePicker 日期时间选择器 组件（VIP组件）',
						'新增 门户模板（物料）',
						'优化掉部分组件中对头条小程序做兼容的冗余代码',
						'优化若干已知问题'
					],
					'V1.3.0': [
						'新增 Calendar 日历 组件（VIP组件）',
						'新增 Cascader 级联选择器 组件（VIP组件）',
						'新增 Slider 滑块 组件（VIP组件）',
						'新增 Rate 评分 组件（VIP组件）',
						'新增 Select 选择器 组件（VIP组件）',
						'新增 Upload 图片上传 组件（VIP组件）',
						'新增 Gallery 画廊 组件（VIP组件）',
						'新增 BubbleBox 气泡框 组件（VIP组件）',
						'新增 BottomNavbar 底部导航栏 组件（VIP组件）',
						'新增 CountDown 倒计时 组件（VIP组件）',
						'新增 CopyText 长按复制 组件（VIP组件）',
						'新增 Timer 计时器 组件（VIP组件）',
						'新增 Qrcode 二维码 组件（VIP组件）',
						'新增 Barcode 条形码 组件（VIP组件）',
						'新增 Autograph 手写签名 组件（VIP组件）',
						'修复 Textarea 多行输入框 组件回车无法换行的问题',
						'优化 Request 网络请求 组件，新增加载中提示信息配置项',
						'优化 Icon 图标 组件，新增部分图标',
						'优化若干已知问题'
					],
					'V1.4.0': [
						'新增 Circle 圆形进度条 组件（VIP组件）',
						'新增 Skeleton 骨架屏 组件（VIP组件）',
						'新增 CubicBezier 贝塞尔曲线 组件（VIP组件）',
						'新增 SlideVerify 滑动验证 组件（VIP组件）',
						'新增 RotateVerify 旋转验证 组件（VIP组件）',
						'新增 SliderCaptcha 滑块拼图验证 组件（VIP组件）',
						'新增 OverflowHidden 内容超出隐藏 组件（VIP组件）',
						'新增 Backtop 回到顶部 组件（VIP组件）',
						'新增 Lazyload 图片懒加载 组件（VIP组件）',
						'新增 Waterfall 瀑布流 组件（VIP组件）',
						'优化部分组件在vue3下显示异常，控制台报出警告的问题',
						'优化 Upload 上传 组件。新增属性设置删除图片时是否弹框确认；图片上传数到达限制数max时隐藏选择框',
						'修复 Preview 表单预览 组件改变数据页面不更新的bug',
						'优化 Button 按钮 组件在Nvue以及PC中的点击效果',
						'优化 Card 卡片 组件在Nvue中样式显示不正确的问题',
						'优化 Message 消息提示 组件，部分props属性可在show方法中传值覆盖',
						'优化 Select 选择器 组件，修复单选时设置默认选中项无效的问题',
						'优化 CountDown 倒计时 组件，修复初始化传0触发倒计时结束事件的问题',
						'修复 Layout 栅格布局 组件属性gutter不生效的bug',
						'修复 InputNumber 数字输入框 组件在vue3下 blur 事件未在emits中申明的问题',
						'优化若干已知问题'
					]
				},
				logs: []
			}
		},
		onLoad(e) {
			this.date = e.date || '2021-07-26';
			this.version = e.version || 'V1.0.0';
			this.logs = this.logList[this.version] || ['开发中~'];
		}
	}
</script>

<style>
	page {
		font-weight: normal;
		background-color: #fff;
	}

	.fui-title {
		font-weight: 600;
	}

	.fui-content {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.fui-p {
		width: 100%;
		padding-bottom: 32rpx;
		word-break: break-all;
		display: flex;
		line-height: 44rpx;
	}

	.fui-sign {
		padding-right: 8rpx;
	}
</style>