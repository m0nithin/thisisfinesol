import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import aboutDog from '../../assets/images/img/pack430.png'

const About  = () =>{
    return(
        <section id="about">
            <div className="aboutImagebox">
                <img src={aboutDog} alt="" />
            </div>
            <div className="aboutTextBox">
                <h5 className="aboutTitle">About</h5>
                <h5 className="aboutText">TIF is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the memes.<br /><br />TIF is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $TIF is a coin for the people, forever. Fueled by pure memetic power, let $TIF show you the way.</h5>
            </div>
        </section>
    )
}

export default About;