import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '@/libs/constants/routes'

export const PublicRoute = ({ isAuth }) => (isAuth ? <Navigate to={ROUTES.home} /> : <Outlet />)
