import { useState } from 'react'
import './styles/Prompt.css'

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
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          className=""
          version="1.1"
          x="0px"
          y="0px"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
          />
        </svg>
      </button>
    </form>
  )
}
