import { QrScanner } from '@yudiel/react-qr-scanner'
import { useContext, useState } from 'react'
import { ChatContext, MessagesContext } from '..'
import { ReactComponent as Camera } from '@/assets/chat-camera-icon.svg'
import { ReactComponent as Close } from '@/assets/chat-close-icon.svg'
import './styles/ImageScanner.css'

export const ImageScanner = () => {
  const [scanning, setScanning] = useState<boolean>(false)
  const { chatContext } = useContext(ChatContext)
  const { setLastMessage } = useContext(MessagesContext)
  if (chatContext.id !== 'scan') return null

  return (
    <div className="image-scanner">
      {scanning ? (
        <div className="scanner-container">
          <button onClick={() => setScanning(false)} className="close-scanner">
            <Close />
          </button>
          <QrScanner
            onDecode={(result) => {
              setScanning(false)
              setLastMessage({ from: 'bot', content: result })
            }}
            onError={() => null}
          />
        </div>
      ) : null}
      <button
        className={`scan${scanning ? ' hidden' : ''}`}
        onClick={() => setScanning(true)}
      >
        <Camera />
      </button>
    </div>
  )
}
