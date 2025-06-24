import { createContext } from "react";
import Comp1 from "./Comp1"


const Num1 = createContext();
const Num2 = createContext();
function Comp () {
    return (
        <>
        <Num1.Provider value = "20">
            <Num2.Provider value = "30">
                <Comp1/>
            </Num2.Provider>
        </Num1.Provider>
        </>
    )
}

export default Comp;
export { Num1, Num2 };