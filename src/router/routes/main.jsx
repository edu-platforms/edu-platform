import { ROUTES } from '@/libs/constants/routes'
import { Layout } from '@/layouts'
import {
  CourseDetails,
  Courses,
  Home,
  Plan,
  Purchase,
  SignIn,
  SignUp,
  Teachers,
  TutorRegister,
} from '@/router/lazy'

export const mainRoutes = (isAuth) => [
  {
    path: ROUTES.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.courses,
        element: <Courses />,
      },
      {
        path: ROUTES.singleCourse,
        element: <CourseDetails />,
      },
      {
        path: ROUTES.findTeacher,
        element: <Teachers />,
      },
      {
        path: ROUTES.plan,
        element: <Plan />,
      },
      {
        path: ROUTES.payment,
        element: <Purchase />,
      },
      {
        path: `${ROUTES.signUp}${ROUTES.teacher}`,
        element: <TutorRegister />,
      },
    ],
  },
  {
    path: ROUTES.signIn,
    element: <SignIn />,
  },
  {
    path: `${ROUTES.signUp}${ROUTES.student}`,
    element: <SignUp />,
  },
]
