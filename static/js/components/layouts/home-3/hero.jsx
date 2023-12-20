import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";

import dogOnFire from '../../../assets/images/img/sticker_2094-512x512.png'

import telegram from '../../../assets/images/img/telegram.webp'
import twitter from '../../../assets/images/img/twitter.webp'
import uniswap from '../../../assets/images/img/uniswap.webp'
import etherscan from '../../../assets/images/img/etherscan.webp'
import dextools from '../../../assets/images/img/dextools.webp'
import cm from '../../../assets/images/img/cm.webp'

import {GiTimeBomb} from 'react-icons/gi'

const Hero = () => {
  return (
    <section id="hero">
      
      <Header />
      <div className="heroContent">
        <div className="heroTextWrapper">
          <h5 className="heroTitle">
            $TIF
          </h5>
          <h5 className="heroSubtitle">
          Welcome to the world of 'This Is Fine' meme token, where humor and cryptocurrency collide!
          </h5>
          <div className="heroTextIconLinks">
            <img src={twitter} alt="" onClick={()=>{window.open('https://twitter.com/tifthecoin?t=XryoLESwinZ89gAc3yz-jw&s=09', '_blank')}}/>
            <img src={telegram} alt="" onClick={()=>{window.open('https://t.me/TIF_COIN', '_blank')}}/>
            <img src={dextools} alt="" />
            <img src={etherscan} alt="" />
            <img src={cm} alt="" />
            <img src={uniswap} alt="" />
          </div>
        </div>
        <div className="heroImageWrapper">
          <img src={dogOnFire} alt="" />
        </div>
      </div>
      <div className="heroLinksBox">
        <div className="heroLinkBtn">
          <span>gemini</span> <GiTimeBomb size={30} color="#000"/>
        </div>
        <div className="heroLinkBtn">
          <span>binance</span><GiTimeBomb size={30} color="#000"/>
        </div>
        <div className="heroLinkBtn">
          <span>kucoin</span><GiTimeBomb size={30} color="#000"/>
        </div>
      </div>
      <div className="heroLinksBox">
        <div className="heroLinkBtn">
          <span>huobi</span><GiTimeBomb size={30} color="#000"/>
        </div>
        <div className="heroLinkBtn">
          <span>bybit</span><GiTimeBomb size={30} color="#000"/>
        </div>
        <div className="heroLinkBtn">
          <span>crypto.com</span><GiTimeBomb size={30} color="#000"/>
        </div>
      </div>
      <div className="heroLinksBox">
        <div className="heroLinkBtn">
          <span>bitget</span><GiTimeBomb size={30} color="#000"/>
        </div>
        <div className="heroLinkBtn">
          <span>okx</span><GiTimeBomb size={30} color="#000"/>
        </div>
        <div className="heroLinkBtn">
          <span>binx japan</span><GiTimeBomb size={30} color="#000"/>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
