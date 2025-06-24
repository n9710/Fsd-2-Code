import img1 from "../logo.svg";
import img2 from "../img1.png"
import Productcard from "./Productcard";

function Productlist() {
    var p = [{
        id : "001",
        title : "product1",
        price : "5000",
        image : img1,
        rating : "9.9"
    },
    {
        id : "002",
        title : "product2",
        price : "5050",
        image : img2,
        rating : "10"
    }]
    return(
        <div>
            <Productcard data = {p}/>
        </div>
    )
}
export default Productlist;