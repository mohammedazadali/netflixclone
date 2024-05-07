import React from 'react'
import './Footer.css'
import twitter from '../../Assest/twitter_icon.png'
import youtube from '../../Assest/youtube_icon.png'
import instagram from '../../Assest/instagram_icon.png'
import facebook from '../../Assest/facebook_icon.png'

function Footer() {
    const data = new Date()
    let date = data.getFullYear()
    
  return (
    <footer>
        <div className="footer_icon">
            <img src={twitter} />
            <img src={youtube} />
            <img src={instagram} />
            <img src={facebook} />
        </div>
        <ul className="footer_links">
            <li className="footer_link">Audio Description</li>
            <li className="footer_link">Help Center</li>
            <li className="footer_link">Gift Card</li>
            <li className="footer_link">Media Center</li>
            <li className="footer_link">Investor Relations</li>
            <li className="footer_link">Jobs</li>
            <li className="footer_link">Terms of Use</li>
            <li className="footer_link">Privacy</li>
            <li className="footer_link">Legal Notices</li>
            <li className="footer_link">Cookie Preference</li>
            <li className="footer_link">Corporate Information</li>
            <li className="footer_link">Contact Us</li>
        </ul>
        <p className='copy'>&copy; {date} By Netflix_Clone_By_Brick</p>
    </footer>
  )
}

export default Footer