const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "clinica_medica",
});

conn.connect();

module.exports = conn;