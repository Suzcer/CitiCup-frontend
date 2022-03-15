<template>

  <div>
    <el-container>

      <br/>
      <router-link to="ESG">
          <span class="myreturn">
            < 返回
          </span>
      </router-link>

      <el-header>
        <div class="Bigtitle">
          {{EorSorG}}
        </div>
      </el-header>

      <el-main>

        <br/>



        <ul>
          <li v-for="EorSorGItem in EorSorGList" class="ListLayout" v-model="name">
            <span class="myfont">
              {{EorSorGItem}}
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
  name: 'EorSorG',
  methods: {

    //TODO： 实现各级因素的获取
    created() {
      axios.get('http://localhost:8181/article/all').then(_d => {
        this.articles = _d.data;
      })
    }
  },
  data() {
    return {
      EorSorGList:["第一个因素","第二个因素","第三个因素","第四个因素","第五个因素"],
      name:'',
      EorSorG:this.$route.params.EorSorG,
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

