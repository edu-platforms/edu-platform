import { useMedia } from '@/libs/hooks';
import { Primary } from '@/UI';
import { Divider } from 'antd';
import { useEffect } from 'react';
import { CourseCard } from '@/components'
import { CourseMobile } from './Mobile';
import { useDispatch, useSelector } from "react-redux";
import { courcesSelector, fetchCources } from '@/libs/slices/courceSlice';

export default function Courses() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();

  const { data } = useSelector(courcesSelector);

  useEffect(() => {
    dispatch(fetchCources());
  }, []);

  const { isSmallMobile } = useMedia();

  const course = {
    name: 'John Doe',
    img: 'https://picsum.photos/305/320',
    country: 'USA',
    rating: 4.5,
    title: 'Basic Conversation Topics',
    degree: 'Beginner',
    lessonsCount: '12'
  };

  const a = Array.from({ length: 8 }, () => Math.random());

  const CourseDesktop = (
    <>
      <h2 className='bg-gray-CCC px-4 py-3 mb-14 rounded-xl max-w-[306px] text-center font-extrabold text-4xl leading-10'>Your Courses</h2>
      <p className='courses-title'>Fundamentals of English Fluency</p>
      <p className='courses-description mt-2 mb-5'>Gain confidence and fluency in conversational English. There is something for everyone, with courses for all skill levels covering everything from the basics of smalltalk to crafting well-formed opinions about complex, topical issues.</p>
      <Divider className='mb-5' />
      <div className='grid-template'>
        {data?.cources.map(cource => (
          <CourseCard key={cource.id} course={cource} />
        ))}
      </div>
      <h2 className='courses-title mt-20 mb-2'>Express Yourself</h2>
      <p className='courses-description'>Learning English is a great way to make connections with people across the globe. Explore a variety of timely topics while expanding on domain-specific vocabulary, and learn about other cultures and perspectives along the way!</p>
      <Divider className='my-5' />
      <div className='grid-template'>
        {data?.cources.map(cource => (
          <CourseCard key={cource.id} course={cource} />
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <Primary className='white-btn shadow-none'>Other results</Primary>
      </div>
    </>
  );

  return (
    <> {isSmallMobile ? <CourseMobile course={''} /> : CourseDesktop} </>
  );
}
