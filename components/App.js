import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Components/Login'
import Home from './Components/Home';
import NoPage from './Components/Nopage';
import Bookings from './Components/Bookings';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
     
      <Route index element={<Home />} />
      <Route path='bookings' element={<Bookings/>}/>
      <Route path="*" element={<NoPage />} />
     
     {/* <LoginForm/> */}
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;




