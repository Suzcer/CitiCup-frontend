<template>

  <div>
    <br/>
    <router-link to="minedetail">
        <span class="myreturn">
          <i class="el-icon-caret-left"></i>
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

          <!--  TODO   表格中进行基金的修改    -->
          <template slot-scope="scope">
            <el-input placeholder="您认为的偏好程度"></el-input>
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

export default {
  name: "editpreference",
  data() {
    return {
      editdetail:this.$route.params.editdetail,
      editdata:[],
    }
  },
  //TODO 进行 preference 的修改
  methods:{
    saveChange(factorId,edititem){

    },
    postChange(){
      this.$confirm('此操作可能影响后续基金推荐, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
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
