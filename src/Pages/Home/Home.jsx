import React from 'react'
import './Home.css'
import pro from '../../Assest/hero_title.png'
import Card from '../../Component/Card/Card'
import play from '../../Assest/play_icon.png'
import info from '../../Assest/info_icon.png'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import background from '../../Assest/hero_banner.png'

function Home() {
  return (
    <section className="home_page">
        <div className="home_content">
           <Navbar/>
          <div className="hero">
          <img src={background} className='back' />
            <div className="protector">
                <img src={pro} className='pro_img'/>
                <p className='para'> Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                <div className="hero_btn">
                    <button className='play'>
                        <img src={play} />Play Now
                    </button>
                    <button className='info'>
                        <img src={info} /> More Info
                    </button>
                </div>
                <Card/>
            </div>
          </div>
        </div>
       <div className="more_card">
        <Card title={"Blockbuster Movie"} category={"top_rated"}/>
        <Card title={"Only on Netflix"} category={"popular"}/>
        <Card title={"UpComming Movies"} category={"upcoming"}/>
        <Card title={"Top Movies for You"} category={"top_rated"}/>
       </div>
       <Footer/>
    </section>
  )
}

export default Home