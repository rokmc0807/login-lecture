"use scrict";



class UserStorage {

    static #users = {
        id: ["1", "2", "3"],
        psword: ['1',"2","3"],
        name: ["n1","n2","n3"],
    };

    static getUsers(...fields){
        const users = this.#users;
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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   //키 값만 리스트를 만듬 배열이됨
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
        return { success: true }

    }

}

module.exports = UserStorage;
