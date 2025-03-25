var fs=require("fs");
const shape = 
    [
        {
            name: "circle",
            diameter: 8
        },
        {
            name: "square",
            side: 10
        }
    ] 
// console.log(shape)
var data=JSON.stringify(shape);
fs.writeFileSync("jsonExample.txt",data);
var dataObject=JSON.parse(data);
var psquare=4*(dataObject[1].side);
var pcircle=(3.14)*(dataObject[0].diameter);
fs.appendFileSync("jsonExample.txt","\nCircle Perimeter : "+pcircle+"\nSquare Perimeter : "+psquare)