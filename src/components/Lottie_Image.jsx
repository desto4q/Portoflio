import Lottie, { LottiePlayer } from 'lottie-react'
import React from 'react'
import mail from "../public/mail.json"
function Lottie_Image() {
  return (
    <div className="lottie_image">
        <Lottie animationData={mail}/>
    </div>
  )
}

export default Lottie_Image