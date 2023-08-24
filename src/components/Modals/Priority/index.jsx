import { Modal } from '@/UI'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addPriorityHour } from '@/libs/slices/eventSlice'

export default function PriorityModal({ close, time }) {
  const dispatch = useDispatch()
  const henlerClose = () => {
    const option = {
      dateFrom: time.start,
      dateTo: time.end,
    }
    dispatch(addPriorityHour(option))
    close()
  }

  return (
    <Modal className="!w-[600px]">
      <div className="w-full flex justify-around items-center">
        <p>{`${time?.start}`}</p> - <p>{`${time?.end}`}</p>
      </div>
      <Button onClick={henlerClose} className="w-[60px] bg-green-600 text-white">
        Yes
      </Button>
    </Modal>
  )
}
