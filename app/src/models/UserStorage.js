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


    static getUsers(...fields){
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }           
            return newUsers;
        }, {});
        //console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id){
        

        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                //console.log(JSON.parse(data));
                return this.#getUserInfo(data, id);

            })     // 성공
            .catch(console.error);   //실패

        
        // , (err, data) => {
        //     if(err) throw err;
        //     console.log(JSON.parse(data));
        //     const users = JSON.parse(data);

        //     const idx = users.id.indexOf(id);
        //     const usersKeys = Object.keys(users);   //키 값만 리스트를 만듬 배열이됨
        //     const userInfo = usersKeys.reduce((newUser, info) => {
        //         newUser[info] = users[info][idx];
        //         return newUser;
        //     }, {});
    
        //     return userInfo;

        // })

    }


    static save(userInfo){
        //const users = this.#users;
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.psword.push(userInfo.psword);
        // console.log(users);
        // return { success: true }

    }

}

module.exports = UserStorage;
