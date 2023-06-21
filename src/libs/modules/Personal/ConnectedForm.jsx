import { useDispatch } from 'react-redux'
import { setPersonal } from '@/libs/slices/authSlices.js'
import { PersonalForm } from './Form.jsx'

export default function ConnectedForm({ prev, next }) {
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(setPersonal(values))
    next()
  }

  return <PersonalForm prev={prev} onFinish={onFinish} />
}
