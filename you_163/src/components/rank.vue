<template>
  <div>

    <el-container>

      <el-header>

        <div class="Bigtitle">
          排行榜
        </div>
      </el-header>

      <el-main>


        <div>

          <div class="btn-group mybtngroup" role="group">
            <button type="button" class="btn btn-default mybtn" @click="fetchRank(1)">
              <div class="subtitle">
                <el-row>
                  <el-col :span="8">
                    <svg t="1647679876392" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2151" width="32" height="32"><path d="M691.9 524.1c-3.6-12-8.4-23.6-14.2-34.4-12.8-24-20.5-50.4-20.5-77.6v-4.6c0-22.8 3.6-44.8 10.3-65.4-32 12.9-58.5 36.4-75.5 66.1-12.8 22.4-20.2 48.4-20.2 76.1 0 12.7-37-45.3-41.4-93-0.8-8.7-1.3-17.6-1.3-26.5 0-37.8 7.5-73.9 21-106.8-56.7 31.4-99.3 85.1-115.9 149.3-1.6 6.3-2.9 12.6-4 19.1 98.9 88.8 147.5 224.6 108.9 337.8 43.6-6.3 82.4-27.5 110.9-58.4 18.7-20.3 33.1-44.6 41.5-71.7 1.3-4.1 2.4-8.3 3.4-12.6 2-8.4 3.4-17 4.2-25.8 0.5-5.7 0.8-11.6 0.8-17.4 0-18.9-2.8-37-8-54.2z" fill="#FFDE55" p-id="2152"></path><path d="M512 778.9c-5.8 0-11.7-0.2-17.6-0.8-46.5-4-90.5-24.6-124-58s-54.2-77.4-58.3-123.9c-2.9-33.4 2.4-67.1 15.5-97.4 12.5-29.1 32.1-55.2 56.7-75.5l20.9-17.3v27.1c0 20.5 3.3 40.4 9.8 59.3-0.8-8.4-1.3-16.8-1.3-25.3 0-21.4 2.7-42.6 8-63.2 17.2-66.6 61.7-123.9 122.1-157.3l31.9-17.6-13.7 33.7c-13.3 32.5-20.1 66.8-20.1 102 0 8.2 0.4 16.5 1.2 25.3 2 21.2 10.9 44.1 19.2 61 3.5-17.2 9.8-33.8 18.5-49.2 18.4-32.3 47.4-57.7 81.7-71.7l25.5-10.4-8.4 26.2c-6.4 19.9-9.6 40.6-9.6 61.5v4.6c0 24 6.4 48.1 19 71.6 6.3 11.7 11.4 24.1 15.2 36.8 5.6 18.8 8.5 38.2 8.5 57.8 0 6-0.3 12.1-0.9 18.6-0.8 9.2-2.4 18.5-4.5 27.6-1.2 5.1-2.4 9.4-3.6 13.4-8.8 28.2-24.1 54.7-44.3 76.6C620.9 756 568 778.9 512 778.9zM381.5 461.5c-32 35.8-48.2 83.7-43.9 132.6 7.3 83.3 75.6 151.4 159 158.6 54.5 4.7 107-15.6 144-55.6 17.7-19.1 31-42.2 38.7-66.8 1.1-3.4 2.1-7.2 3.1-11.7 1.9-8 3.2-16.1 3.9-24.1 0.5-5.7 0.8-11 0.8-16.3 0-17.1-2.5-34-7.4-50.4-3.3-11.1-7.8-21.9-13.2-32.1-14.6-27.3-22-55.4-22.1-83.7v-4.6c0-13.7 1.2-27.4 3.7-40.8-18.4 12.2-33.9 28.6-44.9 47.9-12.1 21.3-18.6 45.4-18.6 69.7 0 9.2-6.6 14.3-13.1 14.6-7.8 0.4-13.2-5.2-19.3-14.2-4.4-6.4-9.2-14.9-13.7-24.1-6.7-13.8-18.4-41-20.9-68.1-0.9-9.5-1.3-18.8-1.3-27.7 0-25.7 3.3-51 9.8-75.6-38.8 30.5-67.1 73.2-79.5 121.3-4.8 18.5-7.2 37.6-7.2 56.8 0 27.2 4.8 53.8 14.3 79.1 2.9 7.8-0.2 16.5-7.5 20.6-7.3 4.1-16.3 2.3-21.5-4.2-23.5-29.7-38.2-64.3-43.2-101.2z" fill="" p-id="2153"></path></svg>
                  </el-col>
                  <el-col :span="6" class="ranktitle">

                    <span >
                      收益率
                    </span>

                  </el-col>
                </el-row>

              </div>

            </button>


            <button type="button" class="btn btn-default mybtn" @click="fetchRank(1)">
              <div class="subtitle">
                <el-row>
                  <el-col :span="8">
                    <svg t="1647680386781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1300" width="32" height="32"><path d="M830.4 512C770.2 397.6 650.3 319.5 512 319.5c-52.2 0-101.7 11.1-146.5 31.1 43.7 26.7 84.8 58.1 122.1 94.6 9.7-5.5 20.9-8.6 32.8-8.6 37 0 66.9 30 66.9 66.9 0 15.4-5.2 29.5-13.9 40.8 30 41.5 54.5 86.4 73.6 133.6 78.9-31.9 144-91 183.4-165.9z" fill="#FFDE55" p-id="1301"></path><path d="M512 717c-69.1 0-136.5-19.1-195-55.2-56.8-35.1-103.3-84.9-134.4-143.9l-3.1-5.8 3.1-5.8c31.1-59.1 77.6-108.9 134.4-143.9 58.5-36.1 125.9-55.2 195-55.2s136.5 19.1 195 55.2c56.8 35.1 103.3 84.9 134.4 143.9l3.1 5.8-3.1 5.8C810.3 577 763.8 626.8 707 661.8 648.5 697.9 581.1 717 512 717zM207.8 512C269 623.2 385 692 512 692s243-68.8 304.2-180C755 400.8 639 332 512 332s-243 68.8-304.2 180z" fill="" p-id="1302"></path><path d="M520.4 583.1c-43.8 0-79.4-35.6-79.4-79.4 0-43.8 35.6-79.4 79.4-79.4s79.4 35.6 79.4 79.4c0 43.7-35.6 79.4-79.4 79.4z m0-133.9c-30 0-54.4 24.4-54.4 54.4s24.4 54.4 54.4 54.4 54.4-24.4 54.4-54.4-24.4-54.4-54.4-54.4z" fill="" p-id="1303"></path></svg>
                  </el-col>
                  <el-col :span="6" class="ranktitle">

                    <span>
                      关注度
                    </span>

                  </el-col>
                </el-row>

              </div>

            </button>


          </div>


        </div>


        <div>
          <template>

            <el-table
              :data="ESGrank"
              height="430"
              style="width: 100%" class="mytable"
              :row-style="tableRowClassName"
              :header-cell-style="tableHeaderCellStyle"
            >
              <el-table-column prop="factorId" class="firstcol" label="Id" width="50"></el-table-column>
              <el-table-column prop="firstClass" class="secondcol" label="类别" width="50"></el-table-column>
              <el-table-column prop="name" class="thirdcol" label="因素" width="200"></el-table-column>

              <el-table-column
                fixed="right"
                label="操作"
                width="45">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>

            </el-table>
          </template>
        </div>
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
  name: 'rank',
  methods: {

    tableRowClassName({row, rowIndex}) {
      //拿到每行的数据row
      console.log(row)
      if (rowIndex % 2 === 1) {
        return {//不知道为啥不能通过官网的classname获取
          background:'#c7e8ff',
          color: '#057fd7',
        }
      } else {
        return {
          color: '#057fd7',
        }
      }
    },

    tableHeaderCellStyle({row,column,rowIndex, columnIndex}){
      return{
        background:'#c7e8ff',
        color: '#057fd7',
      }
    },

    fetchRank(rankMethod) {

      let _this = this
      axios.get('http://localhost:8181/factor/rank' + rankMethod).then(_d => {

        _this.ESGrank = _d.data

        console.log("查询成功")
      }).catch(err => {
          console.log("查询失败")
        }
      )
    },


    // 选中特定行，并实现跳转
    handleClick(row) {
      console.log("进入该准备跳转的页面")
      console.log(row.factorId)//获取到该id
      console.log(row)
      this.$router.push({
        name: "factordetail",
        params: {
          factorId: row.factorId,
        }
      })

    }
  },
  data() {
    return {
      ESGrank: [],

      active: ''
    }
  },
  created() {
    let _this = this
    axios.get('http://localhost:8181/factor/rank1').then(_d => {
      _this.ESGrank = _d.data;
      console.log("初始化成功")
    }).catch(err => {
      console.log("初始化失败")
    })
  },
  components: {footerbar}
}
</script>

<style scoped>


.btn:focus {
  color: #057fd7;
}

.Bigtitle {
  margin: .5rem 0 0 0;
  font-size: x-large;
  text-align: center;
  font-weight: bold;
}

.btn-group {
  margin: 0 auto;
  width: 400px;
  height: 100px;
}

.mybtn {
  /*color: #f8f8f8;*/
  text-align: center;
  width: 2rem;
  /*margin: .2rem .2rem 0 .8rem;*/
  box-shadow: .1rem .1rem .1rem #d9d9d9;
  border-radius: .3rem;
  display: table;

}

.firstcol {
  text-align: center;
  font-size: larger;
  color: red;

}

.secondcol {
  text-align: center;
  font-size: xxx-large;
  color: red;

}

.thirdcol {
  color: red;

}

.mytable {
  margin: 0 0 0 0;
  box-shadow: .1rem .1rem .1rem #ebeced;
}

.mybtngroup {
  margin: 0 0 0 .8rem;
}


.subtitle {
  font-size: large;
  vertical-align: center;
  /*margin: .05rem 0 0 0;*/
}

.ranktitle{
  /*vertical-align: center;*/
  margin: .08rem 0 0 0 ;
}
</style>
