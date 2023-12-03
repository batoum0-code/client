import React from 'react'
import {FaFacebook ,FaInstagram , FaTwitter , FaWhatsapp} from 'react-icons/fa'
import { FcLike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
// import products photos 
import pro1 from '../../assets/pro1.jpg'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.jpg'
import pro4 from '../../assets/pro4.jpg'
import pro5 from '../../assets//pro5.jpg'
import pro6 from '../../assets//pro6.jpg'
import pro7 from '../../assets//pro7.jpg'
import pro8 from '../../assets//pro8.jpg'


const AboutFooter = () => {

  const navigate = useNavigate();

  return (
    <section className='bg-gradient-to-l from-bSdenim to-dark text-bSlight px-7'>
        <div className='nike-container xsm:max-w-[330px]'>
        <div className='flex justify-center items-center pt-9 pb-14 nike-container'>
            <div className='tracking-widest font-serif font-bold text-[60px] text-bSlight animate-pulse xl:text-[30px] '>
              <span className='tracking-widest font-serif font-bold text-[60px] text-bSorange animate-pulse xl:text-[30px] '>CH</span>ERTI</div>
        </div>
        
        <div className='grid grid-cols-3 gap-[10rem] justify-center-center  nike-container xl:grid-cols-1 sm:w-[360px] sm:items-start '>
          <div >
            <h2 className='font-serif font-normal text-[25px] pb-1 pl-5 border-l-[3px] border-bSorange w-[99px] sm:w-[100px] rounded-sm tracking-wider'>Plus  </h2>
            <p className='pt-9 sm:w-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum quibusdam blanditiis 
              quasi, quidem, temporibus in quos libero unde soluta reiciendis? Tempora, id. Voluptatum placeat et
              ex exercitationem ullam aspernatur.</p>
              <div className='flex justify-start pt-5 gap-4'>
                  <a href="https://www.facebook.com/chertichaussures">
                  <FaFacebook className='text-bSlight text-[35px] hover:text-blue-500 hover:scale-125 transform duration-200 rounded-none'/>
                  </a>
                  
                  <a href="https://www.instagram.com/chertichaussures/">
                    <FaInstagram  className='text-bSlight text-[35px] hover:text-red-400 hover:scale-125 transform duration-200 rounded-none'/>
                  </a>
                  
                  <a href="">
                  <FaWhatsapp  className='text-bSlight text-[35px] hover:text-green-600 hover:scale-125 transform duration-200 rounded-none'/>
                  </a>
                  < FaTwitter className='text-bSlight text-[35px] hover:text-blue-800 hover:scale-125 transform duration-200 rounded-none cursor-pointer'/>

                </div>
          </div>

          <div>
          <h2 className='font-serif font-normal text-[25px] pl-5 pb-1 border-l-[3px] border-bSorange w-[99px] rounded-sm tracking-wider'>Cordonnés  </h2>
          <div className='pt-9 sm:w-[300px]'>
            <ul>
              <li className='py-1'>Télé : +212 6661-364188</li>
              
              <li className='py-1'>Address : Ave Allal Ben Abdellah à coté de Café (The Lost Fès) , Fès</li>
              
              <li className='py-1'>Fax : 9439849843</li>
              
            </ul>
          </div>
          </div>
          <div>
          <h2 className='font-serif font-normal text-[25px] pb-1 pl-5 border-l-[3px] border-bSorange w-[99px]  rounded-sm tracking-wider'>Produits</h2>
          <div className='grid grid-cols-4 gap-6 pt-8 sm:grid-cols-3 sm:gap-2'>

            <img src={pro1} alt="" className='max-w-[50px] rounded-md cursor-pointer' onClick={()=> navigate('/products/men')}/>
            <img src={pro7} alt="" className='max-w-[50px] rounded-md cursor-pointer' onClick={()=> navigate('/products/men')}/>
            <img src={pro3} alt="" className='max-w-[50px] rounded-md cursor-pointer' onClick={()=> navigate('/products/men')}/>
            <img src={pro8} alt="" className='max-w-[50px] rounded-md cursor-pointer' onClick={()=> navigate('/products/men')}/>
            <img src={pro5} alt="" className='max-w-[50px] rounded-md cursor-pointer' onClick={()=> navigate('/products/men')}/>
            <img src={pro6} alt="" className='max-w-[50px] rounded-md cursor-pointer' onClick={()=> navigate('/products/men')}/>

          </div>
          </div>

        </div>
      
    <div className='nike-container flex flex-col justify-center items-center pt-[5rem]'>
    
    <div className='w-[100%] bg-slate-400 h-[0.1px] rounded-3xl'></div>
        <div className='text-base py-6 sm:flex sm:flex-col sm:justify-center sm:items-center flex gap-1 items-center justify-center'>
        <span >Designed And Developed With </span><FcLike/><span className='text-bSorange text-[12px] font-sansfont-semibold tracking-wider'>By BATOUM Samir</span>
        
        </div>
    </div>
        </div>
    </section>
  )
}
export default AboutFooter