import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { IoIosHeart } from "react-icons/io";


function Footer() {
  return (
    <>
    <div className='container-fluid p-3 text-center text-light' style={{backgroundColor:'#033083f7'}}>
        <h2>Contact With Us</h2>
        <h5><MdOutlineMailOutline />{' '}resumebuilder@gmail.com</h5>
        <h5><FaPhoneVolume />{' '}9876235129</h5>
        <h4>Contact With Us</h4>
        <div className='w-100 d-flex justify-content-center gap-2' style={{fontSize:'27px'}}>
           <FaWhatsapp />
           <IoLogoInstagram />
           <ImLinkedin2 />

        </div>
            <h4 className='mt-3'>Designed & build with <IoIosHeart style={{color:'red'}}/> using React</h4>
        </div>
    </>
  )
}

export default Footer