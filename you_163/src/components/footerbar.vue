<template>
  <div >
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">时事</van-tabbar-item>
      <van-tabbar-item to="/ESG"   icon="search"  dot>ESG</van-tabbar-item>
      <van-tabbar-item to="/rank" icon="bar-chart-o" badge="5">排行</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="setting-o" badge="3">我的</van-tabbar-item>
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
