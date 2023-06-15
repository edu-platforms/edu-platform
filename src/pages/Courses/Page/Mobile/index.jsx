import { CourseCard } from '@/components'

export const CourseMobile = ({ course }) => {
  const a = Array.from({ length: 8 }, () => Math.random());

  return (
    <div className='flex-column gap-4'>
      {a.map(i => (
        <CourseCard course={course} key={i} />
      ))}
    </div>
  )
}
