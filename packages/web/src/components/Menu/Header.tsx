import './styles/Header.css'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'

export const Header = () => {
  return (
    <div className="functions-header">
      <Logo className="icon" />
      QR Coder
    </div>
  )
}
