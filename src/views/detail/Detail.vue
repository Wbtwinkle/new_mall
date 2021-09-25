<template>
  <div class="detail">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        message: 'Hello $nextTick'
      }
    },
    mounted() {
      console.log(this.$el.textContent);
      this.message = 'update message';
      console.log(this.$el.textContent);
      this.$nextTick(() => {
        console.log(this.$el.textContent);
      })

    }
  }
</script>

<style scoped>
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../../assets/img/detail/bgc.webp");
  }
</style>