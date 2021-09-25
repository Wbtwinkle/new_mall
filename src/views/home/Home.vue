<template>
  <div class="home">
    <Search :search_data="data"></Search>
    <scroll class="content"
            ref="scroll"
            :probeType="3">
      <home-swiper class="home-swiper" :banners="banners"></home-swiper>
      <home-blogs></home-blogs>
    </scroll>
  </div>
</template>

<script>
  import Search from 'components/context/search/Search'
  import Scroll from 'components/common/scroll/Scroll'

  import HomeSwiper from './homeChildren/HomeSwiper'
  import HomeBlogs from './homeChildren/HomeBlogs'
  /* banner 用于轮播图展示个人喜爱的图片 */
  const banners = [
    require('assets/img/swiper_pictures/sky1.jpg'),
    require('assets/img/swiper_pictures/sky2.jpg'),
    require('assets/img/swiper_pictures/sky3.jpg'),
    require('assets/img/swiper_pictures/sky4.jpg'),
    require('assets/img/swiper_pictures/sky5.jpg'),
    require('assets/img/swiper_pictures/sky6.jpg'),
    require('assets/img/swiper_pictures/sky7.jpg')
  ];
  /* data 用于搜索框输入提示数据 */
  const data = [
    '你好检察官',
    '你好的英文',
    '你好生活',
    '你好检察官演员表',
    '你好旧时光',
    '你好剑圣',
    '你好查理',
    '你好检察官电视剧全集免费',
    '你好李焕英免费观看电影网',
    '你好周先生',
    '你是我的小青梅',
    '你是我的荣耀电视剧免费观看',
    '你是我的荣耀',
    '你微笑时很美',
    '你能不能不要离开我,究竟是我做错了什么',
    '你却爱着一个sb小说 未删减完整版百度云txt',
    '你是我的荣耀小说',
    '你组词',
    '你的情深我不配小说免费阅读'
  ];
  export default {
    name: "Home",
    data() {
      return {
        data,
        banners
      }
    },
    components: {
      Search,
      HomeSwiper,
      HomeBlogs,
      Scroll
    }
  }
</script>

<style scoped>
  .home {
    position: relative;
    height: 100vh;
    background-color: #f5f2e9;
  }
  .home-swiper {
    /*padding-top: 44px;*/
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>