import { useState } from "react";

function Form2() {
  const [formdata, setformdata] = useState({});
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handlechange(e) {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });

    // Track password and confirm password changes
    if (name === "pass") {
      setPassword(value);
    } else if (name === "cpass") {
      setConfirmPassword(value);
    }
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (formdata.pass.length <= 8) {
      alert("Length must be greater than 8");
    } else if (formdata.pass !== formdata.cpass) {
      alert("Pass and Cpass must be the same");
    } else if (formdata.city === "") {
      alert("City select City");
    } else {
      alert(`Thank You!
                Name: ${formdata.uname},
                Email: ${formdata.eid}
                ,Message: ${formdata.msg}
                ,City: ${formdata.city}
                ,Gender: ${formdata.gender}`);
    }
  }

  // Password validation styles
  const passwordStyle = password.length >= 8 ? { borderColor: 'green' } : { borderColor: 'red' };
  const confirmPasswordStyle = confirmPassword.length >= 8 ? { borderColor: 'green' } : { borderColor: 'red' };

  return (
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
                <input name="uname" onChange={handlechange} placeholder="User Name" required />
              </td>
            </tr>
            <tr>
              <td>
                Email :
              </td>
              <td>
                <input type="email" name="eid" onChange={handlechange} required />
              </td>
            </tr>
            <tr>
              <td>
                Password :
              </td>
              <td>
                <input
                  type="password"
                  name="pass"
                  onChange={handlechange}
                  value={password}
                  style={passwordStyle}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                Re-Enter Password :
              </td>
              <td>
                <input
                  type="password"
                  name="cpass"
                  onChange={handlechange}
                  value={confirmPassword}
                  style={confirmPasswordStyle}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <textarea name="msg" onChange={handlechange} required rows="10" cols="50" />
              </td>
            </tr>
            <tr>
              <td>
                Gender :
                <input type="radio" name="gender" value="male" onChange={handlechange} />Male
                <input type="radio" name="gender" value="female" onChange={handlechange} />Female
              </td>
            </tr>
            <tr>
              <td>
                Select :
                <select name="city" onChange={handlechange} required>
                  <option value="">Select</option>
                  <option value="Ahm">Ahm</option>
                  <option value="Rajkot">Rajkot</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default Form2;
