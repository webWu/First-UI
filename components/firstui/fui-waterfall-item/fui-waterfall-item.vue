<!--本文件由FirstUI授权予江苏络思物联科技有限公司（手机号：1  3 6  215 17    199，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view :id="elId" ref="fui_wi__el" class="fui-waterfall__item-wrap" :class="{'fui-waterfall__item-show':isShow}"
		:style="{width:width+'px' ,background:background,borderRadius:radius+'rpx',transform:transform}"
		@tap="handleTap">
		<slot name="upper"></slot>
		<view :class="{'fui-waterfall__img-wrap':!isLoaded}"
			:style="{width:imgWidth!=0?imgWidth+'rpx':width+'px',height:isLoaded?'auto':width+'px'}" v-if="isSrc">
			<image class="fui-waterfall__img" :src="src" mode="widthFix" :webp="webp" :draggable="draggable"
				@load="handleLoad" @error="handleError" :style="{width:imgWidth!=0?imgWidth+'rpx':width+'px'}"
				v-if="isLoaded"></image>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const dom = weex.requireModule('dom')
	// #endif
	export default {
		name: "fui-waterfall-item",
		emits: ['click'],
		inject: ['waterfall'],
		// #ifdef MP-WEIXIN
		options: {
			virtualHost: true
		},
		// #endif
		props: {
			background: {
				type: String,
				default: '#FFFFFF'
			},
			radius: {
				type: [Number, String],
				default: 16
			},
			src: {
				type: String,
				default: ''
			},
			imgWidth: {
				type: [Number, String],
				default: 0
			},
			webp: {
				type: Boolean,
				default: false
			},
			draggable: {
				type: Boolean,
				default: true
			},
			param: {
				type: [Number, String],
				default: 0
			}
		},
		created() {
			if (this.waterfall) {
				this.waterfall.childrenArr.push(this)
				if (this.waterfall.itemWidth) {
					this.width = this.waterfall.itemWidth
				} else {
					this.waterfall.initParam((width) => {
						this.width = width
					})
				}
			}
		},
		mounted() {
			if (!this.src) {
				this.isSrc = false
				this.$nextTick(() => {
					this.getWaterfallItemInfo()
				})
			}
		},
		data() {
			const elId = `fui_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				elId: elId,
				width: 0,
				height: 0,
				transform: '',
				isShow: false,
				isLoaded: true,
				isSrc: true
			};
		},
		methods: {
			getWaterfallItemInfo() {
				this.getItemHeight((res) => {
					if (this.waterfall) {
						this.waterfall.loadedArr.push('ok')
						setTimeout(() => {
							this.waterfall.startSorting()
						}, 10)
					}
				})
			},
			getItemHeight(callback, index = 0) {
				// #ifdef APP-NVUE
				const result = dom.getComponentRect(this.$refs['fui_wi__el'], option => {
					if (option && option.result && option.size) {
						this.height = option.size.height + 1
						callback && callback(this.height)
					}
				})
				// #endif

				// #ifndef APP-NVUE
				uni.createSelectorQuery()
					// #ifndef MP-ALIPAY
					.in(this)
					// #endif
					.select(`#${this.elId}`)
					.fields({
						size: true
					}, data => {
						if (index >= 20) return
						if (data && data.height) {
							this.height = data.height
							callback && callback(data.height)
						} else {
							index++
							setTimeout(() => {
								this.getItemHeight(index)
							}, 50)
							return
						}
					})
					.exec()
				// #endif
			},
			handleLoad(e) {
				setTimeout(() => {
					this.getWaterfallItemInfo()
				}, 10)
			},
			handleError(e) {
				this.isLoaded = false
				this.$nextTick(() => {
					this.getWaterfallItemInfo()
				})
			},
			handleTap() {
				this.$emit('click', {
					param: this.param
				})
			}
		}
	}
</script>

<style scoped>
	.fui-waterfall__item-wrap {
		position: absolute;
		left: 0;
		top: 0;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		overflow: hidden;
		opacity: 0;
		transition-property: opacity;
		transition-duration: .3s;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.fui-waterfall__item-show {
		opacity: 1;
	}

	.fui-waterfall__img-wrap {
		background: #F1F4FA;
		overflow: hidden;
	}

	.fui-waterfall__img {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
</style>