var fs = require("fs");
// // fs.mkdirSync("node1");
// fs.writeFileSync("node1/OnePiece.txt", "Straw Hat");
// fs.appendFileSync("node1/OnePiece.txt", "\nLuffy");
// data = fs.readFileSync("node1/OnePiece.txt");
// console.log(data); //1st gives the buffer data
// // console.log(data.toString()); convert buffer data to string
// data = fs.readFileSync("node1/OnePiece.txt", "utf-8"); //directly convert buffer data to string by using uft-8
// console.log(data);
// fs.renameSync("node1/OnePiece.txt", "node1/anime.txt");
// fs.writeFileSync("node1/anime.txt", "One Piece");
// fs.writeFileSync("node1/happy.txt", "Hello"); // create file if not exist and overwrite in it
// fs.unlinkSync("node1/happy.txt"); // delete the file
fs.writeFileSync("node1/sort.txt", "50 -1 99 100 20 41 0 62 35");
data = fs.readFileSync("node1/sort.txt", "utf-8");
console.log(data);
a = data.split(" ");
console.log(a);
d1 = a.sort((a, b) => a - b);
console.log(d1);
let arr = [];
for (let i = 0; i < d1.length; i++) {
  arr[i] = parseInt(d1[i]);
}
console.log(arr);
