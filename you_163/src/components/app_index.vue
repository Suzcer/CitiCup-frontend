<template>
  <div id="app">
    <van-row>
      <van-col>
        <!--        <img class="logo" src="../assets/logo-img.png"/>-->
      </van-col>
      <van-col>
        <van-search
          class="index_header_search"
          v-model="search_v"
          background="#ff"
          placeholder="请输入搜索关键词"
          />
      </van-col>
    </van-row>
    <br/>
    <br/>


    <el-button class="BigLayout">
      <div class="myfont">
        示例时事1
      </div>
    </el-button>

    <el-button class="BigLayout">
      <div class="myfont">
        示例时事2
      </div>
    </el-button>

    <el-button class="BigLayout">
      <div class="myfont">
        示例时事3
      </div>
    </el-button>

    <el-button class="BigLayout">
      <div class="myfont">
        示例时事4
      </div>
    </el-button>

    <el-button class="BigLayout">
      <div class="myfont">
        示例时事5
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
      tabBtnList: '',
      good_icon: [
        {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金1'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金2'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金3'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金4'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金5'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金6'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金7'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金8'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金9'
        }, {
          imgurl: require('../assets/lan.png'),
          goods_txt: '基金10'
        },

      ],
      active: ''
    }
  },
  components: {footerbar},
  created() {
    axios.get('http://localhost:5632/get_tabbtn_tist').then(_d => {
      this.tabBtnList = _d.data;

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
  background:#f7f7f7;

}
</style>
