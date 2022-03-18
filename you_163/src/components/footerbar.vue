<template>
  <div >

    <van-tabbar v-model="active">

<!--      <van-tabbar-item to="/ESG"   icon="home-o"  dot></van-tabbar-item>-->
<!--      <van-tabbar-item to="/" icon="search"></van-tabbar-item>-->
<!--      <van-tabbar-item to="/rank" icon="bar-chart-o" badge="5"></van-tabbar-item>-->
<!--      <van-tabbar-item to="/mine" icon="setting-o" badge="3"></van-tabbar-item>-->


      <van-tabbar-item to="/ESG"  >
<!--        <img src="src/assets/picture/user.png">-->
        <i class="icon iconfont icon- myicon"></i>
      </van-tabbar-item>
      <van-tabbar-item to="/" icon="search">

      </van-tabbar-item>
      <van-tabbar-item to="/rank" icon="bar-chart-o" >

      </van-tabbar-item>
      <van-tabbar-item to="/mine" >
        <i class="icon iconfont icon-yonghu myicon"></i>
      </van-tabbar-item>

    </van-tabbar>
  </div>

</template>
<script>

export default {
  name: 'footerbar',
  data() {
    return {
      active:'',
    }
  }
}
</script>

<style scoped>
.myicon{
  font-size: x-large;
}
</style>
