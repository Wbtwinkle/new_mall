<template>
  <div>
    <blog-text>
      <blog-text-item v-for="(blog, index) in blogs"
                      :key="index"
                      @load="blogItemLoaded(index)"
                      :blog="blog">
      </blog-text-item>
    </blog-text>
  </div>
</template>

<script>
  import {BlogText, BlogTextItem} from 'components/context/blogtext/'
  export default {
    name: "HomeBlogs",
    props: {
      blogs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      BlogText,
      BlogTextItem
    },
    methods: {
      blogItemLoaded(index) {
        if (index === this.blogs.length) {
          this.$bus.$emit('blogsLoaded');
        }
      }
    }
  }
</script>

<style scoped>

</style>