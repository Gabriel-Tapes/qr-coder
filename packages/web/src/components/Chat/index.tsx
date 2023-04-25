import { useState, useEffect, useContext } from 'react'
import { Header } from './Header'
import { Prompt } from './Prompt'
import { Messages } from './Messages'
import { ImageUploader } from './ImageUploader'
import { ImageScanner } from './ImageScanner'
import { LastMessageProps, MessagesContext, ShowingContext } from '..'
import QrScanner from 'qr-scanner'
import './styles/Chat.css'

export const Chat = () => {
  const { showing } = useContext(ShowingContext)
  const [lastMessage, setLastMessage] = useState<LastMessageProps>({
    from: 'bot'
  })

  const handleResponse = async () => {
    const { imageUrl, content } = lastMessage
    if (imageUrl) {
      try {
        const imageDecoded = (
          await QrScanner.scanImage(imageUrl, {
            returnDetailedScanResult: true
          })
        ).data
        return setLastMessage({ from: 'bot', content: imageDecoded })
      } catch (err) {
        return setLastMessage({
          from: 'bot',
          content: `Erro ao ler o QR Code: ${err}`
        })
      }
    } else if (content)
      return setLastMessage({ from: 'bot', content, svg: true })

    return setLastMessage({ from: 'bot' })
  }

  useEffect(() => {
    if (lastMessage.from === 'user') handleResponse()
  }, [lastMessage])

  return (
    <div className={`chat${showing === 'chat' ? ' show' : ''}`}>
      <Header />
      <MessagesContext.Provider value={{ lastMessage, setLastMessage }}>
        <Messages />
        <Prompt />
        <ImageUploader />
        <ImageScanner />
      </MessagesContext.Provider>
    </div>
  )
}
