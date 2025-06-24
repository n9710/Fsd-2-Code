import { createContext } from "react";
import C2 from "./C2"

const textColor = createContext();
const bgColor = createContext();
const text = createContext();

function C1() {
    return (
        <>
            <textColor.Provider value="purple">
                <bgColor.Provider value="yellow">
                    <text.Provider value="One Piece Is Real">
                        <C2 />
                    </text.Provider>
                </bgColor.Provider>
            </textColor.Provider>
        </>
    )
}
export default C1;
export { textColor, bgColor, text};

