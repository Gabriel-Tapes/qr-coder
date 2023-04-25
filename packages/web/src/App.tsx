import { useContext, useState } from 'react'
import { ChatContext, ShowingContext } from './components'
import { Chat } from './components/Chat'
import { Menu } from './components/Menu'
import './styles/app.css'

export const App = () => {
  const { chatContext: initChatContext } = useContext(ChatContext)
  const [chatContext, setChatContext] =
    useState<typeof initChatContext>(initChatContext)
  const [showing, setShowing] = useState<'menu' | 'chat'>('menu')

  return (
    <div className="app">
      <ShowingContext.Provider value={{ showing, setShowing }}>
        <ChatContext.Provider value={{ chatContext, setChatContext }}>
          <Menu />
          <Chat />
        </ChatContext.Provider>
      </ShowingContext.Provider>
    </div>
  )
}
