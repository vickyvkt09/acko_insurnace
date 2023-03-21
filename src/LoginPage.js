import React, {useState} from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import signup from './Props/signup.jpg'
import ackologopng from './Props/ackologopng.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from "react-router-dom";

function LoginPage() {
    const [validated, setValidated] = useState(false);
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    
  };

  
  return (
    <div>
              
        <div className="formsize" >
     <Form className="m-5 p-5 col-4" noValidate validated={validated} onSubmit={handleSubmit}>
    <img className="logo mb-2"  src="https://www.acko.com/wp-content/uploads/2019/03/acko-logo-knowledge-panel.png" alt="" />
    <h5 className="mb-2">Login with your Phone Number</h5>
      <Form.Group className="mb-5 mt-2 col-sm" controlId="formBasicEmail">
      <FloatingLabel
        controlId="floatingInput"
        label="Mobile Number"
        className="mb-3"
      >
        <Form.Control required type="text"  placeholder="Mobile Number"  />
        </FloatingLabel>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Control.Feedback type="invalid">
           this feild is required
          </Form.Control.Feedback>
      </Form.Group>

      <Button className="col-12" variant="success" type="submit">
       Log in
      </Button>
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
