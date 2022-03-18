<template>
  <div id="app">


    <br/>
    <div class="Bigtitle">
      智选因子
    </div>

    <div v-for="item in ESG">
      <el-button class="BigLayout" @click="toEorSorG(item)">

        <el-row>
          <el-col :span="8">
            <div class="bigESG">
<!--              <img src="src/assets/E.png">-->
              <img :src="item.pic">
<!--              {{EorSorG.id}}-->
            </div>
          </el-col>

          <el-col :span="16">
            <h5 class="myfont">
              {{ item.name }}
            </h5>
            <el-divider></el-divider>
            <h5 class="myfont">
              {{item.description}}
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
          id: 'E',
          pic:require("../assets/picture/Efont.png")
        },
        {
          name: '社会',
          description: 'Society',
          id: 'S',
          pic:require("../assets/picture/Sfont.png")

        },
        {
          name: '治理',
          description: 'Governance',
          id: 'G',
          pic:require("../assets/picture/Gfont.png")
        },
      ],
    }
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

.myfont {
  font-size: large;
  color: black;
}

.BigLayout {
  height: 2.8rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .05rem rgba(222, 222, 222, 0.99);
  background: #f7f7f7;
}

.bigESG{
  font-size: 2rem;
  color: #057fd7;
}
</style>
