import { QrScanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import './styles/ImageScanner.css'
import { ReactComponent as Camera } from '@/assets/chat-camera-icon.svg'
import { ReactComponent as Close } from '@/assets/chat-close-icon.svg'

interface ImageScannerProps {
  hidden: boolean
  onSend(image: {
    from: 'user' | 'bot'
    content?: string
    imageUrl?: string
    svg?: boolean
  }): void
}

export const ImageScanner = ({ hidden, onSend }: ImageScannerProps) => {
  if (hidden) return null

  const [scanning, setScanning] = useState<boolean>(false)

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
              onSend({ from: 'bot', content: result })
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
