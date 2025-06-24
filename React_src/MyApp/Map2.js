function Map2 () {
        const num = [1, 2, 3, 4, 6, 8, 200];
    return (
        <div style={{textAlign : "center"}}>
           {
            num.map((v,i) => {
                return <h3 style={{color : "violet"}} > index = {i} : Ans : 5*{v}={5*v}</h3>
                            }
                    )
            }          
        </div>
    )
}
export default Map2