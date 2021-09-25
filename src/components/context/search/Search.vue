<template>
  <div class="search">
    <div class="main-section">
      <div @click="toCategory" class="left">分类</div>
      <div class="center">
        <input type="text"
               placeholder="TwinkleG's blogs"
               @focus="focus"
               @input="showInfo"
               @blur="blur">
      </div>
      <div class="right">搜索</div>
    </div>
    <div class="text-section" v-if="isFocus">
      <div v-for="(item, index) in data_show"
           @click="search_this(item)"
           :key="index"
           v-if="index < 12">{{item}}</div>
    </div>
  </div>
</template>

<script>
  import {debounce} from "../../../common/mixin";

  export default {
    name: "Search",
    props: {
      search_data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    mounted() {
      // 搜索框防抖
      this.db = debounce(this.listenInput, 500);
    },
    data() {
      return {
        data_show: [],
        isFocus: false,
      }
    },
    methods: {
      focus() {
        this.isFocus = true;
      },
      blur() {
        this.isFocus = false;
      },
      listenInput(e) {
        let str = e.target.value;
        if (!str.length) {
          this.data_show = [];
          return ;
        }
        let arr_show = [];
        for (let info of this.search_data) {
          if (info.substr(0, str.length) === str) {
            arr_show.push(info);
          }
        }
        this.data_show = arr_show;
      },
      showInfo(e) {
        this.db(e);
      },
      /* 点击某条信息，就去搜索这条信息 */
      search_this(item) {
        // 向服务器请求数据......
      },
      toCategory() {
        this.$router.replace({
          path: 'category'
        })
      }
    }
  }
</script>

<style scoped>
  .search .main-section {
    display: flex;
    height: 44px;
    background-color: #ff8198;
    color: #eee;
    align-items: center;
    text-align: center;
  }
  .left {
    width: 44px;
  }
  .right {
    width: 44px;
  }
  .center {
    flex: 1;
  }
  .center input {
    width: 100%;
    height: 26px;
    font-size: 14px;
    padding-left: 10px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
  .text-section {
    position: absolute;
    z-index: 10;
    top: 44px;
    left: 0;
    right: 0;
  }
  .text-section div {
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid skyblue;
    background-color: #fff;
  }
</style>