<template>
  <div id="app">
    <div class="Bigtitle">
      智选因子
    </div>

    <router-link to="environment">
      <el-button disabled class="BigLayout">
        <div class="myfont">
          环境
        </div>
      </el-button>
    </router-link>

    <router-link to="society">
      <el-button disabled class="BigLayout">
        <div class="myfont">
          社会
        </div>
      </el-button>
    </router-link>

    <router-link to="governance">
      <el-button disabled class="BigLayout">
        <div class="myfont">
          治理
        </div>
      </el-button>
    </router-link>


    <footerbar>

    </footerbar>
  </div>

</template>

<script>
import axios from 'axios'
import footerbar from './footerbar'
import Vue from "vue";

export default {
  name: 'ESG',
  methods: {},
  data() {
    return {
      search_v: ''
    }
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

.myfont {
  font-size: large;
  color: black;
}

.BigLayout {
  height: 3.5rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .3rem #888888;
  background: #f7f7f7;

}
</style>
