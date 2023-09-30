import React, { useState } from 'react'
import sauvy from '../assets/suavy.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >=10) {
      setColor(true);
    }
    else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    
      <div className={`flex w-full h-[100px]  justify-evenly
      ${color ?"bg-sky-800 text-white":"transparent text-yellow-500"}
        fixed z-50 duration-100 ease-linear`}>
      <div className='flex flex-row items-center gap-2'>
        <div>
          <Link to='/'>
          <img src={sauvy} alt='suavy' className='animate__animated wow animate__flip h-[70px] -mt-4' />
          <div className='ml-[90px] -mt-12 flex gap-4 animate__animated wow animate__backInDown'>
            <h2 className='font-bold from-stone-600'>S U A V Y </h2>
           <h2 className='font-bold'>T E C H N O L O G I E S</h2>
         </div>
          </Link>
        </div>
       
        
        </div>
        <nav className='  h-full w-[800px] '>
          <ul className='flex  items-center mt-[45px] gap-3 justify-evenly  font-bold'>
            <li>
            <Link to='/'>
              <p className='hover:text-yellow-500'>HOME</p>
            </Link>
            <div></div>
            </li>
             <li>
            <Link to='/about'>
              <p className='hover:text-yellow-500'>ABOUT US</p>
            </Link>
            <div></div>
            </li>
             <li>
            <Link to='/solution'>
             <p className='hover:text-yellow-500'>SOLUTIONS</p> 
            </Link>
            <div></div>
            </li>
             <li>
            <Link to='/product'>
             <p className='hover:text-yellow-500'>PRODUCTS</p> 
            </Link>
            <div></div>
            </li>
            <li>
            <Link to='/contact'>
              <p className='hover:text-yellow-500'>CONTACT US</p>
            </Link>
            <div></div>
            </li>
          </ul>
        </nav>
      
    </div>
    
    
  )
}

export default Navbar
