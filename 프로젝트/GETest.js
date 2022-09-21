// 기본 설정
const express = require("express");  // 웹서버 사용
const app = express();
const PORT = 8888;
const fs = require('fs'); // 파일 로드 사용

// 정적 파일 불러오기
app.use(express.static(__dirname + '/GETest'));
app.use('/css', express.static(__dirname + './GETest/css'));
//app.use('/js', express.static(__dirname + './'));



// 라우팅 정의
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/GETest.html");
});
app.get(href="/CI", (req, res) => {
  res.sendFile(__dirname + "/CI.html");
});

//https://infodbbase.tistory.com/38?category=552153
// app.get('/', function(req, res) {
//   fs.readFile('GETest.html', function(error, data) {
//     res.writeHead(200, {'content-type' : 'text/html'});
//     res.end(data);
//     });
// });
// app.get('/', function(req, res) {
//   fs.readFile('CI.html', function(error, data) {
//     res.writeHead(200, {'content-type' : 'text/html'});
//       res.end(data);
//     });
// });


// 서버 실행
app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});
