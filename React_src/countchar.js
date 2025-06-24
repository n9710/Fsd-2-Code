function count(){
    const val= document.getElementById("ta").value;
    document.getElementById("count").innerHTML = val.length + "character";
}

function countchar(){
    return (
        <>
        <textarea onChange={count} id="ta" rows = "10" cols = "50"/>
        <p id = "count"> 0 character</p>
        <input type="button" value = "submit" onClick={() =>{
            var a = document.getElementById("ta").value;
            alert(a);
        }}/>
        </>
    )
}
export default countchar;