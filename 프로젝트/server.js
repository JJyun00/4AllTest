//웹서버에 html 파일 서비스

var http = require('http');
var fs = require('fs');     //파일 읽기, 쓰기 등 할 수 있는 모듈
const { Http2ServerRequest } = require('http2');


//404 error message : 페이지 오류 발생했을때,
function send404Message(response){
    response.writeHead(404, {"Content-Type":"text/plain"});     //단순한 글자 출력
    response.write("404 ERROR...");
    response.end();
}

// 200 Okay : 정상적인 요청
function onRequest(request, response){

    if(request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type":"text/html"});      //웹페이지 출력
        fs.createReadStream("./GETest.html").pipe(response);     //같은 디렉토리에 있는 GETest.html 을 response함

    } else {
        send404Message(response);       //file이 존재하지 않을 때

    }
}

Http.createServer(onRequest).listen(8888);
console.log("Server Created...");
