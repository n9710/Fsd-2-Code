var url=require('url');
var addr="https://lju.com:8080/test?year=2025&month=march#about";
var q=url.parse(addr,true);
console.log(q);
if (q.query.year%4==0){
    console.log("It's a Leap Year");
}
else{
    console.log("Not a Leap Year")
}