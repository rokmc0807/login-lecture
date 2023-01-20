"use scrict";

const app = require("../app");
const loger = require("../src/config/loger");
const port = process.env.PORT || 3001;

app.listen(port, () => {
    loger.info("Server String Port : " +port);
})