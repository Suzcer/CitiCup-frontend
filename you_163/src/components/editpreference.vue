<template>

  <div>
    <br/>
    <router-link to="minedetail">
        <span class="myreturn">
          < 返回
        </span>
    </router-link>

    <div>
      <div class="Bigtitle">我的ESG偏好</div>
<!--      {{editdetail}}-->

      <el-table
        :data="editdetail"
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
  font-size: medium;
  color: #736c6c;
}
</style>
