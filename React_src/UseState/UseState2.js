import { useState } from "react";

function UseState2 () {
    const [num, setnum] = useState(10);

    function increment () {
        if ( num < 20 ) {
            setnum (num + 1);
        }
        else {
            return false;
        }
    }

    function decrement () {
        if ( num > 0 ) {
            setnum (num - 1);
        }
        else {
            return false;
        }
    }
    return (
        <>
        <button onClick = { increment } >Increment</button>
        <button onClick = { decrement } >Decrement</button>
        <h1>{ num }</h1>
        </>
    )
}

export default UseState2;