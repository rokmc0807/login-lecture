"use scrict";

//모듈
const express = require("express");
const app = express();


// 라우팅
const home = require("./src/routes/home")


//앱 셋팅 파일이 저장될 위치 저장
app.set("views", "./src/views");
app.set("view engine", "ejs");      //html View 엔진 코드 정의

// use 미들웨어 등록하는 메소드
app.use("/",home);

module.exports = app;
