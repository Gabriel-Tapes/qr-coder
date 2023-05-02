export interface ChatStateProps {
  id: 'create' | 'read' | 'scan'
  title: string
}

export interface LastMessageProps {
  from: 'user' | 'bot'
  content?: string
  imageUrl?: string
  svg?: boolean
}

export type Showing = 'menu' | 'chat'

export interface ImageViewerProps {
  showing: boolean
  url: string
}
