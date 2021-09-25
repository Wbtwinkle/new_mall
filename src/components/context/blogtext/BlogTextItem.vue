<template>
  <div class="blog-text-item">
    <h3 class="blog-date">{{blog.date}}</h3>
    <h3 class="blog-title" @click="openThisBlog">{{blog.title}}</h3>
    <p class="blog-text">{{blog.text}}</p>
    <div class="read-more" @click="openThisBlog">Read More</div>
    <div class="tips">
      <span>posted @ {{blog.time}} </span>
      <span>{{blog.author}} </span>
      <span>阅读({{blog.readerNum}}) </span>
      <span>评论({{blog.commentNum}}) </span>
      <span>推荐({{blog.recommendNum}}) </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogTextItem",
    props: {
      blog: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      openThisBlog() {
        this.$router.push({
          path: 'detail',
          query: {
            id: this.blog.id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .blog-text-item {
    background-color: #f5f2e9;
    padding-top: 4px;
    padding-bottom: 12px;
    border-bottom: 2px dotted rebeccapurple;
  }

  .blog-date {
    font-size: 16px;
  }

  .blog-title {
    margin-top: 5px;
    padding-left: 12px;
    color: #6466b3;
  }

  .blog-text {
    text-align: center;
    padding-left: 8px;
    padding-right: 8px;
  }

  .read-more {
    text-decoration: underline;
    padding-left: 8px;
  }

  .tips {
    padding-left: 8px;
  }
</style>