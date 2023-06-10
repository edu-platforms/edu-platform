import React from 'react'
import { Wrapper } from '@/UI'
import { Divider } from 'antd'
import { day, chat, week, time, review, source } from '@/assets'

export default function LessonCard({ button, completed }) {

  return (
    <>
      <Wrapper className='mb-5 xl:px-8 px-5'>
        <div className='flex justify-between items-center mb-5'>
          <div className='flex items-center gap-x-2'>
            <img
              className='dash-card-thumb w-14 h-14'
              src={'https://picsum.photos/id/237/200/300'}
              alt='Person'
            />
            <h3 className='font-bold'>John Due</h3>
          </div>
          {button ? (
            button
          ) : (
            <div className='flex gap-x-1'>
              <img src={week} alt='Week' />

              <p>Week 1 - Lesson 3</p>
            </div>
          )}
        </div>
        <div className='flex gap-x-5 items-center'>
          <div className='flex'>
            <img src={day} alt='Day' />
            <p>Sun, 12 April</p>
          </div>
          <div className='flex'>
            <img className='opacity-60 mr-1' src={time} alt='Time' />
            <p>12:00 AM - 12:30 AM</p>
          </div>
        </div>
        {completed ? (
          <>
            <Divider className='my-3' />
            <div className='grid grid-cols-3'>
              <button className='flex items-center justify-center'>
                <img src={review} alt='Review' className='w-5' />
                <p className='text-sm mt-1'>Your review</p>
              </button>

              <button className='flex items-center justify-center'>
                <img src={chat} alt='Chat' className='w-5' />
                <p className='text-sm mt-1'>Open chat</p>
              </button>

              <button className='flex items-center justify-center'>
                <img src={source} alt='Source' className='w-5' />
                <p className='text-sm mt-1'>Source files</p>
              </button>
            </div>
            <p className='ml-auto opacity-60 italic text-sm text-end mt-4'>
              Completed at: <time>10.03.2023 12:32 AM</time>
            </p>
          </>
        ) : ('')}
      </Wrapper>
    </>
  )
}
