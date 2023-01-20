"use scrict";

//모듈
const express = require("express");
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
const morgan = require('morgan')


const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");
const accessLogStream = require("./src/config/log");

//앱 셋팅 파일이 저장될 위치 저장
app.set("views", "./src/views");
app.set("view engine", "ejs");      //html View 엔진 코드 정의

// use 미들웨어 등록하는 메소드
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//URL을 통해 전달되는 데이터에 한글,공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogStream }));


app.use("/",home);

module.exports = app;
