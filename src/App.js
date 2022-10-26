import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PgFOF from './Components/PgFOF';
import Cart from './Components/Cart';
import Userprofile from './Components/Userprofile';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/Home" element={<Home />}/>
      {/* <Route exact path="/" element={<Home />}/> */}
      <Route exact path="/Login" element={<Login />}/>
      <Route exact path="/Signup" element={<Signup />}/>
      <Route exact path="/userprofile" element={<Userprofile />}/>
      <Route exact path="/cartlogo" element={<Cart />}/>
      <Route exact path="*" element={<PgFOF />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
