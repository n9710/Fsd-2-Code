import i1 from "./logo.svg";
var a=10;
var b=20;
function Add(){
    return(
        <h3>Addition is: {a+b}</h3>
    )
}
function Mul(){
    return(
        <h2>Multiplication is: {a*b}</h2>
    )
}
function First(){
    return(
        <>
            <img src="logo192.png" alt="test" width="300" height="300" />
            <img src={i1} alt="test" width="300" height="300" />
            <h1 style={{color:"red", backgroundColor:"yellow"}}>Test example</h1>
            <Add/>
        </>
    )
}

export default First;
export {Mul}