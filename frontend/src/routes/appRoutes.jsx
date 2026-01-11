import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import login from '../screens/login'
import register from '../screens/register'
import home from "../screens/home"

const appRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'  element={home()}/>
    <Route path='/login' element={login()}/>
    <Route path='/register' element={register()}/>
   

   </Routes>
   </BrowserRouter>
  )
}

export default appRoutes
