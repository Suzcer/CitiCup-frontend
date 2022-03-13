<template>

  <div>
    <div class="jumbotron">
      <router-link to="/">
        < 返回
      </router-link>
      <h1 class="hugetitle">第{{articleId}}篇</h1>
      <h1 class="hugetitle">userId是{{userId}}</h1>
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
      articleId:this.$route.params.articleId,
      userId:this.$route.params.userId,

    }
  },
  created() {
    console.log(this.articleId)

    console.log("被触发")
    let articleurl = 'http://localhost:8181/article/' + this.articleId+"?userId="+this.userId;
    // console.log(this.articleurl)

    // axios.get(articleurl).then(_d => {
    //   this.article = _d.data;
    // })
    axios.get(articleurl).then(_d => {
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
