<template>


  <div>


    <!--    <div :style="conTop"> </div>-->
    <div :style="{backgroundImage: 'url(' + img + ')'}" class="bgimg">

      <!--    <img src="../assets/passagebg.png" alt="" class="headimg"/>-->


      <br/>
      <router-link to="/" class="white">
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


    </div>


    <div class="articlecontent">

      {{ article.content }}
    </div>

  </div>


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
      img: require('../assets/passagebg.png')
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


.headimg {
  width: 100%;
  height: 3rem;
}

.hugetitle {
  text-align: center;
  color: #ffffff;
}

.author {
  color: #FFFFFF;
  margin: .2rem 0 0 0;
}

.bgimg {
  width: 100%;
  height: 3rem;
}

.white {
  color: #FFFFFF;
  margin: .7rem 0 0 .3rem;
}

.articlecontent{
  margin: .5rem 0 0 .5rem;
}

.demo-type{
  margin: .5rem 0 0 .5rem;
}
</style>
