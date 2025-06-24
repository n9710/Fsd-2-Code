function Productcard(props){
    return (
        <div>
            {
                // props.data.map((p, i) =>{
                // props.data.filter((p) => p.price <= 5000).map((p, i) =>{
                props.data.filter((p) => p.id == "002").map((p, i) =>{
                    return(
                        <div style={{ textAlign: 'center' }} key = {p.id}>
                            <img src={p.image} height="200" width="200" alt="Product1"/>
                            <h1 className="test">{p.title}</h1>
                            <h2>{p.price}</h2>
                            <h3 style={{color: "green"}}>{p.rating}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Productcard;