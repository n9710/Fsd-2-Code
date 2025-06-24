import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import NoPage from "./NoPage";
import img1 from "../img1.png";

function Main() {
    return (
        <>
        <img src={img1} alt="photo"/>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="*" element={<NoPage />}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default Main;