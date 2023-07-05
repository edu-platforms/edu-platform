import { CourseCard } from '@/components'
import { courcesSelector, fetchCources } from '@/libs/slices/courceSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CourseMobile = ({  }) => {
  const dispatch = useDispatch();

  const { cources } = useSelector(courcesSelector);

  useEffect(() => {
    dispatch(fetchCources());
  }, []);

  return (
    <div className='flex-column gap-4'>
      {cources?.map(cource => (
        <CourseCard course={cource} key={cource.id} />
      ))}
    </div>
  )
}
