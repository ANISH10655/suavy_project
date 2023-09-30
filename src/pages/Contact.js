import React from 'react'
import mobile from '../assets/mobile.png';
import contact from "../assets/contacf image.jpg";
import geo from '../assets/geo.png';
import gmail from '../assets/gmail (1).png';
import cus from '../assets/cus.png';
import Last from '../components/Last';
const Contact = () => {
  return (
    <div>
      <div className="flex w-full h-[1000px]">
        <div className='w-[39%] mt-[3%] ml-[9%]  flex flex-col relative h-[950px]'>
          <img className ="animate__animated wow animate__fadeInTopLeft" src={contact}></img>
          <div className='flex flex-col h-[400px] outline  mr-[30%] absolute w-full mt-[82%] bg-black text-white gap-2 rounded-lg animate__animated wow animate__fadeInBottomLeft'>
            <div className='text-yellow-400 text-center mt-3 text-2xl font-serif'>
              <h1>Call Us</h1>
            </div>
            <div className='flex gap-1'>
              <div className='w-[10%] ml-[26%]'>
                <img src={mobile}></img>
              </div>
              
              <div className='mt-3 text-xl'>
                <p>+91 6206901672</p>
              </div>
            </div>
            <p className='text-center text-2xl text-yellow-400 font-serif'>Location</p>
            <div className='flex'>
            
                <img className='h-[15%] mt-3 ml-[9%]' src={geo} alt="geo"></img>
              
             
              <p className='p-[11%] -mt-16 text-[19px]'>Registered. Office - A/6 Uttarayan, Sarani, North Nowadapara, Kolkata, Parganas North,West Bengal, India - 700057</p>
            </div>

            <p className='text-center text-2xl -mt-36 text-yellow-400 font-serif'>Email</p>

            <div className='flex'>
              <img className='w-[7%] ml-[20%]' src={gmail}></img>
              <p className='text-center ml-12 text-xl font-serif'>suavytechnologies@gmail.com</p>
            </div>
              
            
        </div>

        

        </div>

        <div className='flex flex-col h-[700px] w-[40%]  ml-24 mt-[12%] gap-3'>
          <div className=' w-[40%] ml-[23%] animate__animated wow'>
            <img src={cus}></img>
          </div>
          
          <form action="https://formspree.io/f/mvojoyzq"
               method="POST" className= 'flex flex-col gap-16 border-8 justify-center py-6 px-9 rounded-lg animate__animated wow animate__slideInUp'>
               <label className='flex flex-col gap-1'>
                 <p className='text-[1.5rem] text-black mb-1 leading-[1.375rem] ml-4 font-serif'>
                Name<sup className='text-red-800'>*</sup>
            </p>
             
                <input 
                required
                type="text"
                placeholder="Enter your name"
                  name="name"
                  autoComplete='off'
                className='bg-white rounded-[0.5rem] ml-3 text-black w-[60%] p-[12px] border-2 border-black'
                />
            </label>
            
             <label className='flex flex-col gap-1'>
                 <p className='text-[1.5rem] text-black mb-1 leading-[1.375rem] ml-4 font-serif'>
                Mobile no<sup className='text-red-800'>*</sup>
            </p>
             
                <input 
                required
                type="text"
                pattern="[789][0-9]{9}"
                autoComplete='off'
                  title="Please enter valid phone number"
                placeholder="Enter your Mobile Number"
                  name="tel"
                className='bg-white rounded-[0.5rem] ml-3 text-black w-[60%] p-[12px] border-2 border-black'
                />
            </label>

            <label className='flex flex-col gap-1'>
                 <p className='text-[1.5rem] text-black mb-1 leading-[1.375rem] ml-4 font-serif'>
                Email<sup className='text-red-800'>*</sup>
            </p>
             
                <input 
                required
                type="email"
                  placeholder="Enter your email"
                   
                  name="email"
                  
                  autoComplete='off'
                  
                className='bg-white rounded-[0.5rem] ml-3 text-black w-[60%] p-[12px] border-2 border-black'
                />
            </label>
            <label className='flex flex-col gap-1'>
                 <p className='text-[1.5rem] text-black mb-1 leading-[1.375rem] ml-4 font-serif'>
                Ask your query
              </p>
               <textarea 
                  
                
                
                placeholder="Enter your message"
                  name="textarea"
                  autoComplete='off'
                  
                className='bg-white rounded-[0.5rem] ml-3 text-black w-[60%] p-[12px] border-2 border-black'
                />
              </label>
            
            <button className='bg-yellow-400 rounded-[8px] w-[60%] h-10 font-medium px-6 py-2 -mt-8  text-black text-xl text-center '>
            Send Message
        </button>
          </form>
        </div>
        
      </div>
      
      <Last></Last>
    </div>
  )
}

export default Contact
