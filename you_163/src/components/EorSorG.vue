<template>

  <div>
    <el-container>

      <br/>
      <router-link to="ESG">
          <span class="myreturn">
            <i class="el-icon-caret-left"></i>
          </span>
      </router-link>

      <el-header>
        <div class="Bigtitle">
          {{ EorSorG.name }}
        </div>
      </el-header>

      <el-main>


        <template>
          <el-collapse v-model="activateName"  v-loading="loading">
            <el-collapse-item v-for="(value,key) in EorSorGList" :key="key" v-bind:name="key" v-bind:title='key' class="Bigitem" >

              <div v-for="item in value" class="eachitem">

                <br/>
                <el-row>
                  <el-col :span="22">
                    {{ item.name }}
                  </el-col>
                  <el-col :span="2">
                    <span @click="toFactorDetail(item.id)">
                      <i class="el-icon-caret-right"></i>
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
      loading: true,
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
    },
    getData(){
      let _this = this
      _this.loading=true

      console.log(_this.EorSorG)
      axios.get('http://localhost:8181/factor/getFactorList?firstClass=' + _this.EorSorG.id).then(_d => {
        _this.EorSorGList = _d.data;
        console.log(_d.data)
        _this.loading=false
      }).catch(err => {
        console.log("失败")
      })
    }
  },
  created() {
    this.getData()
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
  font-size: large;
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



.eachitem:hover {
  color: #bb6565;
  background: #f3f3f3;
}

</style>

