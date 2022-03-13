import Vue from 'vue'
import Router from 'vue-router'
import app_index from '@/components/app_index';
import ESG from '@/components/ESG';
import rank from '@/components/rank';
import mine from '@/components/mine';
import minedetail from '@/components/minedetail';
import rankdetail from "@/components/rankdetail";
import passagedetail from "@/components/passagedetail";
import login from "@/components/login";
import register from "@/components/register";
import EorSorG from "@/components/EorSorG";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app_index',
      component: app_index
    },
    {
      path: '/ESG',
      name: 'ESG',
      component: ESG
    }, {
      path: '/rank',
      name: 'rank',
      component: rank
    }, {
      path: '/mine',
      name: 'mine',
      component: mine
    }, {
      path: '/minedetail',
      name: 'minedetail',
      component: minedetail
    }, {
      path: '/EorSorG',
      name: 'EorSorG',
      component: EorSorG
    }, {
      path: '/rankdetail',
      name: 'rankdetail',
      component: rankdetail
    },{
      path: '/passagedetail/:id',
      name: 'passagedetail',
      component: passagedetail
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/register',
      name: 'register',
      component: register
    },
  ]
})
