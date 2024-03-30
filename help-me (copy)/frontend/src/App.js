
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {Route,BrowserRouter as Router, Routes} from "react-router-dom"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/home' element= {<Home/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
