<template>

  <div>
    this is the news page.the transform param is {{this.$route.params}}
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "passagedetail",
  data(){
    return{
      // id:{{this.$route.params}},
    }
  },
  created() {
    axios.get('http://localhost:8181/article/').then(_d => {
      this.articles = _d.data;
    })
  }
}
</script>

<style scoped>

</style>
