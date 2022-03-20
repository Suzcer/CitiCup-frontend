<template>

  <div>
    <el-container>
      <el-header>



        <br/>
        <router-link to="mine">
          <span class="myreturn">
            <svg t="1647703971703" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2028" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" p-id="2029" fill="#707070"></path></svg>
</span>
        </router-link>

        <div class="Bigtitle">我的ESG偏好</div>

      </el-header>

      <el-main>


        <el-button class="BigLayout">
          <span class="myalpha">E</span>

          <span class="myedit" @click="editpreference('E')">编辑></span>


          <el-table
            :data="Edetail"
            height="2.3rem"
            style="width: 100%">
            <el-table-column
              prop="factorName"
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
          <span class="myedit" @click="editpreference('S')">编辑></span>

          <el-table
            :data="Sdetail"
            height="2.3rem"
            style="width: 100%">
            <el-table-column
              prop="factorName"
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
          <span class="myedit" @click="editpreference('G')">编辑></span>

          <el-table
            :data="Gdetail"
            height="2.3rem"
            style="width: 100%">
            <el-table-column
              prop="factorName"
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
      Sdetail: [],
      Gdetail: [],     //实在是不想再加一层循环遍历

    }
  },
  methods: {
    getDetailedPrefer() {
      let _this = this
      //获取详细的preferList

      axios.get('http://47.96.124.191:8181/user/getDetailedPrefer' + "?userId=" + this.userId).then(_d => {
        _this.ESGdetail = _d.data;

        // console.log(_this.ESGdetail)
        _this.Edetail = _this.ESGdetail['eprefer']
        _this.Sdetail = _this.ESGdetail['sprefer']
        _this.Gdetail = _this.ESGdetail['gprefer']


      }).catch(err => {
        console.log(err)
        console.log("ESG详细偏好获取失败")
      })
    },
    editpreference(Char) {

      let _this = this

      //接收字符，确认需要编辑的是E还是S还是G
      if (Char === 'E') {
        this.$router.push({
          name: "editpreference",
          params: {
            editdetail: _this.Edetail,
          }
        })
      } else if (Char === 'S') {
        this.$router.push({
          name: "editpreference",
          params: {
            editdetail: _this.Sdetail,
          }
        })
      } else if (Char === 'G') {
        this.$router.push({
          name: "editpreference",
          params: {
            editdetail: _this.Gdetail,
          }
        })
      }
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
  font-size: x-large;
  text-align: center;
  font-weight: bold;
}

.myreturn {
  margin: .5rem 0 0 .3rem;
  font-size: large;
  color: #736c6c;
}


.BigLayout {
  height: 3rem;
  width: 5.7rem;
  margin: .2rem .2rem .2rem .1rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .2rem #888888;
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

