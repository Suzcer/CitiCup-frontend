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
  methods:{

  },
  data() {
    return {

    }
  },
  components: {footerbar}
}
</script>
<style scoped>

</style>

