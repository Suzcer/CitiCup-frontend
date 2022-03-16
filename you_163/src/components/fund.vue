<template>

  <el-container>


    <el-header>


      <div>
        <br/>
<!--        <router-link to="factordetail" class="myreturn">-->
<!--          < 返回-->
<!--        </router-link>-->
        <div class="myreturn">
          <span  onclick="window.history.go(-1)">
            < 返回
          </span>
        </div>

        <div>
          <div class="Bigtitle">{{fundDetail.name}}</div>
        </div>
        <div class="fundId">
          基金序号：{{fundDetail.fundId}}
        </div>



      </div>
    </el-header>
    <el-main>

      <div>
        <el-card class="box-card profitRate">
          近一月收益率：{{fundDetail.profit_1month}}
        </el-card>
      </div>
      <div class="detailinfo">


        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>基金详情</span>
            <!--            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          </div>


          <el-row>
            <el-col :span="8">
              基金代码:
            </el-col>
            <el-col :span="12">
              <div class="text item">
                {{fundDetail.code}}
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              基金类型:
            </el-col>
            <el-col :span="12">
              <div class="text item">
                {{fundDetail.type}}
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              近1月:
            </el-col>
            <el-col :span="12">
              <div class="text item">
                {{fundDetail.profit_1month}}
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              近3月:
            </el-col>
            <el-col :span="12">
              <div class="text item">
                {{fundDetail.profit_3month}}
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              近6月:
            </el-col>
            <el-col :span="12">
              <div class="text item">
                {{fundDetail.profit_6month}}
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              近一年:
            </el-col>
            <el-col :span="12">
              <div class="text item">
                {{fundDetail.profit_year}}
              </div>
            </el-col>
          </el-row>

        </el-card>
      </div>


    </el-main>
    <el-footer>


      <div class="myfooter" >
        具体信息详见
        <el-link type="primary" href="https://www.baidu.com">基金网站</el-link>

      </div>

      <footerbar>
      </footerbar>
    </el-footer>



  </el-container>

</template>

<script>

import footerbar from "./footerbar";
import axios from "axios";

export default {
  name: "fund",
  data() {
    return {
      fundId: this.$route.params.fundId,
      fundDetail:{},
    }
  },
  created() {

    this.initData()
    //其实理论上说，如果全是推荐基金页进去的，那直接传数据不用再向后端索取数据都可以，
    // 但是还是为了封装完整，所以还是每个都获取一下数据吧
  },
  methods:{

    initData(){
      let _this=this  //其实对于普通方法，不用这样也行
      axios.get('http://localhost:8181/fund/getDetail?fundId=' + _this.fundId).then(_d => {
        _this.fundDetail = _d.data
        console.log("查询成功")
        console.log(_this.fundDetail)

      }).catch(err => {
          console.log("查询失败")
        }
      )
    }
  },

  components: {footerbar}
}
</script>

<style scoped>

.Bigtitle {
  margin: 0 0 0 0;
  font-size: x-large;
  text-align: center;
  font-weight: bold;
}

.myreturn {
  margin: 0 0 0 0;
  font-size: medium;
  color: #736c6c;
}

.fundId{
  text-align: center;
}

.profitRate{
  border-radius: 1.3rem;
  text-align: center;
  background: #e7faf0;
  margin: .4rem 0 0 0;

}

.detailinfo{
  margin: .5rem 0 0 0 ;
}

.myfooter{
  margin: 1.4rem 0 0 0;
  text-align: center;
}

</style>
