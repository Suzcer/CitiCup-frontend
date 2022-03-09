<template>

  <div>
    <el-container>
      <el-header>
        <div class="Bigtitle">
          环境
        </div>
      </el-header>

      <el-main>
        <router-link to="ESG">
      <span class="myreturn">
        < 返回
      </span>
        </router-link>





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
  name: 'environment',
  methods: {},
  data() {
    return {}
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

  margin: 0 0 0 .3rem;
  font-size: medium;
  color: #736c6c;
}

</style>

