import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { IoIosHeart } from "react-icons/io";

function Footer() {
  return (
    <>
      <style>
        {`
          .footer-section{
            background: linear-gradient(to right,#020617,#0f172a);
            color: white;
            border-top: 1px solid rgba(255,255,255,0.08);
          }

          .footer-title{
            color:#60a5fa;
            font-weight:700;
            margin-bottom:20px;
          }

          .contact-item{
            margin:10px 0;
            font-size:18px;
            display:flex;
            justify-content:center;
            align-items:center;
            gap:10px;
          }

          .social-icons{
            display:flex;
            justify-content:center;
            gap:20px;
            margin-top:20px;
          }

          .social-icon{
            width:55px;
            height:55px;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#1e293b;
            font-size:24px;
            cursor:pointer;
            transition:all .3s ease;
          }

          .social-icon:hover{
            background:#3b82f6;
            transform:translateY(-5px);
            box-shadow:0 8px 20px rgba(59,130,246,.4);
          }

          .footer-bottom{
            margin-top:30px;
            padding-top:20px;
            border-top:1px solid rgba(255,255,255,.08);
            color:#cbd5e1;
          }

          .heart{
            color:#ef4444;
            animation:pulse 1.5s infinite;
          }

          @keyframes pulse{
            0%{transform:scale(1);}
            50%{transform:scale(1.2);}
            100%{transform:scale(1);}
          }
        `}
      </style>

      <div className="container-fluid footer-section py-5 text-center">
        <h2 className="footer-title">Get In Touch</h2>

        <div className="contact-item">
          <MdOutlineMailOutline />
          <span>resumebuilder@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaPhoneVolume />
          <span>+91 9876543210</span>
        </div>

        <h5 className="mt-4">Follow Us</h5>

        <div className="social-icons">
          <div className="social-icon">
            <FaWhatsapp />
          </div>

          <div className="social-icon">
            <IoLogoInstagram />
          </div>

          <div className="social-icon">
            <ImLinkedin2 />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="mb-0">
            © 2026 Resume Builder. All Rights Reserved.
          </p>

          <p className="mt-2">
            Designed & Built with{" "}
            <IoIosHeart className="heart" /> using React
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;