import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = ({ isAuth }) => (isAuth ? <Outlet /> : <Navigate to="/sign-up" />)
