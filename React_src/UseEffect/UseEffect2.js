import { useEffect, useState } from "react";


function UseEffect2() {
    const [date, setdate] = useState(new Date());

    useEffect(() => {
        const interValid = setInterval(() => { setdate(new Date()) }, 1000);
        return () => clearInterval(interValid);
    }, []);

    return (
        <>
            <h1>
                Using Local Time String - {date.toLocaleTimeString()}
            </h1>
            <h2>
                Hours - {date.getHours()} : Min - {date.getMinutes()} : Sec - {date.getSeconds()}
            </h2>
        </>
    )
}

export default UseEffect2;