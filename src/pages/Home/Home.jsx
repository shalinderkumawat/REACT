import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_titel from '../../assets/hero_title.png'
import Play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitelCards from '../../components/TitelCards/TitelCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'> 
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />

          <div className="hero_caption">
            <img src={hero_titel} alt="" className='caption-img'/>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing </p> */}
          
            <div className="hero-btns">
              <button className='btn'><img src={Play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>

          </div>

          <TitelCards/>
          

      </div>
      <div className="more-cards">
        <TitelCards title={"Blockbuster Moviess"} />
        <TitelCards title={"Only in Netflix"} category={"popular"}/>
        <TitelCards title={"Upcoming"} category={"upcoming"}/>
        <TitelCards title={"This is Nice"}/>

      </div>
      <Footer/>
    </div>
  )
}

export default Home