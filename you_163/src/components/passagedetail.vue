<template>

  <div>
    <div class="jumbotron">
      <router-link to="/">
        < 返回
      </router-link>
      <h1 class="hugetitle">第{{this.$route.params.id}}篇</h1>
    </div>

    <div>
      {{articles}}
    </div>

  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "passagedetail",
  data(){
    return{
      // id:{{this.$route.params}},
      articles:[]
    }
  },
  created() {
    axios.get('http://localhost:8181/article/all').then(_d => {
      this.articles = _d.data;
    })
  }
}
</script>

<style scoped>

.hugetitle{
  text-align: center;
}
</style>
