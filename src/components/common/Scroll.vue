<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    data () {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
// 组件不能监听点击，如果需要点击的话，需要@click.native='backclick'
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      if (this.probeType ===2 || this.probeType === 3){
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo(0, 0, time)
      },
      finishPullUp() {
     // 默认只加载一次，如果需要多次，需要在相应位置调用
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>
<style  scoped>

</style>
