<template>


  <!--  <link rel="canonical" href="https://getbootstrap.com/docs/4.6/examples/sign-in/">-->

  <!--  &lt;!&ndash; Bootstrap core CSS &ndash;&gt;-->
  <!--&lt;!&ndash;  <link href="../../node_modules/bootstrap3/dist/css/bootstrap.min.css" rel="stylesheet">&ndash;&gt;-->

  <!--  &lt;!&ndash; Custom styles for this template &ndash;&gt;-->
  <!--  <link href="../assets/login/signin.css" rel="stylesheet">-->

  <!-- 没有引入单个css文件  -->

  <div>
    <br/>
    <br/>
    <router-link to="login">
      <span class="returnTo">
        < 返回
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
        <label for="inputEmail" class="sr-only">用户名</label>
        <input  id="inputEmail" class="form-control" placeholder="Username" required autofocus style=" margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;" v-model="username">
        <label for="inputPassword" class="sr-only">密码</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required style="  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;" v-model="passwd">
        <br/>
<!--        <div class="checkbox mb-3">-->
<!--          <label>-->
<!--            <input type="checkbox" value="remember-me" style="font-weight: 400;"> 记住我-->
<!--          </label>-->
<!--        </div>-->
        <h5> 注册即表示遵循《用户协议》,点击此处查看。 </h5>
        <button class="btn btn-lg btn-primary btn-block" @click="registerTo">注册</button>
        <br/>

      </div>

    </div>
  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "register",
  data(){
    return {
      username:'',
      passwd:'',
    }
  },
  methods:{
    registerTo(){
      axios.post('http://localhost:8181/user/register').then(_d => {
        console.log("注册成功")
      }).catch(err => {
        console.log(err)
        console.log("注册失败")
      });
    }
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

.returnTo {
  margin: 1rem 0 0 .5rem;
  font-size: medium;
  color: #736c6c;
}

</style>
