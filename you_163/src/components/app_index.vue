<template>
  <div id="app">

    <br/>

    <div class="input-group mysearch">
      <!-- 搜索框 -->
      <el-row>

        <el-col :span="3">

          <img class="media-object" src="../assets/picture/esglogo.png" alt="...">

        </el-col>

        <el-col :span="16">
          <div class="grid-content bg-purple">
            <input type="text" class="form-control screen-input" v-model="screenText" placeholder="全站搜索文章"
                   @keyup.enter="screen()" style="border-radius: .1rem"/>

          </div>
        </el-col>

        <el-col :span="3">
          <div class="grid-content bg-purple-light">
            <div class="input-group-append">
              <el-button type="primary" class="searchbtn" icon="el-icon-search" @click="screen()"></el-button>
              <!--                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="screen()">搜索</button>-->
            </div>

          </div>
        </el-col>
      </el-row>
    </div>

    <template>
      <div class="_tab">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="deleteborder">
          <el-tab-pane label="" name="1"></el-tab-pane>
          <el-tab-pane label="" name="2"></el-tab-pane>
          <el-tab-pane label="" name="3"></el-tab-pane>
          <el-tab-pane label="最新" name="first"></el-tab-pane>
          <el-tab-pane label="推荐" name="second"></el-tab-pane>
          <el-tab-pane label="热门" name="third"></el-tab-pane>
        </el-tabs>
      </div>
    </template>


    <br/>


    <el-button class="BigLayout" v-for="article in articles" @click="toPassagedetail(article.articleId)">
      <div class="myfont">
        简介：{{ article.briefInformation }}
      </div>
    </el-button>


    <!-- 吸底-->
    <footerbar>
    </footerbar>


  </div>
</template>

<script>
import axios from 'axios'
import footerbar from './footerbar'


export default {
  name: 'app_index',
  data() {
    return {
      search_v: '',
      active: '',
      articles: [],
      // userId: this.$route.params.userId,
      userId: window.sessionStorage.getItem("userId"),
      screenText: '',
      LookupList: [],
      activeName: 'second',
    }
  },
  methods: {
    toPassagedetail(articleId) {

      let _this=this
      console.log("topassagedetail")
      if (_this.userId === null) {

        this.$message({
          message: '请先登录',
          type: 'warning'
        });

        this.$router.push({
          name: "login",
          params: {
          }
        })

      }else{
        this.$router.push({
          name: "passagedetail",
          params: {
            articleId: articleId,
          }
        })
      }


    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    screen() {
      let _this = this
      // console.log(_this.screenText)
      //查找的接口


      axios.get('http://localhost:8181/article/search?key=' + _this.screenText).then(_d => {
        _this.LookupList = _d.data
        console.log("查询成功")
        console.log(_this.LookupList)

        _this.articles = _this.LookupList

      }).catch(err => {
          console.log("查询失败")
        }
      )
    }
  },

  components: {footerbar},
  created() {
    axios.get('http://localhost:8181/article/all').then(_d => {
      this.articles = _d.data;
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index_header_search {
  width: 5.2rem;
  border: 0;
  margin: .2rem 0 0 .5rem;
  padding: 0;
  outline: #888880 auto thin;

}


.service_info i.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100%;
  width: .5rem;
  height: .5rem;
}


.myfont {
  font-size: large;
  color: black;
}

.BigLayout {
  height: 1.5rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .3rem #ebeced;
  background: #f7f7f7;

}

.searchbtn {
  height: .55rem;
  text-align: center;
}

.mysearch {
  margin: 0 .3rem .2rem .3rem;
  width: 6rem;
  /*border-radius: 1rem;*/

}

._tab {
  text-align: center;

}


/*  TODO 想删掉这条东西但是发现不好删orz   */
.deleteBorder .el-tabs__nav-wrap.is-top::after {
  height: 0;
}


</style>
