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
          placeholder="请输入搜索关键词"/>
      </van-col>
      <van-col>
        <div class="login-btn">
          登录
        </div>
      </van-col>
    </van-row>
    <br/>
    <br/>

<!--    <van-tabs v-model:active="active">-->
<!--      <van-tab v-for="(n,inx)  in tabBtnList" :key="inx" :title="n">-->
<!--        &lt;!&ndash;         {{ index }}&ndash;&gt;-->
<!--      </van-tab>-->
<!--    </van-tabs>-->

<!--    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">-->
<!--      <van-swipe-item>-->
<!--        <img src="../assets/swipe-bg1.png">-->
<!--      </van-swipe-item>-->

<!--      <van-swipe-item>-->
<!--        <img src="../assets/swipe-bg3.png">-->
<!--      </van-swipe-item>-->
<!--      <van-swipe-item>-->
<!--        <img src="../assets/swipe-bg4.png">-->
<!--      </van-swipe-item>-->
<!--      <van-swipe-item>-->
<!--        <img src="../assets/swipe-bg5.png">-->
<!--      </van-swipe-item>-->
<!--    </van-swipe>-->



<!--    &lt;!&ndash; 栏目图  &ndash;&gt;-->
<!--    <van-grid :column-num="5">-->
<!--      <van-grid-item v-for="(n,inx) in good_icon" :key=inx>-->
<!--        <img :src="n.imgurl"/>-->
<!--        <div>{{ n.goods_txt }}</div>-->
<!--      </van-grid-item>-->
<!--    </van-grid>-->
    <el-button disabled class="BigLayout">
      <div class="myfont">
        示例时事1
      </div>
    </el-button>

    <el-button disabled class="BigLayout">
      <div class="myfont">
        示例时事2
      </div>
    </el-button>

    <el-button disabled class="BigLayout">
      <div class="myfont">
        示例时事3
      </div>
    </el-button>

    <el-button disabled class="BigLayout">
      <div class="myfont">
        示例时事4
      </div>
    </el-button>

    <el-button disabled class="BigLayout">
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
.logo {
  width: 1.6rem;
  display: inline-block;
  margin: .2rem 0 0 .2rem;
}

.index_header_search {
  width: 3.3rem;
  border: 0;
  margin: .2rem 0 0 .5rem;
  padding: 0;

}

.van-search__content {
  border-radius: .1rem;
  background: #ededed;
}

.login-btn {
  margin: .26rem .1rem 0 .1rem;
  width: .5rem;
  height: .4rem;
  color: #f00;
  line-height: .5rem;
  text-align: center;
  font-size: .2rem;
  border-radius: .1rem;
  border: 1px solid #f00;
}

.service_info {
  text-align: center;
  /*background: ;*/
  height: .6rem;
  line-height: .6rem;
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
</style>
