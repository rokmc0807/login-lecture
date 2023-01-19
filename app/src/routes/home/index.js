"use scrict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//루트
router.get("/", ctrl.output.home);

//이렇게 주소로 이동하는 것을 라우팅이라고함.
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;