import {
  ChatStateProps,
  ImageViewerProps,
  LastMessageProps,
  Showing
} from './chatTypes'

export interface ChatContextProps {
  chatContext: ChatStateProps
  setChatContext: ({ id, title }: ChatStateProps) => void
}

export interface MessagesContextProps {
  lastMessage: LastMessageProps
  setLastMessage: ({ from, content, imageUrl, svg }: LastMessageProps) => void
}

export interface ShowingContextProps {
  showing: Showing
  setShowing: (showing: Showing) => void
}

export interface ImageViewerContextProps {
  imageViewerContext: ImageViewerProps
  setImageViewerContext: ({ showing, url }: ImageViewerProps) => void
}
