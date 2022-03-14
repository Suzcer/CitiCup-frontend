<template>
  <el-container>
    <div>


      <el-header>
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
              <router-link to="login">
                <van-button type="warning" class="loginbtn">登录</van-button>
              </router-link>
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

      </el-header>


      <el-main>


        <van-row>
          <el-divider></el-divider>
          <van-col span="20">
            <div>
              <span class="lititle">
              我的ESG偏好
              </span>
            </div>
          </van-col>
          <van-col span="4">
            <router-link to="minedetail">
              <span class="mydetail">
              详情>
              </span>
            </router-link>
          </van-col>
        </van-row>

        <!--        <div>-->
        <!--          <img class="logo" src="../assets/雷达图.png"/>-->
        <!--        </div>-->


        <div class="panel panel-default">
          <div class="panel-body" id="myChart">

          </div>
        </div>


        <br/>
        <br/>
        <van-row>
          <van-col span="20">
            <div>
          <span class="lititle">
            我的投资组合
          </span>
            </div>
          </van-col>
          <van-col span="4">
            <span class="mydetail">
            详情>
            </span>
          </van-col>
        </van-row>


      </el-main>

      <footerbar>

      </footerbar>
    </div>
  </el-container>

</template>
<script>
import axios from 'axios'
import footerbar from './footerbar'


export default {
  name: 'mine',
  data() {
    return {
      ESGvalue:[],
      userId: window.sessionStorage.getItem("userId"),
    }
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      let _this=this


      //获取后端三个数据
      axios.get('http://localhost:8181/user/getPreferFactorNum'+ "?userId=" + this.userId).then(_d => {
        _this.ESGvalue = [_d.data["enum"],_d.data["snum"],_d.data["gnum"]];
        console.log("三个数据获取成功")
        console.log(_this.ESGvalue)

      }).catch(err=>{
        console.log(err)
        console.log("三个数据获取失败")
      })


      myChart.setOption({
        title: {},
        legend: {
          data: ['ESG因素数量']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            {name: 'E', max: 100},
            {name: 'S', max: 100},
            {name: 'G', max: 100}
          ]
        },
        series: [
          {
            // TODO : 难以显示数值
            name: 'ESG因素数量',
            type: 'radar',
            data: [
              {
                value: _this.ESGvalue,
                // value: [40,60,50],
                name: 'ESG因素数量'
              },
              // {
              //   value: [5000, 14000, 28000, 26000, 42000, 21000],
              //   name: 'Actual Spending'
              // }
            ]
          }
        ]
      })
    }
  },
  mounted() {

    this.drawLine();
    window.addEventListener("load", () => {
      //写入你想要执行的代码
      this.drawLine();
    });
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

#myChart {

  width: 5.8rem;
  height: 3.6rem;
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

.mydetail {
  color: #736c6c;
  margin: .1rem 0 0 0;
}


</style>

