import { Loader } from '@/UI'

export const handleCatchChunkError = () => {
  window.location.reload()

  return { default: Loader }
}
