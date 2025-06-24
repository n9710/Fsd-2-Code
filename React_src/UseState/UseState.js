import { useState } from "react";

function UseState () {
    const [count, setcount] = useState(0);
    return (
        <>
        <button onClick={() => {setcount (count + 1);}}> Increase </button>
        <h1> You have clicked {count} time / times </h1>
        </>
    )
}

export default UseState;