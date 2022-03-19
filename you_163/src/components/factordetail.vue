<template>

  <div>

    <br/>
    <el-row>
      <el-col :span="20">

        <router-link to="ESG" class="myreturn">
          <i class="el-icon-caret-left"></i>
        </router-link>
      </el-col>
      <el-col :span="4">
        <div class="myicon" @click="already">
          <i class="el-icon-s-opportunity"></i>
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
      <el-button class="BigLayout">
        <div class="myfont">
          简介:
          {{ factordetail.details }}
        </div>
      </el-button>

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
          fundId: 9
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

