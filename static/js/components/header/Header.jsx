import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink as AnchorLink } from "react-router-hash-link";
import menus from "../../pages/menu";
import logoheader from "../../assets/images/img/logo.png";

import { Button } from "react-bootstrap";

import { Menu, SubMenu, Item } from "burger-menu";
import "burger-menu/lib/index.css";

import {AiOutlineClose} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header row">
      <div className="col-2 headerLogo" onClick={()=>{window.location.href = "/"}}>
        <img src={logoheader} alt="" />
        <h5 className="logoText">This Is Fine</h5>
        <h5 className="logoTextMobile">$Fine</h5>
      </div>
      <div className="col-2"></div>
      <div className="col-8 navMenu">
        <AnchorLink to={"/"}>
          <h5 className="navMenuItem">Home</h5>
        </AnchorLink>
        <AnchorLink to={"/#about"}>
          <h5 className="navMenuItem">About</h5>
        </AnchorLink>
        <AnchorLink to={"/#how"}>
          <h5 className="navMenuItem">How to buy</h5>
        </AnchorLink>
        <AnchorLink to={"/#tokenomics"}>
          <h5 className="navMenuItem">Tokenomics</h5>
        </AnchorLink>
        <AnchorLink to={"/#roadmap"}>
          <h5 className="navMenuItem">Roadmap</h5>
        </AnchorLink>
        <div className="navBtn" onClick={()=>{window.open('https://app.uniswap.org/#/swap?outputCurrency=0x702f75252dcdb6a8defa74d5b78637c08756473e', '_blank')}}><span>Buy now</span></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          height={30}
          width={30}
          className="mobileMenuBtn"
          viewBox="0 0 32 32"
          id="list"
          onClick={() => setIsOpen(!isOpen)}
        >
          <defs></defs>
          <path
            fill="#25180b"
            d="M3 9h26a2 2 0 0 0 0-4H3a2 2 0 0 0 0 4ZM29 14H3a2 2 0 0 0 0 4h26a2 2 0 0 0 0-4ZM29 23H3a2 2 0 0 0 0 4h26a2 2 0 0 0 0-4Z"
          ></path>
        </svg>
        <Menu
          className="burger-menu"
          isOpen={isOpen}
          selectedKey={"entry"}
          onClose={() => setIsOpen(false)}
          animate="fallDown"
          customCrossIcon={<CgClose color="#25180b" size={30} strokeWidth={3}/>}
        >
          <AnchorLink to={"/"}>
            <Item itemKey={"home"} text={"Home ?"} onClick={() => setIsOpen(!isOpen)}></Item>
          </AnchorLink>

          <AnchorLink to={"/#about"}>
            <Item itemKey={"about"} text={"About"} onClick={() => setIsOpen(!isOpen)}></Item>
          </AnchorLink>

          <AnchorLink to={"/#how"}>
            <Item itemKey={"how"} text={"How to buy"} onClick={() => setIsOpen(!isOpen)}></Item>
          </AnchorLink>

          <AnchorLink to={"/#tokenomics"}>
            <Item itemKey={"tokenomics"} text={"Tokenomics"} onClick={() => setIsOpen(!isOpen)}></Item>
          </AnchorLink>

          <AnchorLink to={"/#roadmap"}>
            <Item itemKey={"roadmap"} text={"Roadmap"} onClick={() => setIsOpen(!isOpen)}></Item>
          </AnchorLink>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
