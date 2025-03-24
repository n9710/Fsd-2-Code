var fs = require("fs");
// fs.mkdirSync("node2");
fs.writeFileSync("node2/from.txt", "hello");
data = fs.readFileSync("node2/from.txt", "utf-8");
console.log(data);
fs.writeFileSync("node2/to.txt", data);
fs.appendFileSync("node2/to.txt", "\nWelcome");
