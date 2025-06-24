function Map1 () {
    const str = ["a", "b", "c", "d"];
    return (
        <div style={{textAlign : "center"}}>
            {
                str.map((v,i) => {
                    return <h3 style={{color : "blueviolet"}}>{v.toUpperCase()}</h3>
                })
            }
        </div>
    )
}
export default Map1;