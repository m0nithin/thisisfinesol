import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/img/logo.png";

import { FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5 className="contactTitle">Contact</h5>
      <div
        className="footerLogo"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={logo} alt="" />
        <h5 className="logoText">This Is Fine</h5>
      </div>
      <div className="footerIcons">
        <FaTelegramPlane color="#647432" size={80} onClick={()=>{window.open('https://t.me/TIF_COIN', '_blank')}}/>
        <FaTwitter color="#647432" size={80} onClick={()=>{window.open('https://twitter.com/tifthecoin?t=XryoLESwinZ89gAc3yz-jw&s=09', '_blank')}}/>
      </div>
      <h5 className="footerText">
      We would like to give the 1% of the total supply to the creator of the meme: KC Green, hope he will answer... anyway this token is not related to him in terms of financial advice or financial purpose.
      </h5>
      <h5 className="footerText">
        $TIF is a meme coin with no intrinsic value or expectation of financial
        return. There is no formal team or roadmap. the coin is completely
        useless and for entertainment purposes only. But... who knows... the
        moon is not to far from the Earth.
      </h5>
      <div className="footerCopyrights">
        <h5>© 2023 by TIF. All rights reserved!</h5>
      </div>
    </section>
  );
};

export default Contact;
