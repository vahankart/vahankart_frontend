// import { dividerClasses } from '@mui/material'
import React from 'react'
import './Footer.css'
import logoImg from './images/logo.png'
import facebook from './images/facebook-logo.png'
import twitter from './images/twitter-logo.png'
import instagram from './images/instagram-logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="logoName f-grid">
                <img src={logoImg} alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia voluptatem quos expedita rerum recusandae ducimus ratione sit nostrum id modi qui laudantium, alias possimus quod a libero iusto nihil.</p>
            </div>
            <div className="socials f-grid">
                <div className="facebook">
                    <img src={facebook} alt="" />
                    <a href="#">Facebook</a>
                </div>
                <div className="twitter">
                    <img src={twitter} alt="" />
                    <a href="#">Twitter</a>
                </div>
                <div className="instagram">
                    <img src={instagram} alt="" />
                    <a href="#">Instagram</a>
                </div>
            </div>
            <div className="contact f-grid">
                <a href="">Subscribe to our newsletterr</a>
                <div className="email">
                    <input type="email" name="email" id="" placeholder="Email Address"/>
                    <button className="okBtn">OK</button>
                </div>
            </div>
            <div className="info f-grid">
                <a href="">Subscribe to our newsletter</a>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolorem voluptas tenetur cupiditate est omnis dolores porro totam et asperiores.</p>
            </div>
        </div>
    )
}

export default Footer