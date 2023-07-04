import { CourseCard } from '@/components'

export const CourseMobile = ({ data }) => {

  const a = Array.from({ length: 8 }, () => Math.random());

  return (
    <div className='flex-column gap-4'>
      {data.map(cource => (
        <CourseCard course={cource} key={cource.id} />
      ))}
    </div>
  )
}
