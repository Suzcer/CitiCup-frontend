<template>

  <div>
    <el-container>
      <el-header>


        <!--        <el-table-->
        <!--          :data="tableData"-->
        <!--          stripe-->
        <!--          style="width: 100%">-->
        <!--          <el-table-column-->
        <!--            prop="date"-->
        <!--            label="偏好因子"-->
        <!--            width="180">-->
        <!--          </el-table-column>-->
        <!--          <el-table-column-->
        <!--            prop="name"-->
        <!--            label="偏好程度"-->
        <!--            width="180">-->
        <!--          </el-table-column>-->
        <!--        </el-table>-->


        <router-link to="mine">
          <span class="myreturn">< 返回</span>
        </router-link>

        <div class="Bigtitle">我的ESG偏好</div>

      </el-header>

      <el-main>


        <el-button class="BigLayout">
          <span class="myalpha">E</span>
          <span class="myedit">编辑></span>

          <el-table
            :data="Edetail"
            height="150"
            style="width: 100%">
            <el-table-column
              prop="factorId"
              label="偏好因子"
              width="180">
            </el-table-column>
            <el-table-column
              prop="preference"
              label="偏好程度"
              width="100">
            </el-table-column>

          </el-table>

        </el-button>


        <el-button class="BigLayout">
          <span class="myalpha">S</span>
          <span class="myedit">编辑></span>

          <el-table
            :data="Sdetail"
            height="150"
            style="width: 100%">
            <el-table-column
              prop="factorId"
              label="偏好因子"
              width="180">
            </el-table-column>
            <el-table-column
              prop="preference"
              label="偏好程度"
              width="100">
            </el-table-column>

          </el-table>

        </el-button>

        <el-button class="BigLayout">
          <span class="myalpha">G</span>
          <span class="myedit">编辑></span>

          <el-table
            :data="Gdetail"
            height="150"
            style="width: 100%">
            <el-table-column
              prop="factorId"
              label="偏好因子"
              width="180">
            </el-table-column>
            <el-table-column
              prop="preference"
              label="偏好程度"
              width="100">
            </el-table-column>

          </el-table>

        </el-button>

      </el-main>


      <el-footer>
        <footerbar>
        </footerbar>
      </el-footer>
    </el-container>
  </div>

</template>
<script>
import axios from 'axios'
import footerbar from './footerbar'

export default {
  name: 'minedetail',
  data() {
    return {
      userId: window.sessionStorage.getItem("userId"),
      ESGdetail: [],
      Edetail: [],
      Sdetail:[],
      Gdetail:[],     //实在是不想再加一层遍历了

      tableData: [

        {
          factor: '因素1',
          count: '100',
        }, {
          factor: '因素2',
          count: '49',
        }, {
          factor: '因素7',
          count: '32',
        }, {
          factor: '因素3',
          count: '57',
        }]

    }
  },
  methods: {
    getDetailedPrefer() {
      let _this = this
      //获取详细的preferList

      axios.get('http://localhost:8181/user/getDetailedPrefer' + "?userId=" + this.userId).then(_d => {
        _this.ESGdetail = _d.data;

        // console.log(_this.ESGdetail)
        console.log("ESG详细偏好获取成功")
        _this.Edetail=_this.ESGdetail['eprefer']
        _this.Sdetail=_this.ESGdetail['sprefer']
        _this.Gdetail=_this.ESGdetail['gprefer']


      }).catch(err => {
        console.log(err)
        console.log("ESG详细偏好获取失败")
      })
    }
  },
  mounted() {

    this.getDetailedPrefer();

    //监听刷新，否则可能丢失数据
    window.addEventListener("load", () => {
      this.getDetailedPrefer();
    });
  },

  components: {footerbar}
}
</script>

<style scoped>

.Bigtitle {
  margin: .5rem 0 0 0;
  font-size: x-large;
  text-align: center;
  font-weight: bold;
}

.myreturn {
  margin: .5rem 0 0 .3rem;
  font-size: medium;
  color: #736c6c;
}


.BigLayout {
  height: 3rem;
  width: 5.5rem;
  margin: .2rem .2rem .2rem .2rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .3rem #888888;
  background: #f7f7f7;
}

.myalpha {
  color: rgba(0, 161, 99, 1);
  font-size: 24px;
  /*margin: .2rem 6rem 5rem .2rem;*/
}

.myedit {
  color: #736c6c;
  margin: 0 0 4rem 4rem;
}

</style>

