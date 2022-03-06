/**
 *  nodeJs 中间件，
 * @type {e | (() => Express)}
 */

var express=require('express');
var app=express();


//解决跨域问题
app.all('*',function (req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type","application/json;charset=utf-8");
  next();
});

//获得可拖动的按钮列表的接口
app.get('/get_tabbtn_tist',function (req,res){

   var tabBtnList= ['头条', '基金', '股票', '期货', '债券', 'A股', '美股', '港股'];
   res.send(tabBtnList);
});

app.listen(5632,function () {
  console.log("5632,  23C中间件正在运行")
});
