import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Tag } from 'antd'
import { noPhoto } from '@/assets'

export default function CourceCardMobile({ course }) {
  return (
    <Link className='flex-column rounded-tr-2xl rounded-tl-2xl w-full' to={`/courses/${course.id}`}>
      <Image
        className='rounded-tr-2xl !h-[184px] rounded-tl-2xl !w-full object-contain'
        src={course?.image ? course.image : 'error'}
        alt={course?.name}
        preview={false}
        fallback={noPhoto}
      />
      <div className='p-4 border border-gray-100 rounded-bl-2xl rounded-br-2xl relative bg-white'>
        <div className='absolute top-[-40px] left-[16px]'>
          <Tag className='opacity-60' color='black'>{course?.level}</Tag>
          <Tag className='opacity-60' color='black'>{course?.lessonCount || '12 lesson default'}</Tag>
        </div>
        <p className='font-medium text-lg'>{course?.name}</p>
        <p className='mt-4 text-[#858585]'>{course?.descr}</p>
      </div>
    </Link>
  )
}
