<template>
  <div id="app">


    <div class="Bigtitle">
      智选因子
    </div>

    <div v-for="EorSorG in ESG">
      <el-button class="BigLayout" @click="toEorSorG(EorSorG)">

        <el-row>
          <el-col :span="8">
            <div class="bigESG">
<!--              <img src="src/assets/E.png">-->
              {{EorSorG.id}}
            </div>
          </el-col>

          <el-col :span="16">
            <h5 class="myfont">
              {{ EorSorG.name }}
            </h5>
            <el-divider></el-divider>
            <h5 class="myfont">
              {{EorSorG.description}}
            </h5>
          </el-col>
        </el-row>

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
      ESG: [
        {
          name:'环境',
          description: 'Environment',
          id: 'E'
        },
        {
          name: '社会',
          description: 'Society',
          id: 'S'
        },
        {
          name: '治理',
          description: 'Governance',
          id: 'G'
        },
      ],
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
  height: 2.8rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .1rem #cfcfcf;
  background: #f7f7f7;
}

.bigESG{
  font-size: 2rem;
  color: #00a98f;
}
</style>
