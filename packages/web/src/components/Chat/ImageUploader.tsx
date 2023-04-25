import { useContext } from 'react'
import './styles/ImageUploader.css'
import { ChatContext, MessagesContext } from '..'

export const ImageUploader = () => {
  const { chatContext } = useContext(ChatContext)
  const { setLastMessage } = useContext(MessagesContext)
  if (chatContext.id !== 'read') return null

  const handleUploadImage = (file: File) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () =>
      setLastMessage({ from: 'user', imageUrl: fileReader.result?.toString() })

    fileReader.onerror = () => {
      setLastMessage({
        from: 'bot',
        content: 'Erro ao ler a imagem'
      })
    }
  }
  return (
    <form className="image-uploader">
      <label htmlFor="image">Solte a imagem ou clique aqui</label>
      <input
        type="file"
        title="Coloque a image aqui"
        className="dropzone"
        id="image"
        accept="image/*"
        aria-hidden
        onChange={(e) => {
          e.preventDefault()
          const [file] = e.target.files!

          handleUploadImage(file)
        }}
      />
    </form>
  )
}
