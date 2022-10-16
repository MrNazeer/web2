import React from 'react'
import "./style/_c4_style.scss"

export  function Content4() {
  return (
    <div className='container'>
        <div className='wrap'>
            <div className='head'>MOST POPULAR</div>
            <div className='body'>
                <div className="cont">
                    <img src={require('./img1.webp')} alt="img" />
                    <p className='date'>Jul 18 . 2 min</p>
                    <p className='title'>FETCH FESTIVAL BRLN 2023</p>
                    <p className='text'>See the full program for the upcoming festival. Early bird tickets are on sale now.</p>
                </div>
                <div className="cont">
                    <img src={require('./img2.webp')} alt="img" />
                    <p className='date'>Jul 18 . 2 min</p>
                    <p className='title'>365 DAYS. 365 FRAMES.</p>
                    <p className='text'>What can we learn from Matthew Soja’s latest work? Shots from the same location in Oslo for one whole...</p>
                </div>
                <div className="cont">
                    <img src={require('./img3.webp')} alt="img" />
                    <p className='date'>Jul 18 . 2 min</p>
                    <p className='title'>20 MUSEUMS YOU SHOULD VISIT AT LEAST ONCE</p>
                    <p className='text'>The full list includes 10 cities in 8 different countries.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
