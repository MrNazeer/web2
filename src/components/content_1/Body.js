import React from 'react'
import "./style/_body.scss"
export  function Body() {
  return (
    <div className="container">
      <div className='content_1'>
            <img src={require('./img.webp')} alt="img" className='body_img'/>      
          <div className='cont-text'>
            <div className='cont_text_1'>
              <div className='text1'>FEATURED STORY</div>
            </div>
            <div className='cont_text_2'>
              <div className='text2'>Jul 18 . 2 min</div>
              <div className='text3'>A SURREAL CONCREATE DREAM</div>
            </div>
          </div>
      </div>
    </div>
  )
}
