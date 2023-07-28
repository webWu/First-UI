// 本文件由FirstUI授权予江苏络思物联科技有限公司（手机号：13     6 21 5  171 99，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifndef APP-PLUS || MP-WEIXIN || H5

export default {
	watch: {
		value(val) {
			this.initData(val)
		},
		endValue(val) {
			if (this.section) {
				this.initEndData(val)
			}
		}
	},
	data() {
		return {
			drag: false,
			startX: 0,
			endX: 0,
			lastLeft: 0,
			lastRight: 0,
			moveLeft: 'translate3d(0,0,0)',
			transLeft: 'translate3d(-100%, 0, 0)',
			moveRight: 'translate3d(0,0,0)',
			transRight: 'translate3d(100%, 0, 0)',
			isRight: false
		}
	},
	mounted() {
		this.initData(this.value)
		if (this.section) {
			this.initEndData(this.endValue)
		}
	},
	methods: {
		initData(value) {
			this.startX = 0;
			this.lastLeft = 0;
			this.styleChange(Number(value), true)
		},
		initEndData(value) {
			this.endX = 0;
			this.lastRight = 0;
			value = Number(this.max) - Number(value) + Number(this.min)
			this.styleSectionChange(value, true)
		},
		format(value) {
			value = Number(value)
			let step = Number(this.step)
			return Math.round(Math.max(Number(this.min), Math.min(value, Number(this.max))) / step) * step;
		},
		touchstart(e) {
			let touch = e.touches[0] || e.changedTouches[0];
			this.startX = touch.clientX
		},
		endTouchstart(e) {
			let touch = e.touches[0] || e.changedTouches[0];
			this.endX = touch.clientX
		},
		changeValue(value, isStart, isEnd) {
			var params = {
				value: value,
				isStart: isStart
			}
			if (isEnd) {
				this.change(params)
			} else {
				this.changing(params)
			}
		},
		styleChange(value, isEnd) {
			value = this.format(value);
			if (this.section) {
				value = value > this.end ? this.end : value;
			}
			this.changeValue(value, true, isEnd)
			const min = Number(this.min)
			const max = Number(this.max)
			var dvalue = max - min;
			var maxWidth = Number(this.width) - Number(this.blockWidth);
			var width = (value - min) / dvalue * maxWidth;
			this.lastLeft = width
			this.transLeft = `translate3d(-${Number(this.width)-width}px,0,0)`
			this.moveLeft = `translate3d(${width}px,0,0)`
			this.isRight = value === max
		},
		styleSectionChange(value, isEnd) {
			value = this.format(value);
			const min = Number(this.min)
			const max = Number(this.max)
			var total = max + min;
			var val = total - value;
			val = val < this.start ? this.start : val;
			value = total - val;
			this.changeValue(val, false, isEnd)
			var dvalue = max - min;
			var maxWidth = Number(this.width) - Number(this.blockWidth);
			var width = (value - min) / dvalue * maxWidth;
			this.lastRight = width
			this.transRight = `translate3d(${Number(this.width)-width}px,0,0)`
			this.moveRight = `translate3d(-${width}px,0,0)`
		},
		touchmove(e) {
			if (this.disabled) return;
			let touch = e.touches[0] || e.changedTouches[0];
			let pageX = touch.clientX;
			this.drag = true
			let left = pageX - this.startX + (this.lastLeft || 0);
			left = left < 0 ? 0 : left;
			let maxWidth = Number(this.width) - Number(this.blockWidth);
			left = left >= maxWidth ? maxWidth : left;
			let dvalue = Number(this.max) - Number(this.min);
			let value = (left / maxWidth) * dvalue + Number(this.min);
			this.startX = pageX
			this.lastLeft = left
			this.styleChange(value, false)
		},
		endTouchmove(e) {
			if (this.disabled) return;
			let touch = e.touches[0] || e.changedTouches[0];
			let pageX = touch.clientX;
			this.drag = true
			let left = this.endX - pageX + (this.lastRight || 0);
			left = left < 0 ? 0 : left;
			let maxWidth = Number(this.width) - Number(this.blockWidth);
			left = left >= maxWidth ? maxWidth : left;
			let dvalue = Number(this.max) - Number(this.min);
			let value = (left / maxWidth) * dvalue + Number(this.min);
			this.endX = pageX
			this.lastRight = left
			this.styleSectionChange(value, false)
		},
		touchend(e) {
			if (this.disabled) return;
			if (this.drag) {
				let maxWidth = Number(this.width) - Number(this.blockWidth);
				let dvalue = Number(this.max) - Number(this.min);
				let value = (this.lastLeft / maxWidth) * dvalue + Number(this.min);
				this.styleChange(value, true)
			}
		},
		endTouchend(e) {
			if (this.disabled) return;
			if (this.drag) {
				let maxWidth = Number(this.width) - Number(this.blockWidth);
				let dvalue = Number(this.max) - Number(this.min);
				let value = (this.lastRight / maxWidth) * dvalue + Number(this.min);
				this.styleSectionChange(value, true)
			}
		}
	}
}

// #endif

// #ifdef APP-PLUS|| MP-WEIXIN || H5
export default {}
// #endif