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
                <i class="el-icon-magic-stick"></i>收益率
              </div>
            </button>
            <button type="button" class="btn btn-default mybtn" @click="fetchRank(2)">
              <div class="subtitle">
                <i class="el-icon-money"></i>关注度
              </div>
            </button>
          </div>


        </div>


        <div>
          <template>

            <el-table
              :data="ESGrank"
              height="420"
              style="width: 100%" class="mytable"
              :row-style="tableRowClassName"
              :header-cell-style="tableHeaderCellStyle"
            >
              <el-table-column prop="factorId" class="firstcol" label="Id"></el-table-column>
              <el-table-column prop="firstClass" class="secondcol" label="类别"></el-table-column>
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
}

</style>
