var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    var q=url.parse(req.url,true).query; // requesting for url and converting to Oject 
    var add=parseInt(q.a) + parseInt(q.b);
    res.end(add +"");
}).listen(5010);


