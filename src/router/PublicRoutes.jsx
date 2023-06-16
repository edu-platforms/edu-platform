import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = ({ isAuth }) => (isAuth ? <Navigate to="/" /> : <Outlet />)
