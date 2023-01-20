"use scrict";

const db = require("../config/db");


class UserStorage {

    // static #getUserInfo(data, id) {
    //     const users = JSON.parse(data);

    //     const idx = users.id.indexOf(id);
    //     const usersKeys = Object.keys(users);   //키 값만 리스트를 만듬 배열이됨
    //     const userInfo = usersKeys.reduce((newUser, info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     }, {});
        
    //     return userInfo;        
        
    // }


    // static #getUsers(data, isAll, fields) {
    //     const users = JSON.parse(data);

    //     if (isAll === true) return users;

    //     const newUsers = fields.reduce((newUsers, field) => {
            
    //         if (users.hasOwnProperty(field)) {
    //             newUsers[field] = users[field];
    //         }           
    //         return newUsers;
    //     }, {});
    //     console.log("ccc");
    //     console.log(JSON.parse(newUsers));

    //     return newUsers;       
        
    // }

    // static getUsers(isAll, ...fields){
    //     return fs.readFile("./src/databases/users.json")
    //     .then((data) => {
    //         //console.log("aaa");
    //         //console.log(JSON.parse(data));
    //         return this.#getUsers(data, isAll,  fields);

    //     })     // 성공
    //     .catch(console.error);   //실패
                
    // }

    static getUserInfo(id){
        return new Promise ((resolve, reject) => {

            const query = "select * from users1 where id = ?";

            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
    
        });
        
    }


    static async save(userInfo){

        return new Promise ((resolve, reject) => {

            const query = "insert into users1(id,name,psword) values(?, ?, ?) ";

            db.query(
                query, 
                [userInfo.id, userInfo.name, userInfo. psword], 
                (err) => {
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
    
        });
 
    }

}

module.exports = UserStorage;
