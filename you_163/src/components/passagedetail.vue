<template>



  <el-container>
    <img src="https://img.js.design/assets/img/6212f6843a30d62143d5b7d8.jpg" alt="" class="headimg"/>
    <el-header>



        <router-link to="/">
          < 返回
        </router-link>
        <h1 class="hugetitle">{{ article.title }}</h1>



      <div class="demo-type">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light author">
              {{ article.author }}
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>

    <br/>
    <br/>
    <br/>

    <el-main>
      <div class="articlecontent">
        {{ article.content }}
      </div>
    </el-main>
  </el-container>


</template>

<script>
import axios from 'axios'

export default {
  name: "passagedetail",
  data() {
    return {
      // id:{{this.$route.params}},
      article: [],
      articleId: this.$route.params.articleId,
      userId: window.sessionStorage.getItem("userId"),
    }
  },
  created() {

    console.log(this.articleId)
    console.log("被触发")
    let articleurl = 'http://localhost:8181/article/' + this.articleId + "?userId=" + this.userId;
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
/*.articlecontent {*/
/*  box-shadow: #736c6c;*/
/*}*/


.headimg{
  width: 100%;
  height: 3rem;
}

.hugetitle {
  text-align: center;
}

.author{
  margin: .2rem 0 0 0;
}
</style>
