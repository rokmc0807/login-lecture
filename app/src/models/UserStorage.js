"use scrict";

const fs = require("fs").promises;


class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);

        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   //키 값만 리스트를 만듬 배열이됨
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;        
        
    }


    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);

        if (isAll === true) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }           
            return newUsers;
        }, {});
        console.log("ccc");
        console.log(JSON.parse(newUsers));

        return newUsers;       
        
    }

    static getUsers(isAll, ...fields){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            //console.log("aaa");
            //console.log(JSON.parse(data));
            return this.#getUsers(data, isAll,  fields);

        })     // 성공
        .catch(console.error);   //실패
                
    }

    static getUserInfo(id){
        

        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                //console.log(JSON.parse(data));
                return this.#getUserInfo(data, id);

            })     // 성공
            .catch(console.error);   //실패
        
    }


    static async save(userInfo){

        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }

        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        //데이터 추가

        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
          
    }

}

module.exports = UserStorage;
