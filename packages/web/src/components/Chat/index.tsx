import { useState, useEffect, useContext } from 'react'
import { Header } from './Header'
import { Prompt } from './Prompt'
import { Messages } from './Messages'
import { ImageUploader } from './ImageUploader'
import { ImageScanner } from './ImageScanner'
import { ChatContext, MessagesContext, ShowingContext } from '..'
import QrScanner from 'qr-scanner'
import './styles/Chat.css'

interface ChatProps {
  setShowing: ({ showing }: { showing: 'menu' | 'chat' }) => void
}

export const Chat = ({ setShowing }: ChatProps) => {
  const context = useContext(MessagesContext)
  const [lastMessage, setLastMessage] = useState<typeof context>(context)
  const currentContext = useContext(ChatContext)

  const handleResponse = async () => {
    if (lastMessage.imageUrl && lastMessage.from === 'user') {
      try {
        const imageDecoded = (
          await QrScanner.scanImage(lastMessage.imageUrl, {
            returnDetailedScanResult: true
          })
        ).data
        console.log(imageDecoded)
        setLastMessage({ from: 'bot', content: imageDecoded })
      } catch (err) {
        setLastMessage({
          from: 'bot',
          content: `Erro ao ler o QR Code: ${err}`
        })
      }
    } else
      setLastMessage(({ content }) => {
        if (content) return { from: 'bot', content, svg: true }
        return {
          from: 'bot'
        }
      })
  }

  useEffect(() => {
    if (lastMessage.from === 'user') handleResponse()
  }, [lastMessage])

  return (
    <ShowingContext.Consumer>
      {({ showing }) => (
        <div className={`chat${showing === 'chat' ? ' show' : ''}`}>
          <Header setShowing={setShowing} />
          <MessagesContext.Provider value={lastMessage}>
            <Messages />
            <Prompt
              onSend={setLastMessage}
              hidden={currentContext.id !== 'create'}
            />
            <ImageUploader
              onSend={setLastMessage}
              hidden={currentContext.id !== 'read'}
            />
            <ImageScanner
              onSend={setLastMessage}
              hidden={currentContext.id !== 'scan'}
            />
          </MessagesContext.Provider>
        </div>
      )}
    </ShowingContext.Consumer>
  )
}
