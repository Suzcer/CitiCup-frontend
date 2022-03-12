// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/rem'
import './assets/reset.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'

import { Button,Col, Row,Search,Tab,Tabs,Swipe, SwipeItem,Grid, GridItem,Tabbar,
  TabbarItem,Image as VanImage,Divider,Cell, CellGroup} from 'vant';


Vue.use(Button).use(Row).use(Col).use(Search).use(Tab)
  .use(Tabs).use(Swipe).use(SwipeItem).use(Grid).use(GridItem)
  .use(Tabbar).use(TabbarItem).use(VanImage).use(Divider).use(Cell)
  .use(CellGroup);
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
