import { useRoutes } from 'react-router-dom'
import { mainRoutes } from './main'
import { tutorRoutes } from './tutor'
import { studentRoutes } from './student'

export const Routes = () => useRoutes([...mainRoutes(), ...studentRoutes(), ...tutorRoutes()])
