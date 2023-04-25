import { useContext } from 'react'
import { ChatContext, ShowingContext } from '..'
import { ReactComponent as Back } from '@/assets/chat-back-icon.svg'
import { ReactComponent as CreateIcon } from '@/assets/icons/create.svg'
import { ReactComponent as ReadIcon } from '@/assets/icons/read.svg'
import { ReactComponent as ScanIcon } from '@/assets/icons/scan.svg'
import './styles/Header.css'

export const Header = () => {
  const { chatContext } = useContext(ChatContext)
  const { setShowing } = useContext(ShowingContext)

  const FunctionIcon = {
    create: <CreateIcon className="icon" />,
    read: <ReadIcon className="icon" />,
    scan: <ScanIcon className="icon" />
  }

  return (
    <div className="header">
      <button onClick={() => setShowing('menu')}>
        <Back />
      </button>

      {FunctionIcon[chatContext.id]}
      <h2 className="title">{chatContext.title}</h2>
    </div>
  )
}
