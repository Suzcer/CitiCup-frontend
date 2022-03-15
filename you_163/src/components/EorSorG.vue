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
          <el-table
            :data="EorSorGList"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">

                  <el-form-item >


                    <span v-for="eachitem in props.row.subitem">
                      {{eachitem}}
                      <br/>
                    </span>
                  </el-form-item>

                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              prop="item">
            </el-table-column>

          </el-table>
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
      EorSorGList: [
        {
          item: '第一项',
          subitem:[
            '11','12','13','14'
          ]
        },{
          item: '第二项',
          subitem:[
            '21','22','23','24'
          ]
        }
      ],
      name: '',
      EorSorG: this.$route.params.EorSorG,//传进来的是{id..description.. }

    }
  },
  methods: {},
//   created() {
// // 又写在了methods里面...
//     let _this = this
//
//     console.log(_this.EorSorG)
//     axios.get('http://localhost:8181/factor/getFactorList?firstClass=' + _this.EorSorG.id).then(_d => {
//       _this.EorSorGList = _d.data;
//       console.log(_d.data)
//     }).catch(err => {
//       console.log("失败")
//     })
//   },
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

</style>

