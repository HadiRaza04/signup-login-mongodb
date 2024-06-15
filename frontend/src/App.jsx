
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path="*" element={<Navigate to="/signup" replace={true} />} />
          <Route path="/" element={<Navigate to="/signup" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
