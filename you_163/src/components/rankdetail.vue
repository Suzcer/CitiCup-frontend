<template>

  <div>


    <br/>
    <router-link to="rank" class="myreturn">
      < 返回
    </router-link>

    <div>
      <div class="Bigtitle">碳排放及排放量</div>
    </div>

    <div>
      <el-button class="BigLayout">
        <div class="myfont">
          简介：一些简介
        </div>
      </el-button>

      <div class="BigLayout">

        <el-row>
          <el-col :span="12">
            <h4 class="littleTitle">
              关注基金
            </h4>
          </el-col>
          <el-col :span="12">
            <div>

            </div>
          </el-col>
        </el-row>

      </div>
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
  methods: {},


  //TODO: 后端接口尚未实现，即通过factorId调取各种详情信息，其中factorId是rank页面通过route传入的


  components: {footerbar}
}
</script>

<style scoped>

.Bigtitle {
  margin: 0 0 0 0;
  font-size: x-large;
  text-align: center;
  font-weight: bold;
}

.myfont {
  font-size: large;
  color: #858585;
}

.BigLayout {
  height: 2rem;
  width: 5.5rem;
  margin: .2rem .3rem .2rem .4rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .1rem #ebeced;
  background: #f7f7f7;

}

.littleTitle{
  color: black;
  margin: .2rem 0 0 .2rem;
  font-weight: bold;
}

.myreturn {
  margin: .5rem 0 0 .3rem;
  font-size: medium;
  color: #736c6c;
}


</style>

