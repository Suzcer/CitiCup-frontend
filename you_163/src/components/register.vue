<template>


  <!--  <link rel="canonical" href="https://getbootstrap.com/docs/4.6/examples/sign-in/">-->

  <!--  &lt;!&ndash; Bootstrap core CSS &ndash;&gt;-->
  <!--&lt;!&ndash;  <link href="../../node_modules/bootstrap3/dist/css/bootstrap.min.css" rel="stylesheet">&ndash;&gt;-->

  <!--  &lt;!&ndash; Custom styles for this template &ndash;&gt;-->
  <!--  <link href="../assets/login/signin.css" rel="stylesheet">-->

  <!-- 没有引入单个css文件  -->

  <div>
    <br/>
    <router-link to="login">
      <span class="returnTo">
        <i class="el-icon-caret-left"></i>
      </span>
    </router-link>


    <div class="text-center">

      <div class="form-signin" style="width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;">
        <!--    <img class="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
        <h1 class="h3 mb-3 font-weight-normal">请填写以下注册信息</h1>
        <br/>
        <label for="username" class="sr-only">用户名</label>
        <input id="username" class="form-control username" placeholder="Username" required autofocus v-model="username">
        <label for="inputPassword" class="sr-only">密码</label>
        <input type="password" id="inputPassword" class="form-control passwd" placeholder="Password" required
               v-model="passwd">
        <br/>
        <!--        <div class="checkbox mb-3">-->
        <!--          <label>-->
        <!--            <input type="checkbox" value="remember-me" style="font-weight: 400;"> 记住我-->
        <!--          </label>-->
        <!--        </div>-->
        <h5>
          注册即表示遵循
          <el-link type="info">《用户协议》</el-link>
          ,点击此处查看。
        </h5>

        <button class="btn btn-lg btn-primary btn-block" @click="registerTo">注册</button>
        <br/>

      </div>

      <div class="myfooter" >
        <el-link type="primary" href="https://www.baidu.com">联系我们 </el-link>
        |
        <el-link type="primary" href="https://www.baidu.com"> 了解我们</el-link>
      </div>

      <div class="copyright">
        Copyright © 2021-2022 23C.com
      </div>

    </div>
  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      username: '',
      passwd: '',
    }
  },
  created() {

  },
  methods: {
    registerTo() {
      let _this=this //以下进行校验

      // (?![0-9A-Za-z]+$)意思是不能是纯大写字母的密码，也不能是纯小写字母的密码，也不能是纯数字的密码，也不能是由大写字母和小写字母和数字组合的密码。
      // (?![-`=\[\];',.~!@#$%^&*()_+|{}:"?]+$)意思是不能是指定的纯特殊字符的密码。
      // (?![0-9-`=\[\];',.~!@#$%^&*()_+|{}:"?]+$)意思是不能是由指定的纯特殊字符和数字组合的密码。
      // (?![A-Za-z-`=\[\];',.~!@#$%^&*()_+|{}:"?]+$)意思是不能是由指定的纯特殊字符和大写字母和小写字母组合的密码。
      // [0-9a-zA-Z-`=\[\];',.~!@#$%^&*()_+|{}:"?]意思是定义字符范围，注意此不包括\s空格字符。
      // {8,16}意思是定义密码匹配的长度。

      let regex = /^(?![0-9A-Za-z]+$)(?![-`=\[\];',.~!@#$%^&*()_+|{}:"?]+$)(?![0-9-`=\[\];',.~!@#$%^&*()_+|{}:"?]+$)(?![A-Za-z-`=\[\];',.~!@#$%^&*()_+|{}:"?]+$)[0-9a-zA-Z-`=\[\];',.~!@#$%^&*()_+|{}:"?]{4,16}$/;
      let test = regex.test(_this.passwd);
      console.log(test+" ----checkAction2---- "+_this.passwd);//输出正则匹配结果

      if(test===false){
        this.$notify.error({
          title: '错误',
          message: '密码格式有误，密码需要出现大写字母、小写字母、数字、特殊字符，且长度为4-16位'
        });
        _this.passwd=""
      }else{

        axios.post('http://47.96.124.191:8181/user/register',
          {"name": _this.username, "password": _this.passwd}
        ).then(_d => {
          console.log("注册成功")
          this.$router.push({
            name: "login",
          })

        }).catch(err=>{
          console.log("注册失败")
        })
      }
    },


  },
}
</script>

<style scoped>
/*@import "src/assets/login/signin.css";*/

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

#inputEmail {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

#inputPassword {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.returnTo {
  margin: 1rem 0 0 .5rem;
  font-size: large;
  color: #736c6c;
}


.username {
  height: .8rem;
}


.copyright{
  font-size: .2rem;
  color: #736c6c;
}

.passwd {
  height: .8rem;
}

</style>
