import { useState } from 'react'
import './styles/Prompt.css'
import { ReactComponent as Send } from '@/assets/chat-send-icon.svg'

interface PromptProps {
  hidden: boolean
  onSend(message: {
    from: 'user' | 'bot'
    content?: string
    imageUrl?: string
    svg?: boolean
  }): void
}

export const Prompt = ({ hidden, onSend }: PromptProps) => {
  if (hidden) return null
  const [message, setMessage] = useState<string>('')

  return (
    <form
      className="prompt"
      onSubmit={(e) => {
        e.preventDefault()
        if (message) onSend({ from: 'user', content: message })
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
