import { useState } from "react";
import img1 from "../img1.png"
import img2 from "../img2.png"

function UseState4 () {
    const [cimg, setimg] = useState(img1);
    const [ctext, settext] = useState("Kakarot");
    const [chide, sethide] = useState("Nothing");
    const [btntxt, setbtntext] = useState("Hide");
    var save = ctext;

    function changeImg () {
        if ( cimg === img1) {
            setimg(img2)
        }
        else {
            setimg(img1)
        }
    }

    function changeText () {
        if ( ctext === "Kakarot" ) {
            settext ("Luffy");
        }
        else {
            settext ("Kakarot")
        }
    }
    
    function hideText () {
        if ( btntxt === 'Hide' ) {
            setbtntext ('Show');
            save = ctext;
            settext (' ');
        }
        else {
            setbtntext ('Hide');
            if ( save === "Kakarot") {
                settext ("Kakarot");
            }
            else {
                settext ("Luffy")
            }
            
        }
    }

    function change () {
        if ( ctext === "Kakarot" && cimg === img1) {
            setimg(img2);
            settext("Luffy");
        }
        else {
            setimg(img1);
            settext("Kakarot");
        }
    }
    return (
        <>
        <img src={cimg} height="300" alt="Everthing"></img>
        <h1>{ctext}</h1>
        <button onClick = { changeImg } >Change Image</button>
        <button onClick = { changeText } >Change Text</button>
        <button onClick={ hideText } > {btntxt} </button>
        <button onClick={ change } > Change </button>
        </>
    )
}

export default UseState4;