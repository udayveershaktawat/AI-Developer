import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import login from '../screens/login'

const appRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'  element={<div>Home</div>}/>
    <Route path='/login' element={login}/>
    <Route path='/register' element={<div>Register</div>}/>
   

   </Routes>
   </BrowserRouter>
  )
}

export default appRoutes
