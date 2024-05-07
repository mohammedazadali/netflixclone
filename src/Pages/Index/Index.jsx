import React from 'react'
import logo from '../../Assest/logo.png'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tv from '../../Assest/tv.png'
import profile from '../../Assest/profile_2.png'
import mobile from '../../Assest/mobile.jpg'
import poster from '../../Assest/poster.jpg'
import download from '../../Assest/Download_Clockwise.gif'
import device from '../../Assest/device_video.gif'
import './Index_.css'
import { Link } from 'react-router-dom'
function Index() {
  return (

    <div className="Index_page">
        <div className="section1">
            <div className="index_nav">
                <img src={logo} className="logo" />
                <div className="index_nav_left">
                    <select name="" id="" >
                        
                        <option value="English">English</option>
                        <option value="hindi">हिंदी</option>
                    </select>
                    <Link to='/login'><button className='Signup_index' >Sign Up</button></Link>
                </div>
            </div>

            <div className="index_hero">
                <h1>Unlimited movies, TV shows and more</h1>
                <span>Watch anywhere. Cancel anytime.</span>
                <p>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
                <div className="input_index">
                    <input type="text" placeholder='Email or mobile number' />
                    <button className='Signup_index'>Get started <FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
            </div>


            <section className="section1_index">
                <div className="section1_left">
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="section1_right">
                        <img src={tv} />
                </div>
            </section>



            <section className="section2_index">
                <div className="section2_left">
                        <img src={mobile} />
                        <div className="download">
                            <img src={poster} className='poster'/>
                            <p>Downloding..</p>
                            <img src={download} className='download_ani' />
                        </div>
                </div>
                <div className="section2_right">
                        <h1>Download your shows to watch offline</h1>
                        <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </section>



            <section className="section3_index">
                <div className="section3_left">
                    <h1>Watch everywhere</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="section3_right">
                    <img src={device} />
                </div>
            </section>


           <section className="section4_index">
                <div className="section4_left">
                    <img src={profile} />
                </div>
                <div className="section4_right">
                    <h1>Create profiles for kids</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
           </section>



           <section className="faq">
            <h1>Frequently Asked Questions</h1>
           </section>
        </div>
    </div>
  )
}

export default Index