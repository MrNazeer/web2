import React from 'react'
import "./Footer_style/Style.scss"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



export  function Footer() {
  return (
    <div className='footer'>
        <div className='container-fluid'>
        <div className='wrap'>
            <p className='text1'>2023 by VOID. Proudly created with Wix.com</p>
            <p className='text2'>VOID</p>
            <div className='icons'>
                <div><FaInstagram /></div>
                <div><FaFacebookF /></div>
            </div>
        </div>
        </div>   
    </div>
  )
}
