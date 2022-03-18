<template>
  <el-container>
    <div>


      <el-header>
        <van-row>
          <van-col span="9">
            <van-image
              round
              width="1.2rem"
              height="1.2rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              class="headimg"
            />
          </van-col>

          <van-col span="4">
            <div class="username">
              {{ username }}
            </div>
          </van-col>

          <van-col span="9">
            <div class="editinfo" @click="editinfo">
              编辑资料
            </div>
          </van-col>

          <van-col span="2">
            <div class="setting" @click="toSetting()">
              <i class="el-icon-setting"></i>
            </div>
          </van-col>


        </van-row>

        <div @click="toerror()">
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
        </div>

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

        <el-table
          :data="Recommend"
          height="150"
          style="width: 100%">
          <el-table-column
            prop="recommendName"
            label="系统推荐基金"
            width="180">
          </el-table-column>
          <el-table-column
            prop="gainRate"
            label="收益率"
            width="100">
          </el-table-column>

        </el-table>


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
      ESGvalue: [],
      userId: window.sessionStorage.getItem("userId"),
      Recommend: [
        {
          recommendName: 12,
          gainRate: 12

        }
      ],
      username: window.sessionStorage.getItem("username"),
    }
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      let _this = this


      //获取后端三个数据
      axios.get('http://localhost:8181/user/getPreferFactorNum' + "?userId=" + this.userId).then(_d => {
        _this.ESGvalue = [_d.data["eprefer"], _d.data["sprefer"], _d.data["gprefer"]];
        console.log("三个数据获取成功")
        console.log(_this.ESGvalue)

      }).catch(err => {
        console.log(err)
        console.log("三个数据获取失败")
      })


      myChart.setOption({
        title: {},
        legend: {
          data: ['ESG因素比重']
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
            name: 'ESG因素比重',
            type: 'radar',
            data: [
              {
                value: _this.ESGvalue,
                // value: [40,60,50],
                name: 'ESG因素比重'
              },
              // {
              //   value: [5000, 14000, 28000, 26000, 42000, 21000],
              //   name: 'Actual Spending'
              // }
            ]
          }
        ]
      })
    },
    toerror() {
      this.$router.push({
        name: "error",
      })
    },
    toSetting() {
      this.$router.push({
        name: "login",
        params: {}
      })
    },
    editinfo(){

    }
  },
  mounted() {

    this.drawLine();

    //监听刷新，否则可能丢失数据
    window.addEventListener("load", () => {
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

.setting {

  margin: .5rem 0 0 0;
  font-size: .5rem;
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
  margin: .5rem .1rem 0 .1rem;
  font-size: .3rem;
  font-weight: bold;
}

.mydetail {
  color: #736c6c;
  margin: .1rem 0 0 0;
}

.username {
  margin: .65rem 0 0 0;
  font-weight: bold;
  font-size: .32rem;
}

.editinfo{
  background: #0078d4;
  border-radius: .2rem;
  text-align: center;
  color: #FFFFFF;
  width: 1.2rem;
  margin: .68rem  0 0 0;
  font-size: .22rem;
}



</style>

