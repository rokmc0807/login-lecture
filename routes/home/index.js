"use scrict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

//이렇게 주소로 이동하는 것을 라우팅이라고함.
router.get("/login", ctrl.login);

module.exports = router;