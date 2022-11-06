import {useState} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';
import { Navbar } from './Components/Navbar';


function App() {
  const [show,setShow]= useState(false);
   
  const SubmitForm=()=>{
    setShow(true);
  }
  return (
    <div className="App">
      <Navbar show={show} />
      <Routes>
           {
            (!show) ?<Route path='/' element={<SignUp SubmitForm={SubmitForm} />}/> :
             <Route path='/login' element={<Login/>} />
           }
           {/* <Route path='/' element={} /> */}
           {/* <Route path='/' /> */}
      </Routes>
    </div>
  );
}

export default App;
