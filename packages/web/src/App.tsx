import { useContext, useState } from 'react'
import { ChatContext, ImageViewerContext, ShowingContext } from './components'
import { Chat } from './components/Chat'
import { Menu } from './components/Menu'
import './styles/app.css'
import { ImageViewer } from './components/ImageViewer'
import { ChatStateProps, ImageViewerProps } from '@types'
import { Showing } from '@types'

export const App = () => {
  const { chatContext: initChatContext } = useContext(ChatContext)
  const [chatContext, setChatContext] =
    useState<ChatStateProps>(initChatContext)
  const [showing, setShowing] = useState<Showing>('menu')
  const [viewImage, setViewImage] = useState<ImageViewerProps>({
    showing: false,
    url: ''
  })

  return (
    <div className="app">
      <ShowingContext.Provider value={{ showing, setShowing }}>
        <ChatContext.Provider value={{ chatContext, setChatContext }}>
          <Menu />
          <ImageViewerContext.Provider
            value={{
              imageViewerContext: viewImage,
              setImageViewerContext: setViewImage
            }}
          >
            <Chat />
            <ImageViewer />
          </ImageViewerContext.Provider>
        </ChatContext.Provider>
      </ShowingContext.Provider>
    </div>
  )
}
