import { createContext } from 'react'

interface ChatContextProps {
  id: 'create' | 'read' | 'scan'
  title: string
}

export const ChatContext = createContext<ChatContextProps>({
  id: 'create',
  title: 'Criar QR Code'
})

interface MessagesContextProps {
  from: 'user' | 'bot'
  content?: string
  imageUrl?: string
  svg?: boolean
}

export const MessagesContext = createContext<MessagesContextProps>({
  from: 'user'
})

interface ShowingContextProps {
  showing: 'menu' | 'chat'
}

export const ShowingContext = createContext<ShowingContextProps>({
  showing: 'menu'
})
