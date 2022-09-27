const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: '1234',
  database: 'gettestdb' 
});

app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, 'html/form.html')))

app.post('/', (req, res) => {
  const sql = "INSERT INTO information_table SET ?"
  
  con.query(sql,req.body,function(err, result, fields){
    if (err) throw err;
    console.log(result);
    res.send('등록이 완료 되었습니다');
    });
  });

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`
));