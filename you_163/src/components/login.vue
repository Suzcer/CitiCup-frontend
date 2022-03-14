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
    <router-link to="mine">
      <span class="returnTomine">
        < 返回
      </span>
    </router-link>


    <div class="text-center">

      <div class="form-signin" style="width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;">
        <!--    <img class="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
        <h1 class="h3 mb-3 font-weight-normal">请登录</h1>
        <label for="inputEmail" class="sr-only">用户名</label>
        <input id="inputEmail" class="form-control" placeholder="Username" required autofocus  v-model="username">
        <label for="inputPassword" class="sr-only">密码</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required  v-model="passwd">
        <!--        <div class="checkbox mb-3">-->
        <!--          <label>-->
        <!--            <input type="checkbox" value="remember-me" style="font-weight: 400;"> 记住我-->
        <!--          </label>-->
        <!--        </div>-->
        <div style="font-size: medium;text-align: center">
          还没有账号？ 点击注册。
          <router-link to="register">
            <span class="returnTomine">
               注册 >
            </span>
          </router-link>
        </div>
        <br/>
        <button class="btn btn-lg btn-primary btn-block" @click="loginTo">登入</button>

      </div>

    </div>
  </div>

</template>

<script>

import axios from "axios";


export default {
  name: "login",
  data() {
    return {
      username: '',
      passwd: '',
      userId: ''
    }
  },
  methods: {
    loginTo() {

      let _this = this


      // const instance = axios.create({});
      // instance.defaults.headers.put['Content-Type'] = 'application/json; charset=UTF-8';

      // axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';


      axios.post('http://localhost:8181/user/login',
        {"name": _this.username, "password": _this.passwd}
      ).then(_d => {

        console.log(_d)
        if (_d.data === -1) {
          console.log("账号或密码错误，请重新输入")

          this.$alert('账号或密码错误，请重新输入。', '错误', {
            confirmButtonText: '确定',
            // callback: action => {  //回调函数
            //   this.$message({
            //     type: 'info',
            //     message: `action: ${action}`
            //   });
            // }
          });
        } else {

          console.log("登录成功")
          _this.userId = _d.data
          window.sessionStorage.setItem("userId",_this.userId)
        }

      }).catch(err => {
        console.log(err)
        console.log("登录异常")
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

#inputEmail{
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

#inputPassword{
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}


@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.returnTomine {
  margin: 1rem 0 0 .5rem;
  font-size: medium;
  color: #736c6c;
}

</style>
