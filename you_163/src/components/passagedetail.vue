<template>

  <div>
    <div class="jumbotron">
      <router-link to="/">
        < 返回
      </router-link>
      <h1 class="hugetitle">第{{articleId}}篇</h1>
    </div>

    <div>
      {{article.content}}
      {{article.author}}
      {{article.title}}
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
      article:[],
      articleId:this.$route.params.id
    }
  },
  created() {
    console.log(this.articleId)
    console.log("被触发")
    let articleurl = 'http://localhost:8181/article/' + this.articleId;
    // console.log(this.articleurl)

    // axios.get(articleurl).then(_d => {
    //   this.article = _d.data;
    // })
    axios.get('http://localhost:8181/article/all').then(_d => {
      this.article = _d.data;
    })

  },
}
</script>

<style scoped>

.hugetitle{
  text-align: center;
}
</style>
