import { useEffect, useState} from "react";


function UseEffect () {
    const [countA, setcountA] = useState(0);
    const [countB, setcountB] = useState(0);

    function changeA () {
        setcountA(countA + 1);
    }

    function changeB () {
        setcountB(countB + 1);
    }

    useEffect ( () => { alert("First Time render")},[countA, countB])
     return(
        <>
        <button onClick={changeA}>button A {countA}</button><br/>
        <button onClick={changeB}>button B {countB}</button><br/>
        </>
     )
}

export default UseEffect;