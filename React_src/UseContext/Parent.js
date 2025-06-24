import { createContext, useContext } from "react";
import Child1 from "./Child1";


const Fname = createContext();
const Lname = createContext();

function Parent () {
    return (
        <>
        <Fname.Provider value = "Monkey D">
            <Lname.Provider value = "Luffy"><Child1/></Lname.Provider> 
        </Fname.Provider>
        </>
    )
}

export default Parent;
export {Fname, Lname}