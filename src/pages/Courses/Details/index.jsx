import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { useParams } from "react-router"
import { CourseCard } from "@/components";
import { arrowCources } from '@/assets';
import { Primary, Secondary } from '@/UI';
import { useMedia } from 'src/libs/hooks';

export default function Details({ courceLevel = 'Beginner' }) {
  const { id } = useParams()

  const { isSmallMobile } = useMedia()

  const course = {
    name: 'John Doe',
    img: 'https://picsum.photos/305/320',
    country: 'USA',
    rating: 4.5,
    title: 'Basic Conversation Topics',
    degree: 'Beginner',
    lessonsCount: '12'
  };

  window.scrollTo(0, 0);

  return (
    <>
      {isSmallMobile
        ?
        <h1>Mobile</h1>
        : <div className='w-full'>
          <Link to='/courses'>
            <Secondary icon={arrowCources} type='gray'>All courses</Secondary>
          </Link>
          <Divider className='my-5' />
          <div className='flex gap-x-[60px]'>
            <div className="!max-w-[413px] w-full">
              <CourseCard course={course} type='details' />
              <Primary className='w-full !h-[48px] mt-14'>Start course</Primary>
            </div>
            <div className='mt-14'>
              <p className='mb-2 text-xl font-medium text-gray-800'>Overview</p>
              <p className='text-gray-CCC text-base'>It can be intimidating to speak with a foreigner, no matter how much grammar and vocabulary you've mastered. If you have basic knowledge of English but have not spent much time speaking, this course will help you ease into your first English conversations.</p>
              <p className='mb-2 mt-6 text-xl font-medium text-gray-800'>What will you be able to do?</p>
              <p className='text-gray-CCC text-base'>It can be intimidating to speak with a foreigner, no matter how much grammar and vocabulary you've mastered. If you have basic knowledge of English but have not spent much time speaking, this course will help you ease into your first English conversations.</p>
              <div className='flex-center mt-[87px]'>
                <p className='not-italic font-extrabold text-2xl leading-6 flex items-center text-gray-800 mr-[66px]'>Syllabus</p>
                <div className='flex-center'>
                  <p className='cource-info'>Experience Level</p>
                  <span className="mx-2">&#x2022;</span>
                  <p className='text-gray-CCC'>{courceLevel}</p>
                  <p className='cource-info ml-8'>Course Length</p>
                  <span className="mx-2">&#x2022;</span>
                  <p className='text-gray-CCC'>10 lessons</p>
                </div>
              </div>
              <Divider />
              <ul className='flex-center flex-wrap gap-4'>
                <li className='hashtag'>Foods You Love</li>
                <li className='hashtag'>Playing and Watching Sports</li>
              </ul>
            </div>
          </div>
          <p className='mt-[116px] font-[800] text-2xl text-gray-800'>Other Courses</p>
          <Divider className='mt-[12px] mb-5' />
          <div className='grid-template'>
            {[1, 2, 3, 4].map(i => (
              <CourseCard course={course} key={i} />
            ))}
          </div>
        </div>
      }
    </>
  )
}
