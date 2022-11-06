import './App.css';
import {Routes, Route} from 'react-router-dom';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';
function App() {
  return (
    <div className="App">
      <Routes>
           <Route path='/' element={<SignUp/>}/>
           <Route path='/login' element={<Login/>} />
           {/* <Route path='/' element={} /> */}
           {/* <Route path='/' /> */}
      </Routes>
    </div>
  );
}

export default App;