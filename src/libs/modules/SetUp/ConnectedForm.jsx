import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setLogin } from '@/libs/store/index.js'
import { SetUpForm } from './Form.jsx'
import { userSignIn } from '../../store/index.js'

export default function ConnectedForm({ next }) {
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const isSignIn = pathname === '/sign-in'

  const onFinish = (values) => {
    if (isSignIn) {
      const option = {
        email: values.email,
        password: values.password,
      }
      dispatch(userSignIn(option))
    } else {
      dispatch(setLogin(values))
      next()
    }
  }

  return <SetUpForm isSignIn={isSignIn} onFinish={onFinish} />
}
