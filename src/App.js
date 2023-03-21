// import logo from './logo.svg';
import './App.css';
import Userinterface from './Userinterface';
// import Validation from './Validation'
import LoginPage from './LoginPage'
import Notfound from './Notfound';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
    {/* <Validation/> */}
         <Routes>                    
     <Route exact path='/' element={<Userinterface/>}></Route>                           
     <Route exact path='/LoginPage' element={<LoginPage/>}></Route>    
     <Route exact path='*' element={<Notfound/>}></Route>    
     </Routes>                          
     </Router>
    </div>
  );
}

export default App;
