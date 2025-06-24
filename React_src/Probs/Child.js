function Child(props){
    return(
        <ul>
            <li>
                {props.name}
            </li>
            <li>
                {props.age}
            </li>
        </ul>
    )
}
export default Child;