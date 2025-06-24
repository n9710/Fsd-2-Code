import { createContext } from "react";
import C3 from "./C3";


const fontStyle = createContext();

function C2 () {
    return (
        <>
        <fontStyle.Provider value = "italic">
            <C3/>
        </fontStyle.Provider>
        </>
    )   
}

export default C2;
export {fontStyle};