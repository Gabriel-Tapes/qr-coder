import { useContext, useState } from 'react'
import { ChatContext, MessagesContext } from '..'
import { ReactComponent as Send } from '@/assets/chat-send-icon.svg'
import './styles/Prompt.css'

export const Prompt = () => {
  const { chatContext } = useContext(ChatContext)
  const { setLastMessage } = useContext(MessagesContext)
  if (chatContext.id !== 'create') return null
  const [message, setMessage] = useState<string>('')

  return (
    <form
      className="prompt"
      onSubmit={(e) => {
        e.preventDefault()
        if (message) setLastMessage({ from: 'user', content: message })
        setMessage('')
      }}
      autoComplete="off"
    >
      <input
        id="content"
        type="text"
        placeholder="Texto"
        maxLength={100}
        value={message}
        onChange={(e) => setMessage(e.target.value.slice(0, 23648))}
      />
      <button type="submit" className="send">
        <Send />
      </button>
    </form>
  )
}
