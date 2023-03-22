import React, {useState} from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import signup from './Props/signup.jpg'
import ackologopng from './Props/ackologopng.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";
import {auth} from './FirebaseConfigure'
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import { Toaster, toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
function LoginPage() {
    const [validated, setValidated] = useState(false);
    const [phn, setPhn] = useState("");
    const [showotp, setShowotp] = useState(false)
    const [loading, setLoading] = useState(false)
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    
  };

  function oncaptchverify(){
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {

        'size': 'invisible',
        'callback': (response) => {
          
          onSignInSubmit();
        },
        'expired-callback': () => {
          
        }
      }, auth);
    }
  }

  function onSignInSubmit(){
    setLoading(true)

    oncaptchverify()

    const appVerifier = window.recaptchaVerifier

    const formatphn = "+" + phn

    signInWithPhoneNumber(auth, formatphn, appVerifier)
    .then((confirmationResult) => {
      
      window.confirmationResult = confirmationResult;
      setLoading(false)
      setShowotp(true)
      toast.success('OTP Successfully Sended!')
      
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    });
  }



  
  return (
    <div>
          <Toaster toastOptions={{duration : 4000}} />
              
        <div className="formsize" >
          <div id="sign-in-button"></div>
     <Form className="m-5 p-5 col-4" noValidate validated={validated} onSubmit={handleSubmit}>
    <img className="logo mb-2"  src="https://www.acko.com/wp-content/uploads/2019/03/acko-logo-knowledge-panel.png" alt="" />
    <h5 className="mb-2">Login with your Phone Number</h5>
      <Form.Group className="mb-5 mt-2 col-sm" controlId="formBasicEmail">

        
      <FloatingLabel
        controlId="floatingInput"
        // label="Mobile Number"
        className="mb-3"
      >
        {/* <Form.Control required type="text" placeholder="Mobile Number"   /> */}
        <PhoneInput country={"in"} value={phn} onChange={setPhn} />
        </FloatingLabel>
        <Form.Text className="text-muted"  >
        </Form.Text>
        <Form.Control.Feedback type="invalid">
           this feild is required
          </Form.Control.Feedback>
      </Form.Group>

     <Link to='/OtpPage'> <Button onClick={onSignInSubmit} className="col-12" variant="success" type="submit">
       Log in
      </Button></Link>
    <h6 className="mt-2">Can't Access ?   <Link to='*' className="loginbtn">Recover my Account</Link></h6>
    </Form>
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
