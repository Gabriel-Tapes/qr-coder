import { useContext } from 'react'
import { ChatContext, ShowingContext } from '..'
import './styles/Functions.css'
import { ReactComponent as CreateIcon } from '@/assets/icons/create.svg'
import { ReactComponent as ReadIcon } from '@/assets/icons/read.svg'
import { ReactComponent as ScanIcon } from '@/assets/icons/scan.svg'

export const Functions = () => {
  return (
    <div className="functions">
      <Function id="create" title="Criar QR Code" />
      <Function id="read" title="Ler QR Code de imagem" />
      <Function id="scan" title="Ler QR Code da Câmera" />
    </div>
  )
}

interface FunctionProps {
  id: 'create' | 'read' | 'scan'
  title: string
}

const Function = ({ id, title }: FunctionProps) => {
  const { chatContext, setChatContext } = useContext(ChatContext)
  const { setShowing } = useContext(ShowingContext)

  const FunctionIcon = {
    create: <CreateIcon className="function-icon" />,
    read: <ReadIcon className="function-icon" />,
    scan: <ScanIcon className="function-icon" />
  }

  return (
    <button
      id={id}
      onClick={() => {
        setChatContext({ id, title })
        setShowing('chat')
      }}
      className={chatContext.id === id ? 'selected' : ''}
    >
      {FunctionIcon[id]}
      <p className="function-name">{title}</p>
    </button>
  )
}
