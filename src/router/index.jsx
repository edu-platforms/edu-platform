import { useBootstrap } from 'src/libs/hooks'
import { Loader } from '@/UI'
import { Routes } from './routes'

export const Router = () => {
  const { isInitiated } = useBootstrap()

  if (isInitiated) return <Loader />

  return <Routes />
}
