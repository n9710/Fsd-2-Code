var fs=require('fs');
fs.writeFile("test1.txt","Hello",(e)=>{
    if(e){
        console.log(e);
    }
    else{
        fs.appendFile("test1.txt"," Hi",(e)=>{
            if(e){
                console.log(e);
            }
            else{
                console.log("Appended");
            }
        })
    }
})

setTimeout(function(){
    fs.readFile("test1.txt","utf-8",(e,d)=>{
        if(e){
            console.log(e);
        }
        else{
            console.log(d);
        }
    })
    
},5000)