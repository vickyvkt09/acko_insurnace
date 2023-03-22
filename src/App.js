// import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
// import Validation from './Validation'
import LoginPage from './LoginPage'
import Notfound from './Notfound';
import OtpPage from './OtpPage'
import NavbarMain from './Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
    {/* <Validation/> */}
         <Routes>                    
     <Route exact path='/Signup' element={<Signup/>}></Route>                           
     <Route exact path='/' element={<NavbarMain/>}></Route>                           
     <Route exact path='/LoginPage' element={<LoginPage/>}></Route>    
     <Route exact path='/OtpPage' element={<OtpPage/>}></Route>    
     <Route exact path='*' element={<Notfound/>}></Route>    
     </Routes>                          
     </Router>
    </div>
  );
}

export default App;
