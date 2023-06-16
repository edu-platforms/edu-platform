import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalStorage } from '@/libs/utils'
import { setAuth, setToken, authSelector } from '@/libs/store/index.js'
import { TOKEN } from '@/libs/constants/cookie.js'

export default function useBootstrap() {
  const dispatch = useDispatch()
  const [isInitiated, setIsInitiated] = useState(true)
  const { isAuth } = useSelector(authSelector)

  const accessToken = getLocalStorage(TOKEN)

  const setApp = () => {
    if (accessToken) {
      dispatch(setAuth(true))
      dispatch(setToken(accessToken))
    }
  }

  const getAppConfigs = () => {
    try {
      setApp()

      setIsInitiated(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAppConfigs()
  }, [])

  return { isAuth, isInitiated }
}
