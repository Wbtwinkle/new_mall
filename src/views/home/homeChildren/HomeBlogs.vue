<template>
  <div>
    <blog-text>
      <blog-text-item></blog-text-item>
    </blog-text>
  </div>
</template>

<script>
  import {BlogText, BlogTextItem} from 'components/context/blogtext/'
  export default {
    name: "HomeBlogs",
    components: {
      BlogText,
      BlogTextItem
    }
  }
</script>

<style scoped>

</style>