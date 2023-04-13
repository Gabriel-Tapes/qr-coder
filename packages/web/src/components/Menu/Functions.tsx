import { useContext } from 'react'
import { ChatContext } from '..'
import './styles/Functions.css'

interface FunctionsProps {
  setSelected: ({ id, title }: { id: string; title: string }) => void
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
  id: string
  title: string
  handleClick: ({ id, title }: { id: string; title: string }) => void
}

const Function = ({ id, title, handleClick }: FunctionProps) => {
  const currentFunction = useContext(ChatContext)

  return (
    <button
      id={id}
      onClick={() => handleClick({ id, title })}
      className={currentFunction.id === id ? 'selected' : ''}
    >
      <i className="function-icon" />
      <p className="function-name">{title}</p>
    </button>
  )
}
