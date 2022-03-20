<template>

  <div>
    <el-container>

      <br/>
      <router-link to="ESG">
          <span class="myreturn">
            <svg t="1647703971703" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2028" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" p-id="2029" fill="#707070"></path></svg>

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
      axios.get('http://47.96.124.191:8181/factor/getFactorList?firstClass=' + _this.EorSorG.id).then(_d => {
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

