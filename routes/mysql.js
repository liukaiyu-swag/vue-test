 var mysql=require("mysql");
module.exports=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    database:"w1710",
    timezone:"HH:MM"
})

