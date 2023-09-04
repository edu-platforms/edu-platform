import React, { Fragment } from 'react'
import { LessonCard } from '@/components'

export default function Completed() {
  return (
    <Fragment>
      <div className="w-full">
        <LessonCard completed={true} />
      </div>
    </Fragment>
  )
}
