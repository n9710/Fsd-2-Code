var http=require("http");
var server=http.createServer((req,res)=>{
    // res.writeHead(200,{
    //     "content-type":"text/html"
    // });
    res.write("<h1>One Piece</h1>");
    res.write("<ul><li>Luffy</li><li>Zoro</li></ul>");
    res.write("test");
    res.write("<h3>Dead Note</h3>");
    res.end("<h4>Started</h4>");
});
server.listen(5002);
