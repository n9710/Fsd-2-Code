import { useReducer } from "react"


function reducer ( state, action ) {
    return state + action ;
}

export default function UserReducer1() {
    const [ state, dispatch] = useReducer ( reducer, 20 );
    return ( 
        <div>
            <h1 style={{ textAlign : "center" }}>{state}</h1>
            <button onClick={() => dispatch(5) }>Add</button>
        </div>
    )
}