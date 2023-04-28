import { ReactComponent as DownloadIcon } from '@/assets/download-icon.svg'
import './styles/DownloadBar.css'

interface DownloadBarProps {
  url: string
}

export const DownloadBar = ({ url }: DownloadBarProps) => {
  return (
    <div className="download">
      <label htmlFor="formats">Formato: </label>
      <select className="formats" id="formats" defaultValue="svg">
        <option value="svg">SVG</option>
      </select>
      <a className="download" href={url} download={`qrcode`}>
        <DownloadIcon />
      </a>
    </div>
  )
}
