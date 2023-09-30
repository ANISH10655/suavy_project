import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from '../assets/p1.jpg';
import dome from '../assets/HDT.jpg';
import p2 from '../assets/8.jpg';
import slider from '../assets/slider.jpg';
import ocean from '../assets/ship.jpg';
import car from '../assets/car.jpg';
import evcar from '../assets/evcharging.jpg';
import smart from '../assets/7.jpg';
import Last from '../components/Last';

const Product = () => {

  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div>
      <div className=''>
        <div className='relative'>
          <img className='w-full h-[1200px]' src={p1} ></img>
        </div>
        <div className='flex flex-col absolute  -mt-[69%] ml-[40%] text-white gap-4'>
          <p className='text-4xl'>Next-Generation of Smart</p>
          <p className='text-4xl ml-12'>Energy and Technology</p>
          <p className='text-3xl -ml-20'>Experience smart management of energy: Unparalleled!</p>
        </div>

        <div className='flex   -mt-[49%]'>
          <div className='h-[550px] w-[602px] -mt-6 absolute ml-24 rounded-lg flex flex-col'>
            <div className='-mt-13'>
              <img className='w-[100%]'src={dome}></img>
            </div>
            
            <div className='flex flex-col  bg-yellow-100 gap-2 h-[210px]'>
              <p className='text-black text-3xl text-center mt-4'>Smart Dome</p>
              <p className='text-black px-[10%] text-center text-md'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className='border-2 border-green-600 h-[39px] w-[150px] mx-auto mt-4 rounded-lg text-green-500 hover:bg-green-500 hover:text-white'>Read More</button>
            </div>
          </div>
          
          <div className='flex flex-col absolute h-[570px] w-[602px]  -mt-5 ml-[57%]'>
            <div>
              <img className='' src={p2}></img>
            </div>
            
            <div className='flex flex-col  h-[230px] bg-yellow-100 gap-2'>
              <p className='text-center text-3xl mt-2 text-black'>IoT Smart Grid</p>
              <p className='text-black px-[10%] text-center text-md'>Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
               <button className='border-2 border-green-600 h-[39px] w-[150px] mx-auto mt-1 rounded-lg text-green-500 hover:bg-green-500 hover:text-white'>Read More</button>
            </div>

          </div>


        </div>
      </div>
      
      <div className='h-[600px] w-full outline mt-[49.2%]'>
        <div className='relative'>
          <img className='h-[600px] w-[1700px]' src={slider}></img>
        </div>
        <div className='absolute h-[10%] w-[25%] -mt-[36%]  z-50   ml-[40%]'>
          <h1 className='text-center text-3xl font-serif text-black'>Upcomming Products</h1>
         </div>
        <div className='-mt-[30%] mx-auto outline z-50'>
          <Carousel responsive={responsive}>
            <div className='flex flex-col h-[400px] w-[600px]  z-50 '>
              <div className='-z-50 h-[100px] w-[550px] ml-[20%] rounded-lg'>
                <img src={ocean}></img>
              </div>
              <div className='h-[120px] w-[550px]  mt-[31%] ml-[20%] z-50 bg-yellow-400 gap-2'>
                <p className='text-center mt-3 text-2xl text-green-900'>Ocean Energy Harnessing</p>
                <p className='text-black text-md px-5'>Harnessing Tidal Energy in a smart and efficient way on sea coasts.</p>
              </div>
           </div>
            <div>
              <div className='flex flex-col h-[400px] w-[600px]  z-50 -ml-20'>
              <div className='-z-50 h-[100px] w-[550px] ml-[20%] rounded-lg'>
                <img src={car}></img>
              </div>
              <div className='h-[120px] w-[550px]  mt-[31%] ml-[20%] z-50 bg-red-800 gap-2'>
                <p className='text-center mt-3 text-2xl text-white'>Battery Management System</p>
                <p className='text-white text-md px-3'>An intuitive battery management system to ensure batteries work under the most optimum operating conditions and assures safety.</p>
              </div>
           </div>
            </div>
            
               <div>
              <div className='flex flex-col h-[400px] w-[600px]  z-50 -ml-20'>
              <div className='-z-50 h-[100px] w-[550px] ml-[20%] rounded-lg'>
                <img src={evcar}></img>
              </div>
              <div className='h-[120px] w-[550px]  mt-[31%] ml-[20%] z-50 bg-orange-800 gap-2'>
                <p className='text-center mt-3 text-2xl text-white'>EV Charing Infrastructure</p>
                <p className='text-white text-md px-5'>Our ingenious EV charging infrastructure to support fast charging for the upcoming EV generation.</p>
              </div>
           </div>
            </div>
          
          <div>
              <div className='flex flex-col h-[400px] w-[600px]  z-50 -ml-20'>
              <div className='-z-50 h-[100px] w-[550px] ml-[20%] rounded-lg'>
                <img src={smart}></img>
              </div>
              <div className='h-[120px] w-[550px]  mt-[31%] ml-[20%] z-50 bg-purple-800 gap-2'>
                <p className='text-center mt-3 text-2xl text-white'>Smart Energy Management and Control System</p>
                <p className='text-white text-md px-5'>We plan on making energy management smart, efficient, intelligent and most user-friendly</p>
              </div>
           </div>
            </div>

            
           </Carousel>;
        </div>
        
        </div>
        
      <Last></Last>

    </div>
  )
}

export default Product
