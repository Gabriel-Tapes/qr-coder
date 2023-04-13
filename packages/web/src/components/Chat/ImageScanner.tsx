import { QrScanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import './styles/ImageScanner.css'

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
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              fill="currentColor"
              enableBackground="new 0 0 24 24"
              xmlSpace="preserve"
            >
              <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
            </svg>
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
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          className=""
          version="1.1"
          x="0px"
          y="0px"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M21.317,4.381H10.971L9.078,2.45C8.832,2.199,8.342,1.993,7.989,1.993H4.905 c-0.352,0-0.837,0.211-1.078,0.468L1.201,5.272C0.96,5.529,0.763,6.028,0.763,6.38v1.878c0,0.003-0.002,0.007-0.002,0.01v11.189 c0,1.061,0.86,1.921,1.921,1.921h18.634c1.061,0,1.921-0.86,1.921-1.921V6.302C23.238,5.241,22.378,4.381,21.317,4.381z  M12.076,18.51c-3.08,0-5.577-2.497-5.577-5.577s2.497-5.577,5.577-5.577s5.577,2.497,5.577,5.577 C17.654,16.013,15.157,18.51,12.076,18.51z M12.076,9.004c-2.17,0-3.929,1.759-3.929,3.929s1.759,3.929,3.929,3.929 s3.929-1.759,3.929-3.929C16.004,10.763,14.245,9.004,12.076,9.004z"
          ></path>
        </svg>
      </button>
    </div>
  )
}
