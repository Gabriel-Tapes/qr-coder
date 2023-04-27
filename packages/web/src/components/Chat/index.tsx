import { useState, useEffect, useContext } from 'react'
import { Header } from './Header'
import { Prompt } from './Prompt'
import { Messages } from './Messages'
import { ImageUploader } from './ImageUploader'
import { ImageScanner } from './ImageScanner'
import { LastMessageProps, MessagesContext, ShowingContext } from '..'
import { decodeQrCode, generateQrCode } from 'core'
import './styles/Chat.css'

export const Chat = () => {
  const { showing } = useContext(ShowingContext)
  const [lastMessage, setLastMessage] = useState<LastMessageProps>({
    from: 'bot'
  })

  const handleResponse = async () => {
    const { imageUrl, content } = lastMessage
    if (imageUrl) {
      const imageDecoded = await decodeQrCode(imageUrl)
      return setLastMessage({ from: 'bot', content: imageDecoded })
    } else if (content)
      return setLastMessage({ from: 'bot', imageUrl: generateQrCode(content) })

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
