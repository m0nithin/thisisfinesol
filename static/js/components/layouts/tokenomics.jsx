import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import chart from "../../assets/images/img/chart.png";

const Tokenomics = () => {
  return (
    <section id="tokenomics">
      <h5 className="tokenomicsTitle">Tokenomics</h5>
      <div className="tokenomicsBox">
        <div className="tokenomicsTextBox">
          <h5 className="tokenomicsTextTitle">
            Token supply
            <br />
            420,690,000,000,000
          </h5>
          <h5 className="tokenomicsText">
            No Taxes, No Bullshit. It’s that simple.
            <br />
            90% of the tokens will be sent to the liquidity pool, 4% of the tokens will be reserved for our partner, 1% of the tokens will be given to the meme creator, and the remaining 5% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools.
          </h5>
        </div>
        <div className="tokenomicsChartBox">
          <img src={chart} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
