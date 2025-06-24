function Filter1 () {
        var num = [1, 2, 3, 4, 6, 8, 200];
        var t1 = [];
    return (
        <div style={{textAlign : "center"}}>
            {
                 t1 = num.filter((v) =>{
                    if(v > 3){
                        return {v}
                    }
                    else{
                        return false;
                    }
                })
                
            }
            <h4>{t1.join(",")}</h4>
        </div>
    )
}
export default Filter1;