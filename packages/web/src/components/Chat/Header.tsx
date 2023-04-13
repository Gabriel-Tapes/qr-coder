import './styles/Header.css'
import { ChatContext } from '..'

interface HeaderProps {
  setShowing: ({ showing }: { showing: 'menu' | 'chat' }) => void
}

export const Header = ({ setShowing }: HeaderProps) => {
  return (
    <div className="header">
      <button onClick={() => setShowing({ showing: 'menu' })}>voltar</button>
      <i className="icon" />
      <ChatContext.Consumer>
        {(value) => <h2 className="title">{value.title}</h2>}
      </ChatContext.Consumer>
    </div>
  )
}
