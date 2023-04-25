import { useContext, useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code'
import { MessagesContext } from '..'
import './styles/Messages.css'
import background from '@/assets/background.svg'

export const Messages = () => {
  const { lastMessage } = useContext(MessagesContext)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const [contents, setContents] = useState<(typeof lastMessage)[]>([])

  useEffect(() => {
    if (lastMessage) setContents((contents) => [...contents, lastMessage])
    if (lastMessage.content === '/clear') setContents([])
  }, [lastMessage])

  useEffect(() => {
    const messages = messagesContainerRef.current

    if (messages)
      messages.scrollTop = messages.scrollHeight - messages.clientHeight
  }, [contents])

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="messages"
      ref={messagesContainerRef}
    >
      {contents.map(({ from, content, imageUrl, svg }, index) => {
        if (!content && !imageUrl && !svg) return null
        else
          return (
            <div className={`message ${from}`} key={index}>
              {content ? (
                svg ? (
                  <QRCode className="image" value={content} />
                ) : (
                  <p>{content}</p>
                )
              ) : imageUrl ? (
                <img src={imageUrl} className="image" />
              ) : null}
            </div>
          )
      })}
    </div>
  )
}
