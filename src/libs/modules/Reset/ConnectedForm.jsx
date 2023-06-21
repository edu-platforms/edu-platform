import { useLocation, useNavigate } from 'react-router-dom'
import { ResetForm } from './Form.jsx'
import { useDispatch } from 'react-redux'
import { sendEmailCode } from '@/libs/slices/authSlices.js'
export default function ConnectedForm() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isForgot = pathname === '/forgot'

  const onFinish = (values) => {
    if (isForgot) {
      const option = {
        email: values?.email,
      }
      dispatch(sendEmailCode({ option, navigate }))
    }
  }

  return <ResetForm isForgot={isForgot} onFinish={onFinish} />
}
