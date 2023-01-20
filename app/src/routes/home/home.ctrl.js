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
        if (response.err)
            loger.error(
                `POST /login response:"scccess: ${response.success},${response.err}"`
            );

        else
            loger.info(
                `POST /login response:"scccess: ${response.success}, msg: ${response.msg}"`
            );        

        return res.json(response);

    },
    register: async (req, res) => {
        const user = new User(req.body); 
        const response = await user.register();
        if (response.err)
            loger.error(
                `POST /register response:"scccess: ${response.success}, ${response.err}"`
            );

        else
            loger.info(
                `POST /register response:"scccess: ${response.success}, msg: ${response.msg}"`
            );   

                
        return res.json(response);

    },    

};


module.exports = {
    output,
    process
};