<template>
  <div class="home">
    <Search :search_data="data"></Search>
    <scroll class="content"
            ref="scroll"
            :probeType="3">
      <home-swiper class="home-swiper" :banners="banners"></home-swiper>
      <home-blogs :blogs="blogs"></home-blogs>
    </scroll>
  </div>
</template>

<script>
  import Search from 'components/context/search/Search'
  import Scroll from 'components/common/scroll/Scroll'

  import HomeSwiper from './homeChildren/HomeSwiper'
  import HomeBlogs from './homeChildren/HomeBlogs'

  import {getBlogs} from "../../network/home";
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
  const blogs = [
      {
        id: 1,
        date: '2021年9月21日',
        title: 'Vue中data为何是一个方法返回的对象形式？',
        text: '我们知道，一个组件可能会被多处引用，那么如果直接使用对象形式，可以预想到所有引用此组件的实例，在对这个组件data中数据进行修改时，会影响到其他引用此组件的数据一起修改，造成数据混乱错误.因此将其设置为一个方法返回的对象，避免了所有引用此组件的实例共享同一个data对象.',
        time: '2021-09-21 21:41',
        author: 'TwinkleG',
        readerNum: 4,
        commentNum: 3,
        recommendNum: 10
      },
      {
        id: 2,
        date: '2021年9月20日',
        title: 'Git 版本管理系统 简介',
        text: '1. 我们知道在开发一个项目时，可能会做一些没有把握的，尝试性的操作，去解决一个比较困难的问题。又或者我们的开发出现偏移，需要回退到之前的某个版本，但如果只依靠人工去管理，那么你需要做的事情是记住你的代码所有的变化，然后一点点删除这些添加的代码，直到你想要回退的版本。从某方面来说，这是一项艰巨的任务',
        time: '2021-09-20 18:38',
        author: 'TwinkleG',
        readerNum: 15,
        commentNum: 7,
        recommendNum: 11
      },
      {
        id: 3,
        date: '2021年9月15日',
        title: 'JavaScript 寄生式继承',
        text: '1. 寄生式继承：类似于 原型式继承，实际上就是 原型式继承 + 工厂模式，直接上代码： function object(o) { function F() {} F.prototype = o; return new F(); } 原型式继承 创建对象，用于被所有实例对象所共享，之后使用 工厂模式',
        time: '2021-09-15 20:30',
        author: 'TwinkleG',
        readerNum: 5,
        commentNum: 8,
        recommendNum: 6
      }
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
        banners,
        blogs
      }
    },
    components: {
      Search,
      HomeSwiper,
      HomeBlogs,
      Scroll
    },
    created() {
      // this.getBlogs();
    },
    mounted() {
      // this.$bus.$on('blogsLoaded', () => {
      //   this.$refs.scroll.refresh();
      // })
    },
    methods: {
      // getBlogs() {
      //   getBlogs().then(result => {
      //     // console.log(result);
      //     this.blogs = result;
      //     // this.$refs.scroll.refresh(); 放在这里没有效果，需要在所有blogs加载完后调用
      //   }, error => {
      //     console.log(error);
      //   });
      // }
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