function map1() {
let arr = [2, 4, 6, 3, 7, 5]
const val = arr.sort();
return (
<div>
   <h1>Output: </h1>
    { arr.map((value)=>{
            const val = value + 3 + "2"
            return ( <h2>{val}</h2> )
     })}
</div>
)}

export default map1
