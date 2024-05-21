import QRCodeGenrator from "./QRCodeGenrator"

const QR = () => {
    const uri = "https://0a6a-2409-40c1-4030-7148-197a-6d3c-5ca7-ef80.ngrok-free.app"
  return (
      <QRCodeGenrator value={uri} />
  )
}

export default QR
