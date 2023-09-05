import { Modal } from '@/UI'
import { Avatar, List, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setBocked } from '@/libs/slices/teacherSlice'
import { clock, light, schedule } from '@/assets'

export default function ReservationModal({ close, id }) {
  const dispatch = useDispatch()

  const henlerClose = () => {
    const option = {
      event: { id: id },
    }
    dispatch(setBocked(option))
    close()
  }

  const hendlerCancelRespond = () => {
    const opt = {
      event: {
        id: id,
      },
    }
    dispatch()
  }

  const data = [
    {
      title: 'Ali',
      icon: schedule,
    },
    {
      title: 'Wednesday 01/04/2023  03:00 PM',
      icon: schedule,
    },
    {
      title: '60 minutes',
      icon: clock,
    },
    {
      title: 'Conversation Practise',
      icon: light,
    },
  ]

  return (
    <Modal className="!w-[400px]" onCancel={close}>
      <div className="w-full flex flex-col justify-around">
        <p className="text-xl font-bold text-[#000000]">Reservation</p>
      </div>
      <div className="w-full flex flex-col justify-around">
        <List
          itemLayout="horizontal"
          dataSource={data}
          split={false}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta avatar={<Avatar src={item.icon} />} title={item.title} />
            </List.Item>
          )}
        />
      </div>
      <div className="w-full flex flex-col items-center py-3">
        <p>Ali booked today at 05:55</p>
      </div>
      <div className="w-full flex items-center justify-around">
        <Button onClick={henlerClose} className="bg-[#39B980] text-white">
          I’ll be there
        </Button>
        <Button onClick={henlerClose} className="bg-[#666666] text-white">
          I can’t make it
        </Button>
      </div>
    </Modal>
  )
}
