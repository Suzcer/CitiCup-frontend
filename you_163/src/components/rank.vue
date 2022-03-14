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

          <div class="btn-group mybtngroup" role="group" >
            <button type="button" class="btn btn-default mybtn" @click="fetchRank(1)">收益率</button>
            <button type="button" class="btn btn-default mybtn" @click="fetchRank(2)">关注度</button>
          </div>


        </div>



        <div>
          <template>
            <!--   TODO 表格内容太长，导致分行显示           -->


            <el-table
              :data="ESGrank"
              height="500"
              style="width: 100%" class="mytable"
              :row-class-name="tableRowClassName"
            >
              <el-table-column prop="factorId" class="firstcol" label="排名"></el-table-column>
              <el-table-column prop="firstClass" class="secondcol" label="类别"></el-table-column>
              <el-table-column prop="name" class="thirdcol" label="因素" width="200"></el-table-column>

              <el-table-column
                fixed="right"
                label="操作"
                width="50">
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
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },

    fetchRank(rankMethod){

      let _this=this
      axios.get('http://localhost:8181/factor/rank'+rankMethod).then(_d => {

        _this.ESGrank = _d.data

        console.log("查询成功")
      }).catch(err => {
          console.log("查询失败")
        }
      )
    },


    // TODO : 选中特定行，并实现跳转
    handleClick(row){
      console.log("进入该准备跳转的页面")
      console.log(row)
    }
  },
  data() {
    return {
      ESGrank:[],

      active: ''
    }
  },
  created() {
    let _this=this
    axios.get('http://localhost:8181/factor/rank1').then(_d => {
      _this.ESGrank = _d.data;
      console.log("初始化成功")
    }).catch(err=>{
      console.log("初始化失败")
    })
  },
  components: {footerbar}
}
</script>

<style scoped>

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
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
  box-shadow: .1rem .1rem .3rem #888888;
}

.mybtngroup{
  margin: 0 0 0 .8rem;
}

</style>
