<template>
  <div class="s-canvas">
    <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
  </div>
</template>

<style scoped>
.s-canvas{
  height: 100%;
  width: 100%;
}
</style>

<script>
export default{
  name: 'SIdentify',
  props: {
    identifyCode: {
      type: String,
      default: '1234'
    },
    fontSizeMin: {
      type: Number,
      default: 25
    },
    fontSizeMax: {
      type: Number,
      default: 35
    },
    backgroundColorMin: {
      type: Number,
      default: 200
    },
    backgroundColorMax: {
      type: Number,
      default: 220
    },
    dotColorMin: {
      type: Number,
      default: 60
    },
    dotColorMax: {
      type: Number,
      default: 120
    },
    contentWidth: {
      type: Number,
      default: 100
    },
    contentHeight: {
      type: Number,
      default: 40
    }
  },
  methods: {
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    randomColor (min, max) {
      let r = this.randomNum(min, max)
      let g = this.randomNum(min, max)
      let b = this.randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    drawPic () {
      let canvas = document.getElementById('s-canvas')
      let ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'
      ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
      for (let i = 0; i < this.identifyCode.length; i++) {
        this.drawText(ctx, this.identifyCode[i], i)
      }
      this.drawLine(ctx)
      this.drawDot(ctx)
    },
    drawText (ctx, txt, i) {
      ctx.fillStyle = this.randomColor(50, 160)
      ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
      let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
      let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
      var deg = this.randomNum(-30, 30) // 修改坐标原点和旋转角度
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(txt, 0, 0) // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    },
    drawLine (ctx) {
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = this.randomColor(100, 200)
        ctx.beginPath()
        ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
        ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
        ctx.stroke()
      }
    },
    drawDot (ctx) {
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = this.randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI)
        ctx.fill()
      }
    }
  },
  watch: {
    identifyCode () {
      this.drawPic()
    }
  },
  mounted () {
    this.drawPic()
  }
}
</script>
