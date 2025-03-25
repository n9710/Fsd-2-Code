var fs=require("fs");
var data={d:{a:10,b:20,c:[30,10]}};
var dataString=JSON.stringify(data);
fs.writeFileSync("jsonExample2.txt",dataString);
var dataRead=fs.readFileSync("jsonExample2.txt","utf-8");
fs.appendFileSync("jsonExample2.txt","\nAdditon :"+(data.d.a + data.d.b));
fs.appendFileSync("jsonExample2.txt","\nSubtration : "+(-1*(data.d.c[1] - data.d.b)));
fs.appendFileSync('JsonExample2.txt',"\nMultiplication : 1st = "+(data.d.c[0]*data.d.b)+", 2nd = "+(data.d.c[1]*data.d.b))