import { createContext } from 'react'

interface ChatStateProps {
  id: 'create' | 'read' | 'scan'
  title: string
}

interface ChatContextProps {
  chatContext: ChatStateProps
  setChatContext: ({ id, title }: ChatStateProps) => void
}

export const ChatContext = createContext<ChatContextProps>({
  chatContext: {
    id: 'create',
    title: 'Criar QR Code'
  },
  setChatContext: ({ id, title }: ChatStateProps) => console.log(id, title)
})

export interface LastMessageProps {
  from: 'user' | 'bot'
  content?: string
  imageUrl?: string
  svg?: boolean
}
interface MessagesContextProps {
  lastMessage: LastMessageProps
  setLastMessage: ({ from, content, imageUrl, svg }: LastMessageProps) => void
}

export const MessagesContext = createContext<MessagesContextProps>({
  lastMessage: { from: 'bot' },
  setLastMessage: ({ from, content, imageUrl, svg }: LastMessageProps) =>
    console.log(from, content, imageUrl, svg)
})

interface ShowingContextProps {
  showing: 'menu' | 'chat'
  setShowing: (showing: 'menu' | 'chat') => void
}

export const ShowingContext = createContext<ShowingContextProps>({
  showing: 'menu',
  setShowing: (showing: 'menu' | 'chat') => console.log(showing)
})
