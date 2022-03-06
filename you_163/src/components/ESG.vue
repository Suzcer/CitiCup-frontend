<template>
  <div>
    <div class="Bigtitle">
      智选因子
    </div>
    <footerbar>

    </footerbar>
  </div>

</template>
<script>
import axios from 'axios'
import footerbar from './footerbar'

export default {
  name: 'ESG',
  data() {
    return {
      search_v: ''
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
</style>
