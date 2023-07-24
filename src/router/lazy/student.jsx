import { lazy } from 'react'
import { handleCatchChunkError } from '../utils'

export const Student = lazy(() =>
  import('@/pages')
    .then(({ Student }) => ({ default: Student }))
    .catch(handleCatchChunkError)
)

export const StudentTutors = lazy(() =>
  import('@/pages')
    .then(({ StudentTutors }) => ({ default: StudentTutors }))
    .catch(handleCatchChunkError)
)

export const StudentCourses = lazy(() =>
  import('@/pages')
    .then(({ StudentCourses }) => ({ default: StudentCourses }))
    .catch(handleCatchChunkError)
)

export const StudentSettings = lazy(() =>
  import('@/pages')
    .then(({ StudentSettings }) => ({ default: StudentSettings }))
    .catch(handleCatchChunkError)
)

export const StudentSubscriptions = lazy(() =>
  import('@/pages')
    .then(({ StudentSubscriptions }) => ({ default: StudentSubscriptions }))
    .catch(handleCatchChunkError)
)

export const StudentFavorites = lazy(() =>
  import('@/pages')
    .then(({ StudentFavorites }) => ({ default: StudentFavorites }))
    .catch(handleCatchChunkError)
)

export const StudentHelp = lazy(() =>
  import('@/pages')
    .then(({ StudentHelp }) => ({ default: StudentHelp }))
    .catch(handleCatchChunkError)
)

export const StudentFeedback = lazy(() =>
  import('@/pages')
    .then(({ StudentFeedback }) => ({ default: StudentFeedback }))
    .catch(handleCatchChunkError)
)

export const StudentLive = lazy(() =>
  import('@/pages')
    .then(({ StudentLive }) => ({ default: StudentLive }))
    .catch(handleCatchChunkError)
)

export const StudentSchedule = lazy(() =>
  import('@/pages')
    .then(({ StudentSchedule }) => ({ default: StudentSchedule }))
    .catch(handleCatchChunkError)
)

export const StudentUpcoming = lazy(() =>
  import('@/pages')
    .then(({ StudentUpcoming }) => ({ default: StudentUpcoming }))
    .catch(handleCatchChunkError)
)

export const StudentCompleted = lazy(() =>
  import('@/pages')
    .then(({ StudentCompleted }) => ({ default: StudentCompleted }))
    .catch(handleCatchChunkError)
)

export const StudentDashboard = lazy(() =>
  import('@/pages')
    .then(({ StudentDashboard }) => ({ default: StudentDashboard }))
    .catch(handleCatchChunkError)
)
