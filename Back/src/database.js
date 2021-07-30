//andres Mosquera Alvarado

//Archivo que permite realizar la conexión de la base de datos de forma local

const mysql = require('mysql');

const mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fut21'
});

mySqlConnection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    } else{
        console.log(('Db is connected'));
    }
});

module.exports = mySqlConnection;
