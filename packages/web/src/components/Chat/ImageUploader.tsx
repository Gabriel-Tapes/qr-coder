import './styles/ImageUploader.css'

interface ImageUploaderProps {
  hidden: boolean
  onSend(image: {
    from: 'user' | 'bot'
    content?: string
    imageUrl?: string
    svg?: boolean
  }): void
}

export const ImageUploader = ({ hidden, onSend }: ImageUploaderProps) => {
  if (hidden) return null

  const handleUploadImage = (file: File) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () =>
      onSend({ from: 'user', imageUrl: fileReader.result?.toString() })

    fileReader.onerror = () => {
      onSend({
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
        className="dropzone"
        id="image"
        accept="image/*"
        onChange={(e) => {
          e.preventDefault()
          const [file] = e.target.files!

          handleUploadImage(file)
        }}
      />
    </form>
  )
}
