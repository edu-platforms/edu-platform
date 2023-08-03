import { ChatMenu, ChatBar } from '@/components'
import { getLocalStorage } from '@/libs/utils'
import { useEffect } from 'react'
import io from 'socket.io-client'

export default function Chat() {
  const token = getLocalStorage('access-token')

  useEffect(() => {
    const socket = io('https://single.uz/', {
      query: { authorization: `Bearer ${token}` },
    })

    socket.on('send-message', (msg) => {
      console.log(msg)
    })
  }, [])

  return (
    <div className="chat-container">
      <ChatMenu />
      <ChatBar />
    </div>
  )
}
