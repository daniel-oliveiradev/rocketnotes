import { Routes, Route, Navigate } from 'react-router-dom'

import { SingIn } from '../pages/SingIn'
import { SingUp } from '../pages/SingUp'


export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<SingIn/>} />
      <Route path="/register" element={<SingUp/>} />

      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  )
}