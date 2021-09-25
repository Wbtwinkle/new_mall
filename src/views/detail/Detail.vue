<template>
  <div class="detail">
    <!--<h2>{{message}}</h2>-->
    <el-page-header @back="goBack" content="TwinkleG"></el-page-header>
    <h2 v-if="blogInfo">{{blogInfo}}</h2>
  </div>
</template>

<script>
  import {getDetail} from "../../network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        // message: 'Hello $nextTick',
        blogInfo: null
      }
    },
    created() {
      this.id = this.$route.query.id;
      this.getDetail();
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      getDetail() {
        getDetail(this.id).then((result) => {
          console.log(result);
          this.blogInfo = result[0];
        }, error => {
          console.log(error);
        })
      }
    }
    // mounted() {
    //   console.log(this.$el.textContent);
    //   this.message = 'update message';
    //   console.log(this.$el.textContent);
    //   this.$nextTick(() => {
    //     console.log(this.$el.textContent);
    //   })
    // }
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