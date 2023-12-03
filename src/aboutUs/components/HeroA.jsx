import React from 'react'
import Navbar from '../../components/Navbar'
import Cart from '../../components/Cart'
import ReactPlayer from 'react-player'
import vedio from '../../assets/video/ch.mp4'

const HeroA = () => {
  return (
    <div>
        <section>
        <div className='max-w-[100%]'>
                <ReactPlayer url={vedio}
                
                light={true}
                loop={true}
                controls={true} width="100%" height={`80vh`}
                />
            </div>
        </section>
    </div>
  )
}

export default HeroA