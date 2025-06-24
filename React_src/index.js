import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Myapp from './MyApp/Myapp';
import reportWebVitals from './reportWebVitals';
// import Parent from './Parent';
import Productlist from './Probs/Productlist';
import Events from './Events'
import E2 from './countchar'
// import Child from './Child';
import Main from "./routing/Main";
import UseState from './UseState/UseState';
import UseState2 from './UseState/UseState2';
import UseState3 from './UseState/UseState3';
import UseState4 from './UseState/UseState4';
import Form1 from './UseState/Form1'
import Form2 from './UseState/Form2'
import UserReducer1 from './UseReducer/UseReducer1';
import UserReducer2 from './UseReducer/UseReducer2';
import Parent from "./UseContext/Parent";
import Comp from "./UseContext2/Comp";
import C1 from "./UseContext3/C1";
import UseEffect from "./UseEffect/UseEffect";
import UseEffect2 from "./UseEffect/UseEffect2";
import Axios1 from "./Axios/Axios1"
import Axios2 from "./Axios/Axios2";
import Map1 from "./UseContext3/Practice1"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Myapp/> */}
    {/* <Child/> */}
    {/* <Parent/> */}
    {/* <Events/> */}
    {/* <Productlist/> */}
    {/* <E2/> */}
    <Main/>
    {/* <UseState/> */}
    {/* <UseState2/> */}
    {/* <UseState3/> */}
    {/* <UseState4/> */}
    {/* <Form1/> */}
    {/* <Form2/> */}
    {/* <UserReducer1/> */}
    {/* <UserReducer2/> */}
    {/* <Parent/> */}
    {/* <Comp/> */}
    {/* <C1/> */}
    {/* <UseEffect/> only for  useEffect use root.render( to avoid strictmode)*/}
    {/* <Axios1/> */}
    {/* <Axios2/> */}
    {/* <Map1/> */}
  </React.StrictMode>
);

// root.render(
//   // <UseEffect/>
//   <UseEffect2/>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
