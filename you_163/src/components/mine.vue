<template>
  <div>

    <van-row>
      <van-col span="8">
        <van-image
          round
          width="1.5rem"
          height="1.5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          class="headimg"
        />
      </van-col>
      <van-col span="8">
        <div>
          <van-button type="warning" class="loginbtn">登录</van-button>
        </div>
      </van-col>
    </van-row>

    <van-row class="certainiofo">
      <van-col span="8">
        <i class="icon iconfont icon_1"></i>
        <span></span>
        浏览记录
      </van-col>
      <van-col span="8">
        <i class="icon iconfont icon_2"></i>
        收藏文章
      </van-col>
      <van-col span="8">
        <i class="icon iconfont icon_3"></i>
        收藏基金
      </van-col>
    </van-row>
    <div class="mydivider">
      <van-divider>
      </van-divider>
    </div>


    <van-row>
      <van-col span="22">
        <div>
          <span class="lititle">
            我的ESG偏好
          </span>
        </div>
      </van-col>
      <van-col span="2">
        详情>
      </van-col>
    </van-row>

    <div>
      <img class="logo" src="../assets/雷达图.png"/>
    </div>


    <br/>
    <br/>
    <van-row>
      <van-col span="22">
        <div>
          <span class="lititle">
            我的投资组合
          </span>
        </div>
      </van-col>
      <van-col span="2">
        详情>
      </van-col>
    </van-row>


    <footerbar>

    </footerbar>
  </div>

</template>
<script>
import axios from 'axios'
import footerbar from './footerbar'

export default {
  name: 'mine',
  data() {
    return {
      search_v: ''
    }
  },
  components: {footerbar}
}
</script>
<style scoped>
.headimg {

  margin: .4rem 0 0 .4rem;
}

.loginbtn {
  margin: .8rem .1rem 0 .4rem;
  width: 1.2rem;
  height: .6rem;
  /*color: #0078d4;*/
  line-height: .5rem;
  text-align: center;
  font-size: .2rem;
  background-color: #0078d4;
  border-radius: .05rem;
  border: 1px solid #0078d4;
}

.certainiofo {
  text-align: center;
  /*background: #ff0000;*/
  height: .6rem;

}

.certainiofo i.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100%;
  vertical-align: middle;
  width: .5rem;
  height: .5rem;
}

.certainiofo i.icon_1 {
  background-image: url("../assets/icon/浏览记录.png");
}

.certainiofo i.icon_2 {
  background-image: url("../assets/icon/收藏.png");
}

.certainiofo i.icon_3 {
  background-image: url("../assets/icon/基金.png");
}

.lititle {
  margin: .8rem .1rem 0 .4rem;
  font-size: .3rem;
  font-weight: bold;
}

.mydivider {
  padding: .2rem;
  color: #f8f8f8;
}


</style>

