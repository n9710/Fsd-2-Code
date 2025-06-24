import { useContext } from "react"
import { Num1, Num2} from "./Comp"

function Comp2() {
    const num1 = useContext(Num1);
    const num2 = useContext(Num2);
    const mul = (num1)*(num2);
    
    return(
        <>
        <h1>{num1} * {num2} = {mul} </h1>
        </>
    )
}

export default Comp2;