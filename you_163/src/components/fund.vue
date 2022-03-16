<template>

  <el-container>


    <el-header>


      <div>
        <br/>
<!--        <router-link to="factordetail" class="myreturn">-->
<!--          < 返回-->
<!--        </router-link>-->
        <div>
          <span  onclick="window.history.go(-1)">
            < 返回
          </span>
        </div>

        <div>
          <div class="Bigtitle">基金一</div>
        </div>
      </div>
    </el-header>
    <el-main>

    </el-main>


    <footerbar>

    </footerbar>
  </el-container>

</template>

<script>

import footerbar from "./footerbar";

export default {
  name: "fund",
  data() {
    return {

    }
  },
  created() {

  },
  methods:{

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
  margin: .5rem 0 0 .3rem;
  font-size: medium;
  color: #736c6c;
}

</style>
