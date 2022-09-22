// 기본 설정
const express = require("express");  // 웹서버 사용
const server = express();

// 정적 파일 불러오기
server.use(express.static(__dirname + "/css"));

// 라우팅 정의
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/GETest.html");
});

server.get("/CI.html", (req, res) => {
  res.sendFile(__dirname + "/CI.html");
});

server.get("/BI.html", (req, res) => {
  res.sendFile(__dirname + "/BI.html");
});

server.get("/information.html", (req, res) => {
  res.sendFile(__dirname + "/information.html");
});

// 서버 실행
server.listen(8888, () => {
  console.log(`Listen : 8888`);
});
