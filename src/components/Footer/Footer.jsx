import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facbook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facbook_icon } alt="" />
      </div>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>This line is large line</li>
        <li>Cookie Policy</li>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>@2024-3000 Netflix , Inc.</p>
    </div>
  )
}

export default Footer