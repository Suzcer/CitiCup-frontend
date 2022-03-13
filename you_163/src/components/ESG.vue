<template>
  <div id="app">



    <div class="Bigtitle">
      智选因子
    </div>

    <div v-for="EorSorG in ESG">
      <el-button class="BigLayout" @click="toEorSorG(EorSorG)">
        <div class="myfont">
          {{EorSorG}}
        </div>
      </el-button>
    </div>



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
  methods: {
    toEorSorG(EorSorG) {
      this.$router.push({
        name: "EorSorG",
        params: {
          EorSorG: EorSorG,
        }
      })
    },
  },

  data() {
    return {
      search_v: '',
      ESG:['环境','社会','治理']
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
