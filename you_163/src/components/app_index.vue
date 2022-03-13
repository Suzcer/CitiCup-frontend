<template>
  <div id="app">


    <div class="input-group mysearch">
      <!-- 搜索框 -->


      <el-row>
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <input type="text" class="form-control screen-input" v-model="screenText" placeholder="全站搜索文章"
                   @keyup.enter="screen()"/>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="screen()">搜索</button>
            </div>

          </div>
        </el-col>
      </el-row>
    </div>


    <br/>
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
      LookupList: []
    }
  },
  methods: {
    toPassagedetail(articleId) {
      this.$router.push({
        name: "passagedetail",
        params: {
          articleId: articleId,
        }
      })
    },
    screen() {
      let _this = this
      // console.log(_this.screenText)

      //查找的接口

      axios.get('http://localhost:8181/article/search?key=' + _this.screenText).then(_d => {
        _this.LookupList = _d.data
        console.log("查询成功")
        console.log(_this.LookupList)

        _this.articles=_this.LookupList

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
  height: 2rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .3rem #888888;
  background: #f7f7f7;

}

.mysearch {
  margin: .2rem .3rem .2rem .3rem;
  width: 6rem;

}

</style>
