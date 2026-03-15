import React from 'react'
import logo from "../assets/logo.png"
import { FaBarcode, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='fixed z-100 bg-white/10 backdrop-blur-lg shadow-2xl p-6 text-white w-full flex justify-between items-center h-20'>
        <div className='flex gap-3 p-10 px-10 justify-center items-center w-auto h-20'>
            <img src={logo} alt="logo" className='h-15 w-15 rounded-full '/>
            <span className='text-lg font-extrabold'>Yves Dev 237</span>
        </div>
          <FaBars className='size-7 cursor-pointer'/>
    </nav>
  )
}

export default Navbar