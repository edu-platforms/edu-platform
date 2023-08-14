import { lazy } from 'react'
import { handleCatchChunkError } from '../utils'

export const Home = lazy(() =>
  import('@/pages')
    .then(({ Home }) => ({ default: Home }))
    .catch(handleCatchChunkError)
)

// Payment
export const Plan = lazy(() =>
  import('@/pages')
    .then(({ Plan }) => ({ default: Plan }))
    .catch(handleCatchChunkError)
)

export const Purchase = lazy(() =>
  import('@/pages')
    .then(({ Purchase }) => ({ default: Purchase }))
    .catch(handleCatchChunkError)
)

// Courses
export const Courses = lazy(() =>
  import('@/pages')
    .then(({ Courses }) => ({ default: Courses }))
    .catch(handleCatchChunkError)
)

export const CourseDetails = lazy(() =>
  import('@/pages')
    .then(({ CourseDetails }) => ({ default: CourseDetails }))
    .catch(handleCatchChunkError)
)

// Teachers
export const Teachers = lazy(() =>
  import('@/pages')
    .then(({ Teachers }) => ({ default: Teachers }))
    .catch(handleCatchChunkError)
)

export const Chat = lazy(() =>
  import('@/pages')
    .then(({ Chat }) => ({ default: Chat }))
    .catch(handleCatchChunkError)
)

export const SignIn = lazy(() =>
  import('@/pages')
    .then(({ SignIn }) => ({ default: SignIn }))
    .catch(handleCatchChunkError)
)

export const SignUp = lazy(() =>
  import('@/pages')
    .then(({ SignUp }) => ({ default: SignUp }))
    .catch(handleCatchChunkError)
)
