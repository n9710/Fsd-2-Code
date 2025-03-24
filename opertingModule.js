var os=require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
var fm=os.freemem();
console.log(fm);
var k=(fm)/((1024)**3);
console.log(k)