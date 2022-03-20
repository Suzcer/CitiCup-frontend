<template>

  <div>
    <br/>
    <router-link to="minedetail">
        <span class="myreturn">
          <svg t="1647703971703" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2028" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" p-id="2029" fill="#707070"></path></svg>

        </span>
    </router-link>

    <div>
      <div class="Bigtitle">我的ESG偏好</div>
<!--      {{editdetail}}-->

      <el-table
        :data="editdetail"
        height="450"
        style="width: 100%"
        class="mytable"
      >
        <el-table-column
          prop="factorName"
          label="偏好因子"
          width="120">
        </el-table-column>
        <el-table-column
          prop="preference"
          label="偏好程度"
          width="100">
        </el-table-column>

        <el-table-column
          width="150"
        >
          <template slot="header" slot-scope="scope">
            <el-button type="primary" round @click="postChange()">保存</el-button>
          </template>



<!--          <template #default = 'scope'>-->
<!--            <router-link :to="'/fund/'+scope.row.fundId">{{scope.row.fundName}}</router-link>-->
<!--          </template>-->


          <!--  TODO   表格中进行基金的修改    -->
          <template slot-scope="scope">
            <el-input placeholder="您认为的偏好程度" @click="editpreference(scope.row.factorId,scope.row.preference)" v-model="scope.row.preference"></el-input>
          </template>
        </el-table-column>



      </el-table>

    </div>


    <footerbar>
    </footerbar>

  </div>



</template>

<script>
import footerbar from "./footerbar";
import axios from "axios";

export default {
  name: "editpreference",
  data() {
    return {
      editdetail:this.$route.params.editdetail,
      editdata:[],
      userId:window.sessionStorage.getItem("userId"),
    }
  },

  //TODO 进行 preference 的修改
  methods:{
    postChange(){

      let _this = this
      this.$confirm('此操作可能影响后续基金推荐, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        for(let i=0;i<_this.editdetail.length;i++){
          axios.get('http://localhost:8181/user/addPrefer?userId=' + _this.userId+"&factorId="+_this.editdetail[i].factorId+"&preference="+_this.editdetail[i].preference).then(_d => {
            console.log("更新偏好成功")

          }).catch(err => {
              console.log("查询失败")
            }
          )

        }

        this.$message({
          type: 'success',
          message: '修改成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        });
      });
    },
    editpreference(factorId,preference){

      let _this = this
      // console.log(_this.screenText)
      //查找的接口

      axios.get('http://localhost:8181/user/addPrefer?userId=' + _this.userId+"&factorId="+factorId+"&preference="+preference).then(_d => {

        console.log("更新偏好成功")

      }).catch(err => {
          console.log("查询失败")
        }
      )

    }
  },
  created() {
    // console.log(this.editdetail)
  },
  components: {footerbar},
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
  margin: 0 0 0 .3rem;
  font-size: large;
  color: #736c6c;
}

.mytable{
  margin: 0 0 0 .2rem;
}
</style>
