import { useContext } from 'react'
import { ChatContext, ShowingContext } from '..'
import { Functions } from './Functions'
import { Header } from './Header'
import './styles/Menu.css'

interface MenuProps {
  setContext: ({ id, title }: { id: string; title: string }) => void
  setShowing: ({ showing }: { showing: 'menu' | 'chat' }) => void
}

export const Menu = ({ setContext, setShowing }: MenuProps) => {
  const selected = useContext(ChatContext)

  const handleSelect = ({ id, title }: { id: string; title: string }) => {
    setContext({ id, title })
    setShowing({ showing: 'chat' })
  }

  return (
    <ShowingContext.Consumer>
      {({ showing }) => (
        <div className={`menu${showing === 'menu' ? ' show' : ''}`}>
          <Header />
          <ChatContext.Provider value={selected}>
            <Functions setSelected={handleSelect} />
          </ChatContext.Provider>
        </div>
      )}
    </ShowingContext.Consumer>
  )
}
