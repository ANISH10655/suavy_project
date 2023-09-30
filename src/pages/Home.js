import React from 'react'

import Last from '../components/Last';

import { Link } from 'react-router-dom';





const Home = () => {
  
  return (
    <div>
      
      <div className='background relative mx-auto'>
        <div className='absolute h-[400px] w-[900px] mx-auto flex flex-col mt-[90px] justify-center items-center gap-3 '>
          <div className='container w-[400px] inline-block'>
            <p className='text-gray-300 text-[90px]  text-center font-thin tracking-widest decoration-4 typing-demo'>SUAVY</p>
          </div>
          
          <p className='text-gray-300 text-[40px] font-bold text-center font-serif animate__animated wow animate__backInRight'>The Future of Innovation is here </p>
          <p className='text-gray-300 text-[40px] font-bold text-center font-serif animate__animated wow animate__backInLeft'>Innovate Create Fascinate</p>
        </div>
       </div>
      <div className='relative  h-[1px] w-[1550px]  mx-auto flex justify-center items-center bg-gray-400'>
        <Link to="/about"><button className=" mb-[190px] btn-red animate__animated wow animate__fadeInUp">Explore US</button></Link>
        
       
        
      </div>
      
      <div className='bigimage'>
        <div className='overlay'>
          <p className='animate__animated wow animate__backInRight'>A Better Future for</p>
          <p className='animate__animated wow animate__backInLeft'>
            Clean Energy</p>
        </div>
      </div>
      
      <div className='relative  h-[1px] w-[1550px]  mx-auto flex justify-center items-center bg-gray-400'>
        <Link to="/solution"><button className="  mb-[380px] mr-[800px] btn-red animate__animated wow animate__fadeInUp">OUR SOLUTIONS</button></Link>
        
      </div>

      <div className='evimage'>
        <div className='flex flex-col mt-[5%] ml-[60%] text-4xl'>
          <p className='text-black animate__animated wow animate__backInRight'>"We need to be able to move away from fossil fuels</p>
          <p className='animate__animated wow animate__backInLeft'> and toward sustainable energy."</p>
        
        </div>

      </div>
      <div className='relative  h-[1px] w-[1550px]  mx-auto flex justify-center items-center bg-green-200'>
        <Link to="/product"> <button className=" mb-[410px] btn-red ml-[800px] animate__animated wow animate__fadeInUp">OUR PRODUCTS</button></Link>
      
      </div>

      <div className='mapimage'>
        <div className='flex justify-center mt-[4%] text-4xl text-black'>
          <p className='animate__animated wow animate__backInRight'>If we do not trust one another, we are already defeated</p>
         </div>
      </div>
      <div className='relative  h-[1px] w-[1550px]  mx-auto flex justify-center items-center bg-gray-600'>
        <Link to="/contact"> <button className=" mb-[190px] btn-red  animate__animated wow animate__fadeInUp">CONTACT US</button></Link>
       
      </div>
       
      <Last></Last>
     

         </div>
  )
}

export default Home
