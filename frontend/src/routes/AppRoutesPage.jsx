import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LoginPage from '../screens/LoginPage'
import RegisterPage from '../screens/RegisterPage'
import HomePage from '../screens/HomePage'
import Project from "../screens/Project"
import UserAuth from '../auth/UserAuth'


const AppRoutesPage = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/project" element={<UserAuth><Project /></UserAuth>} />
                
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutesPage