import { useContext } from 'react'
import { ImageViewerContext } from '..'
import { ReactComponent as CloseIcon } from '@/assets/chat-close-icon.svg'
import './styles/ImageViewer.css'
import { DownloadBar } from './DownloadBar'

export const ImageViewer = () => {
  const { imageViewerContext, setImageViewerContext } =
    useContext(ImageViewerContext)

  if (!imageViewerContext.showing) return null
  return (
    <div className="image-viewer show">
      <button
        className="close"
        onClick={() => setImageViewerContext({ showing: false, url: '' })}
      >
        <CloseIcon />
      </button>
      <img src={imageViewerContext.url} alt="qr code" />
      <DownloadBar url={imageViewerContext.url} />
    </div>
  )
}
