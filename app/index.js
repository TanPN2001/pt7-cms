const express = require('express')
const mysql = require('mysql2')
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pt7_store',
    password: '20194371'
  });

if(connection) console.log('Connected to database!');

app.get('/', function (req, res) {
  res.send('Hello World')
})



app.listen(3000)