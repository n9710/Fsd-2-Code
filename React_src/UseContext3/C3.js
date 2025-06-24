import { useContext } from "react";
import { textColor, bgColor, text} from "./C1";
import { fontStyle } from "./C2";

function C3 () {
    const tC = useContext(textColor);
    const bC = useContext(bgColor);
    const t = useContext(text);
    const fS = useContext(fontStyle);
    return(
        <>
        <h1 style={{ color : tC, backgroundColor : bC, fontStyle : fS}}>{t}</h1>
        </>
    )
}

export default C3;