<template>

  <div>


    <br/>
    <router-link to="rank">
      < 返回
    </router-link>

    <div>
      <div class="Bigtitle">我的ESG偏好</div>
    </div>

    <div>
      <el-button class="BigLayout" >
        <div class="myfont">
          简介：一些简介
        </div>
      </el-button>
    </div>

    <footerbar>

    </footerbar>
  </div>

</template>
<script>
import axios from 'axios'
import footerbar from './footerbar'

export default {
  name: 'rankdetail',
  data() {
    return {
      rankId: this.$route.params.articleId,
    }
  },
  methods:{

  },


  //TODO: 后端接口尚未实现，即通过factorId调取各种详情信息，其中factorId是rank页面通过route传入的


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

.myfont {
  font-size: large;
  color: black;
}

.BigLayout {
  height: 2rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .1rem #ebeced;
  background: #f7f7f7;

}
</style>

