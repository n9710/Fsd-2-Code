import {useState ,useEffect } from "react";
import axios from "axios";


function Axios1 () {
    const [ mydata, setdata] = useState(" ");
    useEffect(() => {
        setInterval (() =>{
            axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((res) =>{ console.log(res.data); setdata(res.data);})
            .catch((e) =>{ console.log(e)})
        },3000)
    },[])

    return(
        <>
        <img src = {mydata.message} alt = "test" height = "300px" width = "300px" />
        <h1>{mydata.message}</h1>
        </>
    )
}

export default Axios1;