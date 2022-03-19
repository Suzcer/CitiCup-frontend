<template>

  <div>

    <br/>
    <el-row>
      <el-col :span="20">

        <router-link to="ESG" class="myreturn">
          <svg t="1647703971703" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2028" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" p-id="2029" fill="#707070"></path></svg>

        </router-link>
      </el-col>
      <el-col :span="4">
        <div class="myicon" @click="already">
          <i class="el-icon-plus"></i>
        </div>
      </el-col>
    </el-row>

    <!--    <div>-->
    <!--      <span onclick="window.history.go(-1)" class="myreturn">-->
    <!--        < 返回-->
    <!--      </span>-->
    <!--    </div>-->

    <div>
      <div class="Bigtitle">{{ factordetail.name }}</div>
    </div>

    <div>

        <div class="myfont"
             style="box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1);
             position:relative;left:30px;right: 50px"
              >
          简介:
          {{ factordetail.details }}
        </div>


      <div class="FundLayout">

        <el-row>
          <el-col :span="12">
            <h4 class="littleTitle">
              关注基金
            </h4>
          </el-col>
          <el-col :span="12">

          </el-col>
        </el-row>

        <div v-for="item in aaa" class="fundItem">
          <el-row>

            <el-col :span="20">
              <i class="el-icon-s-help"></i>
              {{ item.name }}
            </el-col>

            <el-col :span="4">
            <span @click="toFundDetail(item.fundId)">
              >详情
            </span>
            </el-col>

          </el-row>
        </div>


      </div>
    </div>

    <footerbar>

    </footerbar>
  </div>

</template>
<script>
import axios from 'axios'
import footerbar from './footerbar'

export default {
  name: 'factordetail',
  data() {
    return {
      factorId: this.$route.params.factorId,
      factordetail: {},
      userId: window.sessionStorage.getItem("userId"),
      aaa: [
        {
          name: "方正富邦ESG主题投",
          profit_year: -7.0E-4,
          profit_6month: 0.0881,
          profit_3month: -0.0167,
          profit_1month: -0.0707,
          code: "010071",
          type: "混合型",
          fundId: 60
        }
      ]
    }
  },
  methods: {

    toFundDetail(fundId) {
      this.$router.push({
        name: "fund",
        params: {
          fundId: fundId,
        }
      })
    },
    already() {


      let _this = this

      _this.$prompt('请为此因子添加偏好,范围为0-10', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[1-9]\d*$/,
        inputErrorMessage: '数字格式不正确'
      }).then(({value}) => {

        axios.get('http://localhost:8181/user/addPrefer?userId='+
          _this.userId+"&factorId="+_this.factorId+"&preference="+value).then(_d => {

          console.log("添加偏好成功")

        }).catch(err => {
            console.log("添加失败")
          }
        )

        this.$message({
          type: 'success',
          message: '添加成功,偏好是:' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });


    }
  },
  created() {
    //其实created函数都应该调用别的函数，而不是这样直接写在里面
    let _this = this

    axios.get('http://localhost:8181/user/getFactorDetails?factorId=' + _this.factorId).then(_d => {
      _this.factordetail = _d.data
      console.log("获取factorId成功")
      // {"name":"碳足迹","details":null,"secondClass":"绿色经营","relevantFund":[]}

    }).catch(err => {
        console.log("获取factorId失败")
      }
    )
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

.fundItem {
  color: black;
  margin: .3rem 0 0 .3rem;
}

.myfont {
  font-size: large;
  color: #858585;
}

.BigLayout {
  height: 2rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .1rem #ebeced;
  background: #f7f7f7;

}

.littleTitle {
  color: black;
  margin: .2rem 0 0 .2rem;
  font-weight: bold;
}

.myreturn {
  margin: .5rem 0 0 .3rem;
  font-size: large;
  color: #736c6c;

}


  .FundLayout {

  height: 5rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .1rem #ebeced;
  background: #f7f7f7;
}

.fundItem:hover {

  color: #bb6565;
  background: #f3f3f3;
}

.myicon {
  font-size: .6rem;
}

</style>

