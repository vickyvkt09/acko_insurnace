import React, {useState} from "react";
import './App.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import signup from './Props/signup.jpg'
import OtpInput from 'react-otp-input';
import ackologopng from './Props/ackologopng.png'
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import { Link } from "react-router-dom";

function LoginPage() {
    // const [validated, setValidated] = useState(false);
    const [otp, setOtp] = useState('');
  

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);

    
//   };
const handleOtpChange = (otp) => {
    setOtp(otp);
    
  };


  
  return (
    <div>
              
         
       <h3 className="textotp">Enter Verification Code</h3> 
       <img className="otpimage" src="https://central-frontend-prod.ackoassets.com/_next_static/images/building-block-assets/otp-screen-icon.svg" alt="" />
        <div className="formsize2" >
        {/* <Form className="m-5 p-5 col-4 " > */}
        <OtpInput 
        className="mb-4 ms-2 mt-6 lg otpsize"
        value={otp}
        onChange={handleOtpChange}
        numInputs={4} 
        separator={<span>  </span>}
        isInputNum={true} 
        shouldAutoFocus={true} 
      />
     

    
   </div>

   <div>
       <div class="fcontainer sideicon">
            <div class="iflexindex"><img src={ackologopng} alt="" srcSet=""  className="ackoresize"/><h3 class="textbox">  Take control of your
               ACKO policy</h3></div>  
               </div>
    
  </div>
   
    </div>
  )
}

export default LoginPage