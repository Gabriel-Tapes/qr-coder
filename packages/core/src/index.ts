import QrScanner from 'qr-scanner'
import QrCode from 'qrcode-svg'

export const generateQrCode = (text: string) => {
  const qr = new QrCode({
    content: text,
    padding: 0
  }).svg()
  const blob = new Blob([qr], { type: 'image/svg+xml' })

  return URL.createObjectURL(blob)
}

export const decodeQrCode = async (url: string) => {
  try {
    return (await QrScanner.scanImage(url, { returnDetailedScanResult: true }))
      .data
  } catch (err) {
    return `Erro ao ler o qr code: ${err}`
  }
}
