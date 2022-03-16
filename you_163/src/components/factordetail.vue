<template>

  <div>


    <br/>
    <!--    <router-link to="ESG" class="myreturn">-->
    <!--      < 返回-->
    <!--    </router-link>-->
    <div>
      <span onclick="window.history.go(-1)" class="myreturn">
        < 返回
      </span>
    </div>

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
              {{ item }}
            </el-col>
            <el-col :span="4">
            <span @click="toFundDetail(item.id)">
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
      aaa: ["基金一", "基金二", "基金三"]
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
  font-size: medium;
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

</style>

