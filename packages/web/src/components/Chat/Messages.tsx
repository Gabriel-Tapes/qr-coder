import { useContext, useEffect, useRef, useState } from 'react'
import { ImageViewerContext, MessagesContext } from '..'
import './styles/Messages.css'
import background from '@/assets/background.svg'

export const Messages = () => {
  const { lastMessage } = useContext(MessagesContext)
  const { setImageViewerContext } = useContext(ImageViewerContext)
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
      {contents.map(({ from, content, imageUrl }, index) => {
        if (!content && !imageUrl) return null

        return (
          <div className={`message ${from}`} key={index}>
            {imageUrl ? (
              <img
                src={imageUrl}
                className="image"
                onClick={() =>
                  setImageViewerContext({ showing: true, url: imageUrl })
                }
              />
            ) : (
              <p>{content}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
