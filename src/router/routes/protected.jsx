import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '@/libs/constants/routes'

export const ProtectedRoute = ({ isAuth }) =>
  isAuth ? <Outlet /> : <Navigate to={ROUTES.signUp} />
