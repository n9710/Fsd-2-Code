import { useState } from "react";

function UseState3 () {
    const [num, setnum] = useState(10);
    const [clr, setcolor] = useState('red');

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
    
    function changeColor () {
        if ( clr === 'red' ) {
            setcolor ('blue');
        }
        else {
            setcolor ('red');
        }
    }
    return (
        <>
        <button onClick = { increment } >Increment</button>
        <button onClick = { decrement } >Decrement</button>
        <button onDoubleClick={ changeColor } > Change Color </button>
        <h1 style={{color : clr }}>{ num }</h1>
        </>
    )
}

export default UseState3;