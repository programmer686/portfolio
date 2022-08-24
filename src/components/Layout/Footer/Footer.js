import React from 'react'
import styles from "./Footer.module.css"
let email = "programmer686@gmail.com"

function Footer() {
  const copyClipboard = () => {
    navigator.clipboard.writeText(email);

    alert("Email copied to clipboard")
  }
  return (
    <html>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>               
      </head>
    <div className={styles.main}>
      <p className={styles.findme}>Find me anywhere at <span>programmer686</span></p>
      <div>
      <a href="https://github.com/programmer686" target="_blank" rel="noreferrer"><i className='fa fa-github fa-3x icons'></i></a>
      <button onClick={() => copyClipboard()}><i className='fa fa-envelope fa-3x icons'></i> </button>
      <a href="https://www.facebook.com/profile.php?id=100084364404347" target="_blank" rel="noreferrer"> <i className='fa fa-facebook fa-3x icons'></i>  </a>
      </div>
    </div>
    </html>
    
  )
}

export default Footer