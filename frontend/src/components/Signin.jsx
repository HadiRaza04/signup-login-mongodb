import { useState } from "react";
import { Link } from "react-router-dom";
const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const clickHandler = (e) => {
    e.preventDefault()
    
  }
  return (
    <div className='w-[500px] mx-auto  p-3 bg-slate-300'>
        <h1 className="text-3xl">Sign in</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your Email' required  className="rounded-md p-2 m-2 border-0 outline-none focus:outline-none"/>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your Password' required className="rounded-md p-2 m-2 border-0 outline-none focus:outline-none"/>
        <div className="w-full">
          <button onClick={clickHandler} className="bg-blue-500 p-2 rounded-md">SignIn</button>
          <Link to="/signup" className="text-sm m-3 text-red-600">Create Account</Link>

        </div>
    </div>
  )
}

export default Signin