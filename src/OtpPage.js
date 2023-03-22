import React, {useState} from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import {CgSpinner} from 'react-icons/cg'
// import Form from 'react-bootstrap/Form';
// import signup from './Props/signup.jpg'
import OtpInput from 'react-otp-input';
import ackologopng from './Props/ackologopng.png'
// import { async } from "@firebase/util";

// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import { Link } from "react-router-dom";

function LoginPage() {
    // const [validated, setValidated] = useState(false);
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false)
    const [user,setUser] = useState(null)
    const [showotp, setShowotp] = useState(false)
  

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

  function Otpverify(){
    setLoading(true)
    window.confirmationResult.confirm(otp).then(async(res)=>{
      console.log(res)
      setUser(res.user)
      setLoading(false)
    }).catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }

  
  return (
    <div>
              
        
       <img className="otpimage" src="https://central-frontend-prod.ackoassets.com/_next_static/images/building-block-assets/otp-screen-icon.svg" alt="" />
       <h4 className="textotp">Enter Verification Code</h4> 
        <div className="formsize2" >
        {/* <Form className="m-5 p-5 col-4 " > */}
        <OtpInput 
        className="otpsize ms-4 input-lg "
        value={otp}
        onChange={handleOtpChange}
        numInputs={6} 
        separator={<span>  </span>}
        isInputNum={true} 
        shouldAutoFocus={true} 
        />
     

    </div>
       <Button onClick={Otpverify} className="col-2 formsize3" variant="success"> 
       {
        loading && <CgSpinner size={20} className = "mt-1 animate-spin" />
       }
       
       <span>  verify otp</span> </Button>

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