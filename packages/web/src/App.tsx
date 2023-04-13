import { Chat } from './components/Chat'
import { Menu } from './components/Menu'
import { ChatContext, ShowingContext } from './components'
import './static/styles/app.css'
import { useState } from 'react'

export const App = () => {
  const [context, setContext] = useState({
    id: 'create',
    title: 'Criar QR Code'
  })
  const [showing, setShowing] = useState<{ showing: 'menu' | 'chat' }>({
    showing: 'menu'
  })

  return (
    <div className="app">
      <ShowingContext.Provider value={showing}>
        <ChatContext.Provider value={context}>
          <Menu setContext={setContext} setShowing={setShowing} />
          <Chat setShowing={setShowing} />
        </ChatContext.Provider>
      </ShowingContext.Provider>
    </div>
  )
}
