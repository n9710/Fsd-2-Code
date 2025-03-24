const msg= function (){
    console.log('hello')
}
setTimeout(msg,500);
setTimeout(function(){
    console.log('hi');
},300)
setTimeout(()=>{
    console.log('print');
},2000)
setInterval(msg,10)