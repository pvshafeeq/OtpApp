import './App.css';
import GetOTP from './components/GetOTP';
import ValidateOTP from './components/ValidateOTP';
import Welcome from './components/Welcome';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
     <Routes>
     <Route path="/" element={<GetOTP/>} />
       <Route path="/validate" element={<ValidateOTP/>} />
       <Route path="/welcome" element={<Welcome/>} />
     </Routes>
     </Router>
    </>
  );
}

export default App;
