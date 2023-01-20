"use scrict";

const UserStorage = require("./UserStorage")

class User {
    //생성자
    constructor(body){
        this.body = body
    }

    async login(){
        
        const client = this.body;
        try{
            const {id, psword} = await UserStorage.getUserInfo(client.id);

       
            if (id){
                if (id === client.id && psword === client.psword){
                    return { success: true }   ;
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." }
            }
            return { success: false, msg: "준재하지 않는 아이디입니다." }

        } catch (err){
            return { success: false, err };
        }
        
    }

    async register(){
        const client = this.body;
        
        try{

            const response = await UserStorage.save(client);            
            return response;


        }catch(err){
            const errmsg = { success: false, err };
            return errmsg;
        }
        
    }    
}


module.exports = User;