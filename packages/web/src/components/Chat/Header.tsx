import './styles/Header.css'
import { ChatContext } from '..'
import { ReactComponent as Back } from '@/assets/chat-back-icon.svg'
import { ReactComponent as CreateIcon } from '@/assets/icons/create.svg'
import { ReactComponent as ReadIcon } from '@/assets/icons/read.svg'
import { ReactComponent as ScanIcon } from '@/assets/icons/scan.svg'

interface HeaderProps {
  setShowing: ({ showing }: { showing: 'menu' | 'chat' }) => void
}

export const Header = ({ setShowing }: HeaderProps) => {
  const FunctionIcon = {
    create: <CreateIcon className="icon" />,
    read: <ReadIcon className="icon" />,
    scan: <ScanIcon className="icon" />
  }

  return (
    <div className="header">
      <button onClick={() => setShowing({ showing: 'menu' })}>
        <Back />
      </button>
      <ChatContext.Consumer>
        {(value) => {
          return (
            <>
              {FunctionIcon[value.id]}
              <h2 className="title">{value.title}</h2>
            </>
          )
        }}
      </ChatContext.Consumer>
    </div>
  )
}
