import { StartForm } from './Form'
import React from 'react'
import { history } from '@/libs/utils/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '../../store/index.js'
import { userSignUp } from '../../store/index.js'

export default function ConnectedForm({ next }) {
  const { user } = useSelector(authSelector)
  const dispatch = useDispatch()


  const onFinish = (values) => {
    const option = {
      firstname: values.name,
      email: user.email,
      password: user.password,
      whom: user.whom,
    }
    dispatch(userSignUp({ option, next }))

  }

  return <StartForm onFinish={onFinish} />
}
