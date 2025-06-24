import { useContext } from "react";
import { Fname, Lname } from "./Parent";


function Child2 () {
    const fn = useContext(Fname);
    const ln = useContext(Lname);
      return(
        <>
        <u><h1 style={{ color : "red", fontSize : "80px", fontStyle : "italic"}}>Pirate King {fn} {ln}</h1></u>
        </>
      )
}
export default Child2;