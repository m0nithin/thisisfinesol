import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Roadmap = () => {
  return (
    <section id="roadmap">
      <h5 className="roadmapTitle">Roadmap</h5>
      <div className="roadmapPhasesResume">
        Phase 1: Meme
        <br />
        <br />
        Phase 2: Vibe and HODL
        <br />
        <br />
        Phase 3: Meme Takeover
      </div>
      <h5 className="roadmapSubtitle">
        All jokes aside, here is a rough sketch of $TIF path ahead. We dont
        wan’t to give everything away on day 1, Expect surprises along the way
      </h5>
      <div className="roadmapPhasesBox">
      <div className="roadmapItem">
            <h5 className="roadmapItemTitle">Phase 1</h5>
            <ul className="roadmapItemList">
                <li className="roadmapItemListText">Launch</li>
                <li className="roadmapItemListText">CoinGecko/Coinmarketcap Listings</li>
                <li className="roadmapItemListText">1,000+ Holders</li>
                <li className="roadmapItemListText">Get $TIF Trending on twitter with our memetic power</li>
            </ul>
        </div>
        <div className="roadmapItem">
            <h5 className="roadmapItemTitle">Phase 2</h5>
            <ul className="roadmapItemList">
                <li className="roadmapItemListText">Community Partnerships TIF Times digital newsletter</li>
                <li className="roadmapItemListText">Formation of token gated discord group, TIF Palace, for holders, more details tba</li>
                <li className="roadmapItemListText">CEX Listings 10,000+holders</li>
            </ul>
        </div>
        <div className="roadmapItem">
            <h5 className="roadmapItemTitle">Phase 3</h5>
            <ul className="roadmapItemList">
                <li className="roadmapItemListText">TIF merch</li>
                <li className="roadmapItemListText">TIF Academy</li>
                <li className="roadmapItemListText">TIF Tools</li>
                <li className="roadmapItemListText">T1 Exchange Listings 100,000+ holders</li>
                <li className="roadmapItemListText">Meme Takeover</li>
            </ul>
        </div>
      </div>

    </section>
  );
};

export default Roadmap;
