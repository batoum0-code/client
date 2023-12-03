import React, { useState } from 'react';
import './Gallery.css'
import AboutTitle from './AboutTitle';
import ReactPlayer from 'react-player';
import vedio from '../../assets/video/ch1.mp4'


import { photosGallery } from '../../data/data';
import { FaWindowClose } from 'react-icons/fa';

const Gallery = () => {
  
  const [ model , setModel ] =useState(false)
  const [ tempImg , setTempImg] = useState('');
  const getImg = (url) => {
    console.log('ok');
    setTempImg(url);
    setModel(true);
  }

  console.log(tempImg);
  return (
    <section className='w-full'>
      <AboutTitle title="Gallery"/>
      <div className={ model ? " model open " : "model"}>
          <img src={tempImg} alt="image" />
          <FaWindowClose className='sv' onClick={()=> setModel(false)}/>
        </div>
        

        <div className='flex bg-bSlight px-8'>
        <div className='max-w-[100%]'>
                <ReactPlayer url={vedio}
                playing={true}
                muted={true}
                loop={true}
                controls={false} width="auto" height="auto"
                />
            </div>
            <div className='max-w-[100%]'>
                <ReactPlayer url={vedio}
                playing={true}
                muted={true}
                loop={true}
                controls={false} width="60%" height="auto"
                />
            </div>

        </div>


        <div className='gallery bg-gradient-to-b from-bSlight to-bSteal '>
          {
            photosGallery?.map( (item , index)=> {
              return ( 
                <div className="pics" key={index} 
                >
                  <img src={item.img} alt={`image`} onClick={()=>getImg(item.img)} />
                </div>
              )
            })
          }
        </div>


        <div className='flex  bg-bSprimary px-8'>
        <div className='max-w-[100%]'>
                <ReactPlayer url={vedio}
                playing={true}
                muted={true}
                loop={true}
                controls={false} width="auto" height="auto"
                />
            </div>
            <div className='max-w-[100%]'>
                <ReactPlayer url={vedio}
                playing={true}
                muted={true}
                loop={true}
                controls={false} width="60%" height="auto"
                />
            </div>

        </div>



        <div className='gallery bg-gradient-to-b from-bSprimary to-bSlight '>
          {
            photosGallery?.map( (item , index)=> {
              return ( 
                <div className="pics" key={index} 
                >
                  <img src={item.img} alt={`image`} onClick={()=>getImg(item.img)} />
                </div>
              )
            })
          }
        </div>

        

    </section>
  )
}

export default Gallery