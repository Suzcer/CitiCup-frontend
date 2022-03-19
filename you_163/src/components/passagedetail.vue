<template>


  <div v-loading="loading">


    <!--    <div :style="conTop"> </div>-->
    <div :style="{backgroundImage: 'url(' + img + ')'}" class="bgimg" >

      <!--    <img src="../assets/passagebg.png" alt="" class="headimg"/>-->


      <br/>
      <router-link to="/" class="myreturn">
        <svg t="1647703971703" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2028" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" p-id="2029" fill="#707070"></path></svg>
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
<!--    <div class="articlefooter">-->
<!--      <el-row :gutter="27">-->
<!--        <el-col :span="20">-->
<!--          <el-input v-model="comments" placeholder="写下评论...">-->

<!--          </el-input>-->
<!--        </el-col>-->
<!--        <el-col :span="2">-->
<!--          <div class="commenticon" @click="editcomment">-->
<!--            <i class="el-icon-edit"></i>-->
<!--          </div>-->

<!--        </el-col>-->
<!--        <el-col :span="2">-->
<!--          <div class="commenticon">-->
<!--            <i class="el-icon-share"></i>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->

<!--    </div>-->


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
      img: require('../assets/images.jpeg'),
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
        console.log(_this.article)

      }).catch(err=>{
        console.log()
      })
    },
    // editcomment(){
    //   this.$message({
    //     message: '评论成功',
    //     type: 'success'
    //   });
    // },
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
