import { useReducer } from "react";

const initialstate = 30;
function reducer ( state, action) {
    if ( action.type === "increment" ) { 
        if ( state === 50){
            state = 0;
        }

        return state + 1;
    }
    else if ( action.type === "decrement" ) {
         if( state === 0) {
            state = 51
        }
        return state - 1;
    }
    else {
        return state;
    }
}
export default function UseReducer2 () {
    const [ state, dispatch] = useReducer( reducer, initialstate );
    return (
        <>
        <h1>{state}</h1>
        <button onClick={() => dispatch({type : "increment"})}>Increase</button>
        <button onClick={() => dispatch({type : "decrement"})}>Decrease</button>
        </>
    )
}