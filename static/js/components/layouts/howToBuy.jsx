import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import wallet from '../../assets/images/img/wallet.png'
import eth from '../../assets/images/img/eth.png'
import uniswap from '../../assets/images/img/uniswapClear.webp'
import dogFace from '../../assets/images/img/dogface.png'
import swap from '../../assets/images/img/swap.png'
import justDog from '../../assets/images/img/justDog.png'

const How  = () =>{
    return(
        <section id="how">
            <h5 className="howTitle">How to buy</h5>
            <div className="howStep">
                <img src={wallet} alt="" />
                <div className="howStepText">
                    <h5 className="howStepTitle">Create a wallet</h5>
                    <h5 className="howSteptext">download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</h5>
                </div>
            </div>
            <div className="howStep">
                <img src={eth} alt="" />
                <div className="howStepText">
                    <h5 className="howStepTitle">Get some eth</h5>
                    <h5 className="howSteptext">have ETH in your wallet to switch to $TIF. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.</h5>
                </div>
            </div>
            <div className="howStep">
                <img src={uniswap} alt="" />
                <div className="howStepText">
                    <h5 className="howStepTitle">Go to Uniswap</h5>
                    <h5 className="howSteptext">connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $TIF token address into Uniswap, select TIF, and confirm. When Metamask prompts you for a wallet signature, sign.</h5>
                </div>
            </div>
            <div className="howStep">
                <img src={swap} alt="" />
                <div className="howStepText">
                    <h5 className="howStepTitle">Swith eth for $TIF</h5>
                    <h5 className="howSteptext">switch ETH for $TIF. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</h5>
                </div>
            </div>
            <div className="howSwapBox" hidden>
                <div className="swapping">
                    <iframe src="https://app.uniswap.org/#/swap?outputCurrency=0x702f75252dcdb6a8defa74d5b78637c08756473e" frameborder="0"></iframe>
                </div>
                <div className="swappingImage">
                    <img src={justDog} alt="" />
                </div>
            </div>
        </section>
    )
}

export default How;