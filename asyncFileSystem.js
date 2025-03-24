var fs=require('fs');
fs.writeFileSync("fs.txt","Hello")
console.log("completed")
fs.writeFile("fs1.txt","Hi! Welcome",(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("Written");
    }
})
console.log("Completed2")
fs.appendFile("fs1.txt","\nHi! Welcome",(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("append");
    }
})
fs.readFile("fs1.txt","utf-8",(err,dt)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Writing dt")
        console.log(dt);
    }
})
fs.rename("fs1.txt","fs100.txt",()=>{
    console.log("Done..")
})
fs.unlink("fs100.txt",(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("deleted")
    }
})