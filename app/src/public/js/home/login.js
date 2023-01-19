"use scrict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

    loginBtn.addEventListener("click", login_Click);

    function login_Click(){

        const req = {
            id:id.value,
            psword:psword.value,
        };

        //console.log(req);
        //console.log(JSON.stringify(req));

        fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(req)
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success === true){
                    location.href = "/";
                } else {
                    alert(res.msg);
                }
            })
            .catch((err) => {
                console.error("로그인 중 에러 발생");
            });

    }

//console.log(id);
//console.log(psword);

