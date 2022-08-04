import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Profile  from './Profile'
import  SignIn  from "./SignIn"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router