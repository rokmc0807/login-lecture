"use scrict";

const { resolveInclude } = require("ejs");
const User = require("../../models/User");
const loger = require("../../config/loger");
//const UserStorage = require("../../models/UserStorage")

const output = {
    home: (req, res) =>{
        loger.info('GET / 200 "홈 화면으로 이동"');
        res.render("home/index");
    },
    
    login: (req, res) =>{
        loger.info('GET /login 200 "로그인 화면으로 이동"');
        res.render("home/login");
    },
    
    register: (req, res) =>{
        loger.info('GET /register 200 "회원가입 화면으로 이동"');
        res.render("home/register");
    },    
};

const process = {
     login: async (req, res) => {        

        const user = new User(req.body);
        const response = await user.login();

        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        }
        log(response, url);
        return res.status(url.status).json(response);

    },
    
    register: async (req, res) => {
        const user = new User(req.body); 
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 400 : 200,
        }
        log(response, url);
                
        return res.status(url.status).json(response);

    },    

};

const log = (response, url) => {

    if (response.err)
    loger.error(
        `${url.method} /${url.path} response: ${response.success} ${response.err}`
    );

else
    loger.info(
        `${url.method} /${url.path} response: ${response.success} ${
            response.msg || ""
        }`
    );        

}


module.exports = {
    output,
    process
};