// 기본 설정
const path = require('path')
const express = require("express");  // 웹서버 사용
const bodyParser = require('body-parser')
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const mysql = require('mysql');
const { CONNREFUSED } = require('dns');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'jjy',
  password: 'wldbsdhfkzmf123!',
  database: 'getest'
});


// 정적 파일 불러오기(css)
app.use(express.static(__dirname + '/'));


// 라우팅 정의(html)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/GETest.html");
});


app.get('/information', (req, res) =>
  res.sendFile(path.join(__dirname, '/information.html')));

app.post('/information', (req, res) => {
  const sql = "INSERT INTO info SET ?"

  con.query(sql, req.body, function(err, result, fields){
    if(err) throw err;
    console.log(result);
  });
});


// 서버 실행
app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});
