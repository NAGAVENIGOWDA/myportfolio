
import { useState } from "react"
import "./contact.scss"
function Contact() {
const [msg,setMsg]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setMsg(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"/>
          <textarea  placeholder="Message"></textarea>
          <button type="Submit">Send</button>
          {msg && <span>Thanks,I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact
