import React from "react";
import logo from "../assets/DH.png";
import logoFacebook from "../assets/ico-facebook.png";
import logoInstagram from "../assets/ico-instagram.png";
import logoWhatsapp from "../assets/ico-whatsapp.png";
import logoTiktok from "../assets/ico-tiktok.png";

const Footer = () => {
  return (
    <footer>
      
      <img className="logoSocialMedia" src={logoInstagram} alt="logo de instagram" />
      <img className="logoSocialMedia" src={logoFacebook} alt="logo de facebook" />
      <img className="logoSocialMedia" src={logoWhatsapp} alt="logo de whatsapp" />
      <img className="logoSocialMedia" src={logoTiktok} alt="logo de tiktok" />
      

      <p>Powered by</p>

      <img className="logoDH" src={logo} alt="DH-logo" />
    </footer>
  );
};

export default Footer;
