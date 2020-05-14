<template>
  <div id="app">
    <scroll class="content">

    </scroll>
  </div>
</template>

<script>
import scroll from 'components/common/Scroll'

export default {
  name: 'App',
  components: {
    scroll
  }
}
</script>

<style>
  @import './assets/css/base.css'

  .content{
    height: calc(100% - 90px);
    /* 这里设滚动高度才会有效果 */
  }
</style>
