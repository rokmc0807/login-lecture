"use scrict";

const { resolveInclude } = require("ejs");
const User = require("../../models/User");
//const UserStorage = require("../../models/UserStorage")

const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    
    login: (req, res) =>{
        res.render("home/login");
    },
    
    register: (req, res) =>{
        res.render("home/register");
    },    
};

const process = {
    login: (req, res) => {        

        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        
        return res.json(response);

        // const id = req.body.id,
        //     psword = req.body.psword;

        // //const UserStorage = new UserStorage();    

        // const users = UserStorage.getUsers("id","psword");

        // const response = {};

        // if (users.id.includes(id) === true){
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {                
        //         response.success = true;
        //         return res.json(response);
        //         // return res.json({
        //         //     success:true,
        //         // });
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);

        // // return res.json({
        // //     success:false,
        // //     msg:"로그인에 실패하셨습니다.",
        // // });

    },
    register: (req, res) => {
        const user = new User(req.body); 
        const response = user.register();
        console.log(response);
        
        return res.json(response);

    },    

};


module.exports = {
    output,
    process
};