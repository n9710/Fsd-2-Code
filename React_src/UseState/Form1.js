import {useState} from "react";

function Form1(){
    const[formdata,setformdata] = useState({});

    function handlechange(e){
        const {name,value}= e.target;
        setformdata({...formdata,[name]:value});
    }

    function handlesubmit(e){
        e.preventDefault();
        if(formdata.pass.length <= 8){
            alert("length must be greater than 8");
        }else if(formdata.pass !== formdata.cpass){
            alert("Pass and Cpass must be same");
        }else if(formdata.city === ""){
            alert("city select City");
        }else{
            alert(`Thank You!
                Name: ${formdata.uname},
                Email: ${formdata.eid}
                ,Message: ${formdata.msg}
                ,City: ${formdata.city}
                ,Gender: ${formdata.gender}`)
        }

    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                <fieldset>
                    <legend>Information</legend>
                    <table>
                        <tr>
                            <td>
                                Name : 
                            </td>
                            <td>
                                <input name = "uname" onChange = {handlechange} placeholder = "User Name" required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email : 
                            </td>
                            <td>
                                <input type = "email" name = "eid" onChange = { handlechange } required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password : 
                            </td>
                            <td>
                                <input type="password" name = "pass" onChange = { handlechange } required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Re-Enter Password : 
                            </td>
                            <td>
                                <input type="password" name = "cpass" onChange = { handlechange} required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea name = "msg" onChange = { handlechange } required rows = "10" cols = "50"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Gender : 
                                <input type = "radio" name = "gender" value = "male" onChange={ handlechange }/>Male
                                <input type = "radio" name = "gender" value = "female" onChange={ handlechange }/>Female
                            </td>
                            </tr>
                        <tr>
                            <td>
                                Select :  
                                <select name = "city" onChange={ handlechange } required>
                                    <option value = "">Select</option>
                                    <option value = "Ahm">Ahm</option>
                                    <option value = "Rajkot">Rajkot</option>
                                </select>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                <input type = "submit" value = "Submit" />
                            </td>
                        </tr>
                    </table>
                </fieldset>
            </form>
        </div>
    )
}

export default Form1;