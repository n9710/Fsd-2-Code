import { useState } from "react";

function UseState5 () {
     const [data, setdata] = useState({});
     function handlechange (e) {
        const { name, value } = e.target;
        setdata ({...data, [name] : value});
     }
     return (
        <div>
            <input type = "text" name = "firstname" onChange = { handlechange} />
            <input type = "text" name = "llastname"  onChange = {handlechange} />
        </div>
     )
}