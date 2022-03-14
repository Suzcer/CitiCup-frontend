<template>

  <div>
    <div>
      排名详情
    </div>

    <router-link to="rank">
      < 返回
    </router-link>
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

</style>

