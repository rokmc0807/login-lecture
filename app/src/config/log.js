"use scrict";

const fs = require('fs');

//루트결로를 가져와주는 모듈
const appRoot = require("app-root-path");


const accessLogStream = fs.createWriteStream(
    `${appRoot}/Log/acess.log`,
    { flags: 'a' }
);

module.exports = accessLogStream;
