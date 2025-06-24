import Child from "./Child";
import Child1 from "./Child1";
function Parent() {
    var a = "ABC";
    var obj = {
        subject : "FSD-2",
        faculty : "NAS"
    }
    return(
        <div>
            <Child name = {a} age = "30"/>
            <Child name = "xyz" age = "25"/>
            <Child1 data = {obj}/>
        </div>
    )
}

export default Parent;