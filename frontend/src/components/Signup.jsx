import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigator = useNavigate()

  const clickHandler = async (e) => {
    e.preventDefault()
    try {
      if(!email) {
        if(!password) {
          setEmailError("Email required.");
          setPasswordError("Password required.");
          return;
        }
        setEmailError("Email required.");
        setPasswordError("");
        return;
      }
      if(!password) {
        setEmailError("");
        setPasswordError("Password required.");
        return;
      }
      if(email && password) {
        setEmailError("");
        setPasswordError("");
      }

      

      const res = await axios.post("/signup", {name, email, password})
      console.log(res);
      setName("")
      setEmail("")
      setPassword("")
      alert("User created.")
      navigator("/signin")
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='w-[500px] mx-auto  p-3 bg-slate-300'>
        <h1 className="text-3xl">Sign up</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter your Name' required  className="rounded-md p-2 m-2 border-0 outline-none focus:outline-none"/>
        <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your Email' required  className="rounded-md p-2 m-2 border-0 outline-none focus:outline-none"/>
        <p className="text-red-600 p-0 m-0">{emailError}</p>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your Password' required className="rounded-md p-2 m-2 border-0 outline-none focus:outline-none"/>
        <p className="text-red-600 p-0 m-0">{passwordError}</p>
        <div className="w-full">
          <button onClick={clickHandler} className="bg-blue-500 p-2 rounded-md">SignUp</button>
          <Link to="/signin" className="text-sm m-3 text-red-600">signin</Link>
        </div>
    </div>
  )
}

export default Signup