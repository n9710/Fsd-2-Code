function Child1(props){
    return(
        <div>
            <h1 style={{color: "red"}}>{props.data.faculty}</h1>
            <h1 style={{color: "red"}}>{props.data.subject}</h1>
        </div>
    )
}
export default Child1;