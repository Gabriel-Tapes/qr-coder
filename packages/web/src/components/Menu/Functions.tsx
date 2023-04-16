import { useContext } from 'react'
import { ChatContext } from '..'
import './styles/Functions.css'
import { ReactComponent as CreateIcon } from '@/assets/icons/create.svg'
import { ReactComponent as ReadIcon } from '@/assets/icons/read.svg'
import { ReactComponent as ScanIcon } from '@/assets/icons/scan.svg'

interface FunctionsProps {
  setSelected: ({
    id,
    title
  }: {
    id: 'create' | 'read' | 'scan'
    title: string
  }) => void
}
export const Functions = ({ setSelected }: FunctionsProps) => {
  const selected = useContext(ChatContext)

  return (
    <div className="functions">
      <ChatContext.Provider value={selected}>
        <Function id="create" title="Criar QR Code" handleClick={setSelected} />
        <Function
          id="read"
          title="Ler QR Code de imagem"
          handleClick={setSelected}
        />
        <Function
          id="scan"
          title="Ler QR Code da Câmera"
          handleClick={setSelected}
        />
      </ChatContext.Provider>
    </div>
  )
}

interface FunctionProps {
  id: 'create' | 'read' | 'scan'
  title: string
  handleClick: ({
    id,
    title
  }: {
    id: 'create' | 'read' | 'scan'
    title: string
  }) => void
}

const Function = ({ id, title, handleClick }: FunctionProps) => {
  const currentFunction = useContext(ChatContext)

  const FunctionIcon = {
    create: <CreateIcon className="function-icon" />,
    read: <ReadIcon className="function-icon" />,
    scan: <ScanIcon className="function-icon" />
  }

  return (
    <button
      id={id}
      onClick={() => handleClick({ id, title })}
      className={currentFunction.id === id ? 'selected' : ''}
    >
      {FunctionIcon[id]}
      <p className="function-name">{title}</p>
    </button>
  )
}
