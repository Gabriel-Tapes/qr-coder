import { createContext } from 'react'
import {
  ChatContextProps,
  MessagesContextProps,
  ImageViewerContextProps,
  ChatStateProps,
  LastMessageProps,
  ImageViewerProps,
  ShowingContextProps
} from '@types'

export const ChatContext = createContext<ChatContextProps>({
  chatContext: {
    id: 'create',
    title: 'Criar QR Code'
  },
  setChatContext: ({ id, title }: ChatStateProps) => console.log(id, title)
})

export const MessagesContext = createContext<MessagesContextProps>({
  lastMessage: { from: 'bot' },
  setLastMessage: ({ from, content, imageUrl, svg }: LastMessageProps) =>
    console.log(from, content, imageUrl, svg)
})

export const ShowingContext = createContext<ShowingContextProps>({
  showing: 'menu',
  setShowing: (showing: 'menu' | 'chat') => console.log(showing)
})

export const ImageViewerContext = createContext<ImageViewerContextProps>({
  imageViewerContext: {
    showing: false,
    url: ''
  },
  setImageViewerContext: ({ showing, url }: ImageViewerProps) =>
    console.log(showing, url)
})
