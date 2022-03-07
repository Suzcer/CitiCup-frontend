<template>
  <div>

    <el-container>
      <el-header>
        <div class="Bigtitle">
          排行榜
        </div>
      </el-header>

      <el-main>



    <div >
      <el-button round class="mybtn">收益率</el-button>
      <el-button round class="mybtn">关注度</el-button>
    </div>
    <br/>
    <br/>
    <br/>

<!--    <div class="mywrapper">-->
<!--      <van-tabs v-model:active="active" scrollspy sticky>-->
<!--        <van-tab v-for="(n,inx) in ESGrank" :title="n.title" :key=inx>-->
<!--          <div class="myitem">-->
<!--            {{ n.attr }}:{{ n.title }}-->
<!--            <br/>-->
<!--            <br/>-->
<!--          </div>-->
<!--        </van-tab>-->
<!--      </van-tabs>-->
<!--    </div>-->


    <div>
      <template>
        <el-table
          :data="ESGrank"
          style="width: 100%" class="mytable"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="rank"
            width="30"
            class="mycol"
          >
          </el-table-column>
          <el-table-column
            prop="attr"
            width="40">
          </el-table-column>
          <el-table-column
            prop="title">
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
  methods:{
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
  data() {
    return {
      ESGrank:
        [
          {
            rank:1,
            title: '碳排放及减排量',
            attr: 'E'
          },
          {
            rank:2,
            title: '员工管理',
            attr: 'S'
          },
          {
            rank:3,
            title: '企业治理与公司架构',
            attr: 'G'
          },
          {
            rank:4,
            title: '气候变化',
            attr: 'E'
          },
          {
            rank:5,
            title: '企业经营',
            attr: 'G'
          },
          {
            rank:6,
            title: '商业道德',
            attr: 'G'
          },
          {
            rank:7,
            title: '客户与消费者管理',
            attr: 'S'
          },
          {
            rank:8,
            title: '污染与排放',
            attr: 'E'
          },

        ],

      active: ''
    }
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

.mybtn {
  /*color: #f8f8f8;*/
  text-align: center;
  width: 1.5rem;
  margin: .2rem .2rem 0 .8rem;
  box-shadow: .1rem .1rem .1rem #d9d9d9;

}

.mycol{
  text-align: center;

}

.mytable{
  box-shadow: .1rem .1rem .3rem #888888;
}

</style>
