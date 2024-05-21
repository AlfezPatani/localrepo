import QRCode from "qrcode.react"
import style from "./QRCodeGenrator.module.css"

const QRCodeGenrator = ({value}) => {
  return (
    <div className={style.container}>
      <QRCode value={value} size={300}/>
    </div>
  )
}

export default QRCodeGenrator
