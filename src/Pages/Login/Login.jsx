import React, { useState } from 'react'
import './Login.css'
import logo from '../../Assest/logo.png'
import { login,signup } from '../../firebase'
import load from '../../Assest/netflix_spinner.gif'

function Login() {
  const[signstate,setSignstate]=useState("Sign In");
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[loading,setLoading]=useState(false)


  const userauth = async(event)=>{
    event.preventDefault()
    setLoading(true)
    if(signstate==="Sign In"){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
    setLoading(false)
  }
  return (
    loading?<div className='login_spinner'>
      <img src={load} alt="" />
    </div>:
    <section className="login_page">
      <div className="login_nav">
        <img src={logo} className='login_logo' />
      </div>

      <div className="login_form">
        <h1>{signstate}</h1>
        <form >
          {signstate==="Sign Up"?<input type="text" value={name} onChange={(event)=>{
           setName( event.target.value)
          }}placeholder='Enter Your Name' />:<></>}
          <input type="email" value={email} onChange={(event)=>{
           setEmail( event.target.value)
          }}placeholder='Enter Your E-mail' />
          <input type="password" value={password} onChange={(event)=>{
            setPassword(event.target.value)
          }}placeholder='Password' />
          <button onClick={userauth} type='submit'>{signstate}</button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" name='check' />
              <label htmlFor="check">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form_swi">
          {signstate==="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignstate('Sign Up')}}>Sign Up</span></p>: <p>Alredy have an Account? <span onClick={()=>{setSignstate('Sign In')}}>Sign In</span></p>}
        </div>
      </div>
    </section>
  )
}

export default Login