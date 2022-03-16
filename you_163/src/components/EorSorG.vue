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
          {{ EorSorG.name }}
        </div>
      </el-header>

      <el-main>


        <template>
          <el-collapse v-model="activateName">
            <el-collapse-item v-for="(value,key) in EorSorGList" :key="key" v-bind:name="key" v-bind:title='key'>

              <div v-for="item in value" class="eachitem">

                <br/>
                <el-row>
                  <el-col :span="20">
                    {{ item.name }}
                  </el-col>
                  <el-col :span="4">
                    <span @click="toFactorDetail(item.id)">
                      >详情
                    </span>
                  </el-col>

                </el-row>

              </div>


            </el-collapse-item>
          </el-collapse>

        </template>


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
  data() {
    return {
      EorSorGList: {},
      name: '',
      EorSorG: this.$route.params.EorSorG,    //传进来的是{id..description.. }
      activateName: [],
    }
  },
  methods: {
    toFactorDetail(factorId){
      this.$router.push({
        name: "factordetail",
        params: {
          factorId: factorId,
        }
      })
    }
  },
  created() {
// 又写在了methods里面...
    let _this = this

    console.log(_this.EorSorG)
    axios.get('http://localhost:8181/factor/getFactorList?firstClass=' + _this.EorSorG.id).then(_d => {
      _this.EorSorGList = _d.data;
      console.log(_d.data)
    }).catch(err => {
      console.log("失败")
    })
  },
  components: {footerbar},
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

  margin: 0 0 0 .3rem;
  font-size: medium;
  color: #736c6c;
}

.ListLayout {
  height: 1.5rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .2rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .1rem #ebeced;
  background: #f7f7f7;
  text-align: center;

}

.myfont {
  color: black;
  font-size: x-large;
}


.eachitem:hover {
  color: #bb6565;
  background: #f3f3f3;
}


</style>

