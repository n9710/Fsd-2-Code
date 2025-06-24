import { useState, useEffect } from "react";
import axios from "axios";


function Axios2() {
    const [mydata, setdata] = useState(" ");
    const fetchFact = () => {
        axios
            .get("https://catfact.ninja/fact")
            .then((res) => { console.log(res.data.fact); setdata(res.data.fact); })
            .catch((e) => { console.log(e) })
    };

    useEffect(fetchFact, []);

    return (
        <>
            <h1>{mydata}</h1>
            <button onClick={fetchFact} >Another Fact</button>
        </>
    );
}

export default Axios2;