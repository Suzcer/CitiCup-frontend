<template>


  <div v-loading="loading">


    <!--    <div :style="conTop"> </div>-->
    <div :style="{backgroundImage: 'url(' + img + ')'}" class="bgimg">

      <!--    <img src="../assets/passagebg.png" alt="" class="headimg"/>-->


      <br/>
      <router-link to="/" class="myreturn">
        <i class="el-icon-caret-left"></i>
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

    <!-- footer  -->
    <div class="articlefooter">
      <el-row :gutter="27">
        <el-col :span="20">
          <el-input v-model="comments" placeholder="写下评论...">

          </el-input>
        </el-col>
        <el-col :span="2">
          <div class="commenticon" @click="editcomment">
            <i class="el-icon-edit"></i>
          </div>

        </el-col>
        <el-col :span="2">
          <div class="commenticon">
            <i class="el-icon-share"></i>
          </div>
        </el-col>
      </el-row>

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
      img: require('../assets/passagebg.png'),
      loading: true,
      comments:'',

    }
  },
  methods:{
    getData(){
      let _this=this
      _this.loading=true
      console.log(this.articleId)
      let articleurl = 'http://localhost:8181/article/' + _this.articleId + "?userId=" + _this.userId;
      // console.log(this.articleurl)

      // axios.get(articleurl).then(_d => {
      //   this.article = _d.data;
      // })
      axios.get(articleurl).then(_d => {
        _this.article = _d.data;
        _this.loading=false
      }).catch(err=>{
        console.log()
      })
    },
    editcomment(){
      this.$message({
        message: '评论成功',
        type: 'success'
      });
    },
  },
  created() {
    this.getData()
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
  font-size: medium;
  margin: 0 1rem 0 1rem;
}

.author {
  color: #FFFFFF;
  margin: .2rem 0 0 0;
}

.bgimg {
  width: 100%;
  height: 3rem;
}

.myreturn {
  color: #FFFFFF;
  margin: .7rem 0 0 .3rem;
  font-size: large;
}

.articlefooter{

  margin: 4rem  0 0 .3rem;
  position: fixed;
  bottom: 0;
}

.articlecontent{
  margin: .5rem 0 0 .5rem;
}

.demo-type{
  margin: .5rem 0 0 .5rem;
}

.commenticon{
  font-size: large;
  margin: .2rem 0 0 0;
}


</style>
