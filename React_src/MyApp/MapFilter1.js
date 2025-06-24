function MapFilter1 () {

    var arr = [1, 2, 5, 7, 9, 10];
    return(
        <div>
            {
                arr.filter((v) => v <= 5).map((v) =>{
                    return <h3>{v}</h3>
                })
            }
        </div>
    )
}
export default MapFilter1;