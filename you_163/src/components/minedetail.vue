<template>

  <div>
    <el-container>
      <el-header>

        <div class="Bigtitle">
          我的ESG偏好
        </div>
      </el-header>

      <el-main>
        <router-link to="mine">
      <span class="myreturn">
        < 返回
      </span>
        </router-link>


        <el-button class="BigLayout">
          <span class="myalpha">
            E
          </span>
          <div class="myfont">
            环境
          </div>
          <span class="myedit">
            编辑>
          </span>
        </el-button>
        <el-button class="BigLayout">
          <span class="myalpha">
            S
          </span>
          <div class="myfont">
            社会
          </div>
          <span class="myedit">
            编辑>
          </span>
        </el-button>
        <el-button class="BigLayout">
          <span class="myalpha">
            G
          </span>
          <div class="myfont">
            治理
          </div>
          <span class="myedit">
            编辑>
          </span>
        </el-button>

      </el-main>


      <el-footer>
        <footerbar>

        </footerbar>
      </el-footer>
    </el-container>
  </div>

</template>
<script>
import axios from 'axios'
import footerbar from './footerbar'

export default {
  name: 'minedetail',
  methods: {


  },
  created:function(){
    axios({
      url:"/posts",
      params:{
        id:1
      }
    }).then(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  },

  data() {
    return {

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

.myreturn {
  margin: .5rem 0 0 .3rem;
  font-size: medium;
  color: #736c6c;
}


.myfont {
  font-size: large;
  color: black;
}

.BigLayout {
  height: 3rem;
  width: 5.5rem;
  margin: .2rem .2rem .2rem .2rem;
  color: #f7f7f7;
  box-shadow: .1rem .1rem .3rem #888888;
  background: #f7f7f7;
}

.myalpha {
  left: 59px;
  top: 136px;
  width: 24px;
  height: 28px;
  color: rgba(0, 161, 99, 1);
  font-size: 24px;
  margin: .2rem 6rem 5rem .2rem;

}
.myedit{
  color: #736c6c;
  margin: .2rem .5rem 4rem 4rem;

}

</style>

