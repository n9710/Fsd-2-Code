var os=require("os");
var fs=require("fs")
var path=os.tmpdir() +"/AA";
var filePath=path +"/temp.txt"
var fm=(os.freemem())/((1024)**3);
// fs.mkdirSync(path);
var msg=os.platform()
if(fm>1){
    fs.writeFileSync(filePath,"Sufficient Memory "+msg);
}
else{
    fs.writeFileSync(filePath,"Insufficient Memory "+msg)
}
if(msg=="win32"){
    console.log(" Working on Windows : "+msg);
}
else{
    console.log("Get Lost")
}