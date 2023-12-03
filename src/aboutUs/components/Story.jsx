import React from 'react'
import AboutTitle from './AboutTitle'
import hand1 from '../../assets/chertiAbout.png'
import hand2 from '../../assets/hand1.jpg'
import { FaFacebook , FaInstagram ,FaTwitter , FaTiktok, FaWhatsapp } from 'react-icons/fa'


const Story = () => {



  return (
    <section className='py-[120px] flex flex-col w-full nike-container'>

        <AboutTitle title={`Notre Histoire`}/>

        <div className='grid grid-cols-2 items-center gap-[3rem] px-14 nike-container md:px-0 md:grid-cols-1 md:items-center md:justify-center lg:grid-cols-1  '>
          
            <div className='grid items-center justify-center'>
            <img src={hand1} alt="img" className='max-w-[500px] max-h-[600px] sm:max-w-[300px] rounded-md '/>
            </div>
            
            <div className='sm:w-[300px] sm:pl-4'>
                <h3 className='text-bSdenim font-semibold text-[40px] uppercase font-serif italic sm:text-[20px]'>à propos de CHERTI</h3>
                <div className='text-bSgray mt-5 '>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem quod mollitia nam expedita, 
                    repellendus fuga quibusdam molestias. 
                    Ea eius ratione tempora dolorem qui corrupti magnam cupiditate soluta quos nam.<br/> <br/> <br/> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure doloremque 
                    cumque itaque blanditiis nihil dolorum qui sapiente facilis officia. 
                    Odio maiores facilis omnis fuga et sint incidunt quaerat. Eligendi.
                </div>
                <div className='flex justify-start pt-5 gap-4'>
                  <a href="https://www.facebook.com/chertichaussures">
                  <FaFacebook className='text-blue-500 text-[35px] hover:scale-125 transform duration-200 rounded-none'/>
                  </a>
                  
                  <a href="https://www.instagram.com/chertichaussures/">
                    <FaInstagram  className='text-red-500 text-[35px] hover:scale-125 transform duration-200 rounded-none'/>
                  </a>
                  
                  <a href="">
                  <FaWhatsapp  className='text-green-500 text-[35px] hover:scale-125 transform duration-200 rounded-none'/>
                  </a>
                  < FaTwitter className='text-blue-800 text-[35px] hover:scale-125 transform duration-200 rounded-none cursor-pointer'/>

                </div>
                
            </div>
            
        </div>

        <div className='w-full h-[240px] mt-[160px] md:h-[600px] md:w-[360px] relative'>

          <img src={hand2} alt="img"  className='w-full h-full '/>


          <div className="absolute top-[50px] left-[100px] right-[100px]">

          <div className='flex flex-row justify-between items-center md:flex-col md:justify-center md:items-center '>
            <div className='flex flex-col justify-center items-center md:justify-center md:items-center'>

              <h3 className='text-[50px] font-serif font-normal mb-4 text-white'>+48293</h3>
              <h4 className='text-[30px] font-serif font-normal text-white'>Client Satisfait</h4>

            </div>
            <div className='flex flex-col justify-center items-center md:justify-center md:items-center'>

              <h3 className='text-[50px] font-serif font-normal mb-4 text-white'>+10</h3>
              <h4 className='text-[30px] font-serif font-normal text-white'>Categories</h4>

            </div>
            < div className='flex flex-col justify-center items-center md:justify-center md:items-center'>

              <h3 className='text-[50px] font-serif font-normal mb-4 text-white'>+293</h3>
              <h4 className='text-[30px] font-serif font-normal text-white'>Team Members</h4>
            
          </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Story