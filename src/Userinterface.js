import React, {useState} from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import signup from './Props/signup.jpg'
import ackologopng from './Props/ackologopng.png'
import { Link } from "react-router-dom";
// import axios from "axios";

// axios.post('http://localhost:3000/posts', {
//      Name: '',
//   Mobile: '',
//   Email: ''
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// }); 

function Userinterface() {
    const [validated, setValidated] = useState(false);
    const [Name, setName] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Email, setEmail] = useState("")

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    
  };

  function Handleclick(){
//     axios.post('http://localhost:3000/posts')
//  .then(function (response) {
//    console.log(response);
//  })
//  .catch(function (error) {
//    console.log(error);
//  }); 

//  console.log(Name,Mobile,Email)
 
    console.log(Name,Mobile,Email)

    let data = {Name, Mobile, Email}
    fetch('http://localhost:3000/posts',
    {
      method : "POST",
      headers : {
        "Accept" : "Aplication/Json",
        "Content-Type" : "Application/Json"
      },
      body: JSON.stringify(data)
    }).then((result)=>{
      // console.log(result)
      result.json().then((resp)=>{
        console.log(resp)
      })
    })
}

  
  return (
    <>        
        <div className="formsize" >
     <Form className="m-5 p-5 col-4" noValidate validated={validated} onSubmit={handleSubmit}>
    <img className="logo1"  src="https://www.acko.com/wp-content/uploads/2019/03/acko-logo-knowledge-panel.png" alt="" />
    <h3 className="mb-2">Get started today</h3>
      <Form.Group className="mb-5 col-sm" controlId="formBasicEmail">
        <Form.Control required type="text" placeholder="Name" value={Name} onChange={(e)=>{setName(e.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Control.Feedback type="invalid">
            Empty Name
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-5 mt-2 col-sm" controlId="formBasicEmail">
        <Form.Control required type="text" placeholder="Mobile Number" value={Mobile} onChange={(e)=>{setMobile(e.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Control.Feedback type="invalid">
           Empty Number
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Control type="email" placeholder="Email (optional)" value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      <Button className="col-12" variant="success" onClick={Handleclick} type="submit">
        Submit
      </Button>
    <h5 className="mt-2">Already have a Account ? <Link to='/LoginPage' className="loginbtn">Login</Link>   </h5>
    </Form>
   </div>
     <div>
       <div class="fcontainer sideicon">
            <div class="iflexindex"><img src={ackologopng} alt="" srcSet=""  className="ackoresize"/><h3 class="textbox">  Take control of your
               ACKO policy</h3></div>  
               </div>
    {/* <img src={signup} alt="" srcSet=""  className="sideicon"/> */}
  </div>
     </>
   
    
  )
}

export default Userinterface
