// 本文件由FirstUI授权予江苏络思物联科技有限公司（手机号：  1 3621 51  71    99，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifdef APP-NVUE
export default {
	data() {
		return {
			context: null,
			start: 0
		}
	},
	watch: {
		percent(val) {
			setTimeout(()=>{
				this.init();
			},50)
		},
		w(val) {
			setTimeout(()=>{
				this.init();
			},50)
		},
		strokeWidth(val) {
			setTimeout(()=>{
				this.init();
			},50)
		}
	},
	mounted() {
		this.init(true);
	},
	methods: {
//初始化绘制
		initDraw(init) {
			let start = this.activeMode === 'backwards' ? 0 : this.start;
			this.drawCircle(start);
		},
		//默认背景
		drawDefaultCircle(ctx) {
			ctx.setLineWidth(Number(this.strokeWidth));
			ctx.setStrokeStyle(this.background);
			let eAngle = Math.PI * 2 + this.sAngle;
			this.drawArc(ctx, eAngle, true);
		},
		//进度圆环
		drawCircle(start) {
			let ctx = this.context;
			if (!ctx) {
				let ganvas = this.$refs[this.circleId];
				let canvas = enable(ganvas, {
					bridge: WeexBridge
				});
				ctx = canvas.getContext('2d');
				this.context = ctx;
			}
			//绘制默认背景
			this.defaultShow && this.drawDefaultCircle(ctx)
			ctx.setLineWidth(Number(this.strokeWidth));
			ctx.setStrokeStyle(this.foreground);
			let percentage = Number(this.percent)
			if (percentage > 0) {
				start += Number(this.speed);
				start = start > percentage ? percentage : start;
			}
			if (this.show) {
				ctx.setFontSize(Number(this.size));
				ctx.setFillStyle(this.color);
				ctx.setTextAlign('center');
				ctx.setTextBaseline('middle');
				let percent = `${this.counterclockwise ? 100 - start : start}%`;
				let radius = this.w / 2;
				ctx.fillText(percent, radius, radius);
			}
			if (percentage == 0 || (this.counterclockwise && start == 100)) {
				ctx.draw();
			} else {
				let eAngle = ((2 * Math.PI) / 100) * start + this.sAngle;
				this.drawArc(ctx, eAngle);
			}
			setTimeout(() => {
				this.start = start;
				if (start == percentage) {
					this.$emit('end', {
						canvasId: this.circleId,
						percent: start
					});
				} else {
					this.drawCircle(start);
				}
				this.$emit('change', {
					percent: start
				});
			}, 1000 / 60);
		},
		drawArc(ctx, eAngle, def) {
			ctx.setLineCap(this.lineCap);
			ctx.beginPath();
			let radius = this.w / 2;
			ctx.arc(radius, radius, radius - Number(this.strokeWidth), this.sAngle, eAngle, this.counterclockwise);
			ctx.stroke();
			!def && ctx.draw();
		}
	}
}

// #endif

// #ifndef APP-NVUE
export default {}
// #endif