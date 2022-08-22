import React from 'react'
import './Footer.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footerContainer">
        <div className="footerLeft">
            <h1><span className='text-[#6e6e6e]'>Karki</span>Sahakarki</h1>
            
            <div className='footerLeftContain'>
                <p className='pt-5 pl-1 pb-5 pr-1   '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                
            </div>
        </div>
        <div className="footerMiddle">
            <div className="footerMiddleLeft">
                <h3>Quick Links</h3>
                <ul>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                
                </ul>
            </div>
            <div className="footerMiddleRight">
                <h3>Our Services</h3>
                <ul>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                    <li>Links Required</li>
                </ul>
            </div>
        </div>
        <div className="footerRight">
            <h3>Our New Products</h3>
            <p>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    : Pulchowk, Lalitpur
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    : +977-9812-995684
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    : info@somemail.com
                </p>
            
        </div>
    </div>
  )
}

export default Footer