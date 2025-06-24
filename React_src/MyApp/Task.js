function Task() {
  const arr=[1,2,3,4,5,3,6,4,3,1];
  var t=arr.map((val,i) => {
          if (val > 3){ 
            return <h2 key={i}>{val*3}</h2>
          }else{
            return false;
          }
        })
        console.log(t)

   var t1 = arr.filter((val,i) => {
      if (val > 3){
        return <h2 key={i}>{val*3}</h2>
      }
    })
    console.log(t1)

    return(
      <>
      <div>{t}</div> {/* This will render the h2 elements and skip nulls */}
      {/* Join them for display, as t1 is an array of numbers */}
      <p>{t1.join(', ')}</p>
      </>
    )
  
}
export default Task