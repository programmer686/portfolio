import React from 'react'
import styles from "./Footer.module.css"


function Footer() {
  return (
    <html>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>               
      </head>
    <div className={styles.main}>
      <p className={styles.findme}>Find me anywhere at <span>programmer686</span></p>
      <div>
      <a href="https://github.com/programmer686" target="_blank" rel="noreferrer"><i className='fa fa-github fa-3x '></i></a>
      <a href="https://github.com/programmer686" target="_blank" rel="noreferrer"><i className='fa fa-envelope fa-3x'></i> </a>
      <a href="https://github.com/programmer686" target="_blank" rel="noreferrer"> <i className='fa fa-instagram fa-3x'></i>  </a>
      </div>
    </div>
    </html>
    
  )
}

export default Footer