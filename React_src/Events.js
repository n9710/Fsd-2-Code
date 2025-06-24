function Events(){
    function handleclick(){
        alert("Welcome!! ");
    }
    function handledoubleclick(){
        alert("Welcome!! Welcome!!");
    }
    function handlechange(e){
        console.log(e.target.value);
    }
    function handlesubmit(e){
        e.preventDefault();
        alert("Thank You");
    }
    return(
        <div>
            <button onClick={handleclick()}>Single CLick</button>
            <button onDoubleClick={handleclick}>Double CLick</button>
            <form onSubmit={handlesubmit}>
                <input onChange={handlechange} type="text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Events;