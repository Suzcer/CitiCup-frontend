<template>
  <div>
    <div class="Bigtitle">
      排行榜
    </div>

    <div class="mybtn">
      <van-button plain round type="primary">
        收益率&#12288&#12288&#12288&#12288&#12288|&#12288&#12288&#12288&#12288&#12288关注度
      </van-button>
    </div>

    <div class="mywrapper">
      <van-tabs v-model:active="active" scrollspy sticky>
        <van-tab v-for="(n,inx) in ESGrank" :title="n.title" :key=inx>
          <div class="myitem">
            {{ n.attr }}:{{ n.title }}
            <br/>
            <br/>
          </div>
        </van-tab>
      </van-tabs>
    </div>


    <footerbar>

    </footerbar>
  </div>

</template>
<script>
import axios from 'axios'
import footerbar from './footerbar'

export default {
  name: 'rank',
  data() {
    return {
      ESGrank:
        [
          {
            title: '碳排放及减排量',
            attr: 'E'
          },
          {
            title: '员工管理',
            attr: 'S'
          },
          {
            title: '企业治理与公司架构',
            attr: 'G'
          },
          {
            title: '气候变化',
            attr: 'E'
          },
          {
            title: '企业经营',
            attr: 'G'
          },
          {
            title: '商业道德',
            attr: 'G'
          },
          {
            title: '客户与消费者管理',
            attr: 'S'
          },
          {
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

.Bigtitle {
  margin: .5rem 0 0 0;
  font-size: x-large;
  text-align: center;
  font-weight: bold;
}

.mybtn {
  color: #f8f8f8;
  text-align: center;
  width: 6rem;
  margin: .2rem 4rem 0 .2rem;
}
.mywrapper{
  width: 6rem;
  margin: .2rem 0 0 .2rem;
}
.myitem{
  background-color: #f5f5f5;
  text-align: center;
  margin: .1rem 0 0 0;
  font-size: medium;

}
</style>
