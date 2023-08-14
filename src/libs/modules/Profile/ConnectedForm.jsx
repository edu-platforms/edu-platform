import { ProfileForm } from './Form.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { becomeTutor, authSelector } from '@/libs/slices/authSlices.js'

export default function ConnectedForm({ prev, next }) {
  const dispatch = useDispatch()

  const { teacher } = useSelector(authSelector)

  const onFinish = (values) => {
    const options = {
      ...teacher,
      user_about: values.about,
    }
    dispatch(becomeTutor(options))

    next()
  }

  return <ProfileForm onFinish={onFinish} prev={prev} />
}
