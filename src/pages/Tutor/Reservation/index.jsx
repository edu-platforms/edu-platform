import { useContext, useEffect, useState } from 'react'
import { eventFormatLocalTime, eventTimeCalendarFormat } from '@/libs/utils/format'
import { ModalContext } from '@/context/index.jsx'
import { TutorDisplay, TutorNotification, TutorQustion, Wrapper } from '@/UI'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { PriorityModal } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { getMeUser } from '@/libs/slices/profileSlice'
import { getPriorityHours } from '@/libs/slices/eventSlice'
import { getMyEvents } from '@/libs/slices/eventSlice'

export default function Priority() {
  const { show, close } = useContext(ModalContext)
  const [time, setTime] = useState(null)
  const { user } = useSelector(getMeUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPriorityHours(user?.id))
  }, [])

  const { events } = useSelector(getMyEvents)

  const event = events?.map((el) => {
    return {
      id: el.id,
      start: eventTimeCalendarFormat(el?.dateFrom),
      end: eventTimeCalendarFormat(el?.dateTo),
      title: el.teacher.firstname,
    }
  })

  const handleEventClick = (event) => {
    const { start, end } = event
    const startDate = eventFormatLocalTime(start)
    const endDate = eventFormatLocalTime(end)
    console.log(startDate)
    const utcDate = new Date(startDate)
    const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset());
    const funcDate = eventTimeCalendarFormat(startDate)
    console.log('loc: '+localDate)
    console.log('fuc: '+funcDate)

    const date = {
      start: startDate,
      end: endDate,
    }
    setTime(date)
    show()
  }

  const eventStyleGetter = () => {
    const backgroundColor = '#58db2b'
    const borderColor = '#58db2b'
    const style = {
      backgroundColor,
      borderColor,
    }
    return {
      style,
    }
  }

  const selectEvent = (event) => {
    console.log(event)
  }

  return (
    <div className="flex-start gap-x-5">
      <div className="w-1/3 ">
        <TutorNotification />
        <TutorQustion />
        <TutorDisplay />
      </div>

      <Wrapper size="small" className="w-2/3">
        <Calendar
          localizer={localizer}
          events={event}
          startAccessor="start"
          endAccessor="end"
          step={15}
          // timeslots={2}
          defaultView="week"
          views={['month', 'week', 'day']}
          eventPropGetter={eventStyleGetter}
          selectable={true}
          onSelectSlot={handleEventClick}
          onSelectEvent={selectEvent}
        />
        <PriorityModal close={close} time={time} />
      </Wrapper>
    </div>
  )
}
