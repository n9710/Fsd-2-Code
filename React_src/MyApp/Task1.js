import logo from "../logo.svg";
import img1 from "../img1.png"
function Task1 () {
    var price = 300;
    var s = {color : "red"};
    return (
        <div style = {{ textAlign : "center", backgroundImage: `url(${img1})`, backgroundRepeat: "no-repeat"}}>
            <img src = {logo} alt = "TEST" width = "300" height = "300"/>
            {/* <img src = {img1} alt = "TEST" width = "300" height = "300"/> */}
            <h3 style = {{color : "red", fontSize : "50px"}}>Infinity</h3>
            <h4 style = {{s}} className = "test">{price}</h4>
        </div>
        
    )
}
export default Task1