import { ChatMenu, ChatBar } from '@/components'
import { useEffect } from 'react'
import io from 'socket.io-client'

export default function Chat() {
  //   const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQsImlhdCI6MTY4NzE3MjExMCwiZXhwIjoxNjg3MTcyMjkwfQ.A619PDHz1F8Am_LiQOs8FOdTaDO2U4dLiYpttc9haBA`

  //   useEffect(() => {
  //     const socket = io('https://single.uz/api', {
  //       query: { authorization: `${token}` },
  //     })

  //     socket.on('send-message', (msg) => {})
  //   }, [])
  return (
    <div className="chat-container">
      <ChatMenu />
      <ChatBar />
    </div>
  )
}
