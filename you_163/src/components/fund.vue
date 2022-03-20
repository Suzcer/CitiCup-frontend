<template>

  <el-container>


    <el-header>


      <div>
        <br/>
<!--        <router-link to="factordetail" class="myreturn">-->
<!--          < 返回-->
<!--        </router-link>-->
        <el-row>
          <el-col :span="21">
            <div class="myreturn">
          <span  onclick="window.history.go(-1)">
            <svg t="1647703971703" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2028" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" p-id="2029" fill="#707070"></path></svg>

          </span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="myicon" @click="already">
              <i class="el-icon-s-opportunity"></i>
            </div>
          </el-col>
        </el-row>


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

          <div class="myfooter" >
            具体信息详见
            <el-link type="primary" :href="fundDetail.href">基金网站</el-link>
          </div>

        </el-card>
      </div>


    </el-main>
    <el-footer>




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
      axios.get('http://47.96.124.191:8181/fund/getDetail?fundId=' + _this.fundId).then(_d => {
        _this.fundDetail = _d.data
        console.log("查询成功")
        console.log(_this.fundDetail)

      }).catch(err => {
          console.log("查询失败")
        }
      )
    },
    already(){
      this.$message({
        message: '已收藏，请前往个人中心查看',
        type: 'success'
      });
    },
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
  font-size: large;
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

.myicon{
  font-size: .6rem;
}

</style>
