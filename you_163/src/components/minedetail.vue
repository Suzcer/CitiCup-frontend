<template>

  <div>
    <el-container>
      <el-header>



        <br/>
        <router-link to="mine">
          <span class="myreturn"><i class="el-icon-caret-left"></i></span>
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

      axios.get('http://localhost:8181/user/getDetailedPrefer' + "?userId=" + this.userId).then(_d => {
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

