import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { useParams } from "react-router"
import { CourseCard } from "@/components";
import { arrowCources } from '@/assets';
import { Primary, Secondary } from '@/UI';
import { useMedia } from 'src/libs/hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCources, fetchSingleCource } from '@/libs/slices/courceSlice';

export default function Details() {
  const [cource, setCource] = useState({});
  const [allCources, setAllCources] = useState([]);

  window.scrollTo(0, 0);

  const { id } = useParams();

  const { isSmallMobile } = useMedia();

  const dispatch = useDispatch();

  const fetchData = async () => {
    const { payload: { data } } = await dispatch(fetchSingleCource(id));
    const { payload } = await dispatch(fetchCources());
    setCource(data);
    setAllCources(payload.data);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, id]);

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
              <CourseCard course={cource} type='details' />
              <Primary className='w-full !h-[48px] mt-14'>Start course</Primary>
            </div>
            <div className='mt-14'>
              <p className='mb-2 text-xl font-medium text-gray-800'>Overview</p>
              <p className='text-gray-CCC text-base'>{cource?.overview}</p>
              <p className='mb-2 mt-6 text-xl font-medium text-gray-800'>What will you be able to do?</p>
              <p className='text-gray-CCC text-base'>{cource?.result ? cource?.result : 'pppppppp'}</p>
              <div className='flex-center mt-[87px]'>
                <p className='not-italic font-extrabold text-2xl leading-6 flex items-center text-gray-800 mr-[66px]'>Syllabus</p>
                <div className='flex-center'>
                  <p className='cource-info'>Experience Level</p>
                  <span className="mx-2">&#x2022;</span>
                  <p className='text-gray-CCC'>{cource?.level}</p>
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
            {allCources?.map(cource => (
              <CourseCard course={cource} key={cource.id} />
            ))}
          </div>
        </div>
      }
    </>
  )
}
