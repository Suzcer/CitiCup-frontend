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

        <br/>
        <br/>
        <br/>


        <ul>
          <li v-for="environmentItem in environmentList" class="ListLayout" v-model="name">
            <span class="myfont">
              {{environmentItem}}
            </span>
            <br/>
          </li>
        </ul>


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
    return {
      environmentList:["第一个因素","第二个因素","第三个因素","第四个因素","第五个因素"],
      name:''
    }
  },
  components: {footerbar},
  watch:{
    $route(to, from){
      this.name=this.$route.params.name;
    }
  }
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

.ListLayout {
  height: 1.5rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .2rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .3rem #888888;
  background: #f7f7f7;
  text-align: center;

}

.myfont{
  color: black;
  font-size: x-large;
}

</style>

