<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  BetterScroll.use(Pullup);
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default() {
          return 0
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.bscroll = new BetterScroll(this.$refs.wrapper, {
          pullUpLoad: this.pullUpLoad,
          click: true, // 默认是false，禁止了wrapper区域的点击事件，会阻止tabControl组件的正常使用
          probeType: this.probeType
        });
        if (this.probeType === 2 || this.probeType === 3) {
          this.bscroll.on('scroll', (position) => {
            this.$emit('scroll', position);
          })
        }
        if (this.pullUpLoad) {
          this.bscroll.on('pullingUp', () => {
            this.$emit('pullingUp');
          })
        }
      })
    },
    methods: {
      refresh() {
        console.log("========");
        this.bscroll && this.bscroll.refresh();
      },
      scrollTo(x, y, time=300) {
        this.bscroll && this.bscroll.scrollTo(x, y, time);
      },
      finishPullingUp() {
        this.bscroll && this.bscroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>
</style>