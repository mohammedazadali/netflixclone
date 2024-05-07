import './App.css'
import Index from './Pages/Index/Index'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


   const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log('logged in')
        navigate('/home')
      }else{
        console.log('logged out')
        navigate('/login')
      }
    })
  },[])

  return (
    <>
    <ToastContainer theme='dark' />
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/player/:id' element={<Player/>}/>
    </Routes>
    </>
  )
}

export default App
