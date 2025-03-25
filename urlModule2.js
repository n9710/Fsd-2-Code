var url=require("url");
var fs=require("fs");
var addr="https://lju.com:8080/test?year=2025&month=march#about";
var u=url.parse(addr,true);
console.log(u);
var u2=JSON.stringify(u.query);
// console.log(u2);
fs.writeFile("u2.txt",u2,(e)=>{
    if(e){
        console.log(e);
    }
    else{
        console.log("Written");
        fs.readFile("u2.txt","utf-8",(e,d)=>{
            if(e){
                console.log(e);
            }
            else{
                var d1=JSON.parse(d);
                console.log(d1.year)
            }
        })
    }
})