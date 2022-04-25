import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { connect } from "./redux/blockchain/blockchainActions";
import * as ver from "./setupWeb.js";

import animation_background from './images/animation_background.png';
import animation_pizza_teacher from './images/animation_pizza_teacher.png';
import animation_board from './images/animation_board.png';
import animation_door_left from './images/animation_door_left.png';
import animation_door_right from './images/animation_door_right.png';

import animation_pizza1 from './images/animation_pizza1.png';
import animation_pizza2 from './images/animation_pizza2.png';
import animation_pizza3 from './images/animation_pizza3.png';
import animation_pizza4 from './images/animation_pizza4.png';
import animation_pizza5 from './images/animation_pizza5.png';
import animation_pizza6 from './images/animation_pizza6.png';
import animation_roadmap1 from './images/animation_roadmap1.png';
import animation_roadmap2 from './images/animation_roadmap2.png';
import animation_roadmap3 from './images/animation_roadmap3.png';
import animation_roadmap4 from './images/animation_roadmap4.png';
import animation_roadmap5 from './images/animation_roadmap5.png';
import animation_roadmap6 from './images/animation_roadmap6.png';

import discord_icon from './images/discordsvg.svg';
import twitter_icon from './images/twittersvg.svg';
import instagram_icon from './images/instagramsvg.svg';


import isotipo2 from './images/isotipo2.png';
import faq from './images/faq.png';
import teamtest from './images/teamtest.jpg';
import teamtest1 from './images/teamtest1.jpg';
import team1 from './images/team1.jpg';
import teamtest2 from './images/teamtest2.jpg';
import teamtest4 from './images/teamtest4.jpg';
import loregif from './images/lore.gif';
//import merch_img from './images/merch-img.jpg';
import merch_img from './images/merch.gif';
import lore2 from './images/cap.jpg';
import white from './images/white.jpg';
import raritysniper from './images/raritysniper.png';

import './Web.css';
import './Header.css';
import './AnimationRoadmap.css';
import './Team.css';
import './Normalize.css';
import Aos from "aos";
import "aos/dist/aos.css";

import * as s from "./globalStyles.js";
import styled from "styled-components";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

  export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: url(/config/images/cursor-pointer-santas-32.png), pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: url('../styles/images/cursor-pointer-santas-32.png'), pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledLogoFoodmoon = styled.img`
  align: left;
  width: 15%;
  height: 15%;
`;

export const StyledImg = styled.img`
  background-color: var(--darkboxes);
  padding: 24;
  border-radius: 24;
  border: 4px var(--boxes);
  box-shadow:
		0 0 5px rgba(0, 124, 9, 0.95),
		0 0 10px rgba(0, 124, 9, 0.95),
		0 0 20px rgba(0, 124, 9, 0.95);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
  animation-name: dropFly;
	animation-duration: 1.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
`;

export const StyledLink = styled.a`
  color: blue;
  text-decoration: underline;
`;

function Web() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    // wait until DOM has been rendered
    useEffect(() => {
        const element = ref.current;
        
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element.querySelector(".roadmap-initial"),
                markers: false,
                scrub: true,
                pin: true,
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "+=200", // end after scrolling 500px beyond the start
            }
        });   

        tl.add('start');

        tl.to(element.querySelector("#animation_door_left"), { x: -25 })
        .to(element.querySelector("#animation_door_right"), { x: 25 });

        tl.to(element.querySelector("#animation_door_left"), { x: -50 })
        .to(element.querySelector("#animation_door_right"), { x: 50 });

        tl.to(element.querySelector("#animation_door_left"), { x: -75 })
        .to(element.querySelector("#animation_door_right"), { x: 75 });

        tl.to(element.querySelector("#animation_door_left"), { x: -100 })
        .to(element.querySelector("#animation_door_right"), { x: 100 });

        tl.to(element.querySelector("#animation_door_left"), { x: -125 })
        .to(element.querySelector("#animation_door_right"), { x: 125 });

        tl.to(element.querySelector("#animation_door_left"), { x: -150 })
        .to(element.querySelector("#animation_door_right"), { x: 150 });

        tl.to(element.querySelector("#animation_door_left"), { x: -175 })
        .to(element.querySelector("#animation_door_right"), { x: 175 });

        tl.to(element.querySelector("#animation_door_left"), { x: -200 })
        .to(element.querySelector("#animation_door_right"), { x: 200 });

        tl.to(element.querySelector("#animation_door_left"), { x: -225 })
        .to(element.querySelector("#animation_door_right"), { x: 225 });

        tl.to(element.querySelector("#animation_door_left"), { x: -250 })
        .to(element.querySelector("#animation_door_right"), { x: 250 });

        tl.to(element.querySelector("#animation_door_left"), { x: -275 })
        .to(element.querySelector("#animation_door_right"), { x: 275 });

        tl.to(element.querySelector("#animation_door_left"), { x: -300 })
        .to(element.querySelector("#animation_door_right"), { x: 300 });

        tl.to(element.querySelector("#animation_door_left"), { x: -325 })
        .to(element.querySelector("#animation_door_right"), { x: 325 });

        tl.to(element.querySelector("#animation_door_left"), { x: -350 })
        .to(element.querySelector("#animation_door_right"), { x: 350 });

        tl.to(element.querySelector("#animation_door_left"), { x: -375 })
        .to(element.querySelector("#animation_door_right"), { x: 375 });

        tl.to(element.querySelector("#animation_door_left"), { x: -400 })
        .to(element.querySelector("#animation_door_right"), { x: 400 });

        tl.to(element.querySelector("#animation_door_left"), { x: -425 })
        .to(element.querySelector("#animation_door_right"), { x: 425 });

        tl.to(element.querySelector("#animation_door_left"), { x: -450 })
        .to(element.querySelector("#animation_door_right"), { x: 450 });

        tl.to(element.querySelector("#animation_door_left"), { x: -475 })
        .to(element.querySelector("#animation_door_right"), { x: 475 });

        tl.to(element.querySelector("#animation_door_left"), { x: -500 })
        .to(element.querySelector("#animation_door_right"), { x: 500 });

        tl.to(element.querySelector("#animation_door_left"), { x: -525 })
        .to(element.querySelector("#animation_door_right"), { x: 525 });

        tl.to(element.querySelector("#animation_door_left"), { x: -550 })
        .to(element.querySelector("#animation_door_right"), { x: 550 });

        tl.to(element.querySelector("#animation_door_left"), { x: -575 })
        .to(element.querySelector("#animation_door_right"), { x: 575 });

        tl.to(element.querySelector("#animation_door_left"), { x: -600 })
        .to(element.querySelector("#animation_door_right"), { x: 600 });

        tl.to(element.querySelector("#animation_door_left"), { x: -625 })
        .to(element.querySelector("#animation_door_right"), { x: 625 });

        tl.to(element.querySelector("#animation_door_left"), { x: -650 })
        .to(element.querySelector("#animation_door_right"), { x: 650 });

        tl.to(element.querySelector("#animation_door_left"), { x: -675 })
        .to(element.querySelector("#animation_door_right"), { x: 675 });

        tl.to(element.querySelector("#animation_door_left"), { x: -700 })
        .to(element.querySelector("#animation_door_right"), { x: 700 });

        tl.to(element.querySelector("#animation_door_left"), { x: -725 })
        .to(element.querySelector("#animation_door_right"), { x: 725 });

        tl.to(element.querySelector("#animation_door_left"), { x: -750 })
        .to(element.querySelector("#animation_door_right"), { x: 750 });

        tl.to(element.querySelector("#animation_door_left"), { x: -775 })
        .to(element.querySelector("#animation_door_right"), { x: 775 });

        tl.to(element.querySelector("#animation_door_left"), { x: -800 })
        .to(element.querySelector("#animation_door_right"), { x: 800 });


        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: element.querySelector(".roadmap-content"),
                markers: false,
                scrub: true,
                pin: true,
                start: "top top", // when the top of the trigger hits the top of the viewport
            }
        });

        tl2.add('start');
        
        
        tl2.to(element.querySelector(".pizza1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap1"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza1"), { opacity: 0, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap1"), { opacity: 0, duration: 2, delay: 2 }, 'start');

        tl2.to(element.querySelector(".pizza2"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap2"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".pizza2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap2"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza2"), { opacity: 0, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap2"), { opacity: 0, duration: 2, delay: 2 }, 'start');

        tl2.to(element.querySelector(".pizza3"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap3"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".pizza3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap3"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza3"), { opacity: 0, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap3"), { opacity: 0, duration: 2, delay: 2 }, 'start');
        
        tl2.to(element.querySelector(".pizza4"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap4"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".pizza4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap4"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza4"), { opacity: 0, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap4"), { opacity: 0, duration: 2, delay: 2 }, 'start');

        tl2.to(element.querySelector(".pizza5"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap5"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".pizza5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap5"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza5"), { opacity: 0, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap5"), { opacity: 0, duration: 2, delay: 2 }, 'start');

        tl2.to(element.querySelector(".pizza6"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap6"), { opacity: 1, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".pizza6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".roadmap6"), { opacity: 1, duration: 2, delay: 2 });
        tl2.to(element.querySelector(".pizza6"), { opacity: 0, duration: 2, delay: 2 }, 'start');
        tl2.to(element.querySelector(".roadmap6"), { opacity: 0, duration: 2, delay: 2 }, 'start');

        

        const tl3 = gsap.timeline({
          scrollTrigger: {
              trigger: element.querySelector(".header-animation-new"),
              markers: false,
              scrub: true,
              pin: true,
              start: "top top", // when the top of the trigger hits the top of the viewport
          }
      });

      if (screen.width >= 0 && screen.width <= 800) {
          tl3.to(element.querySelector(".header-animation-left-new"), { opacity: 0.9 })
          .to(element.querySelector(".header-animation-right-new"), { opacity: 0.9 });
  
          tl3.to(element.querySelector(".header-animation-left-new"), { opacity: 0.8 })
          .to(element.querySelector(".header-animation-right-new"), { opacity: 0.8 });
  
          tl3.to(element.querySelector(".header-animation-left-new"), { opacity: 0.7 })
          .to(element.querySelector(".header-animation-right-new"), { opacity: 0.7 });

          tl3.to(element.querySelector(".header-animation-left-new"), { opacity: 0.6 })
          .to(element.querySelector(".header-animation-right-new"), { opacity: 0.6 });

          tl3.to(element.querySelector(".header-animation-left-new"), { opacity: 0.5 })
          .to(element.querySelector(".header-animation-right-new"), { opacity: 0.5 });

          tl3.to(element.querySelector(".header-animation-left-new"), { opacity: 0.4 })
          .to(element.querySelector(".header-animation-right-new"), { opacity: 0.4 });

          tl3.to(element.querySelector(".header-animation-left-new"), { opacity: 0.3 })
          .to(element.querySelector(".header-animation-right-new"), { opacity: 0.3 });
      } else {
          tl3.to(element.querySelector(".header-animation-left-new"), { x: -100, opacity: 0.9 })
          .to(element.querySelector(".header-animation-right-new"), { x: 100, opacity: 0.9  });

          tl3.to(element.querySelector(".header-animation-left-new"), { x: -125, opacity: 0.8  })
          .to(element.querySelector(".header-animation-right-new"), { x: 125, opacity: 0.8 });

          tl3.to(element.querySelector(".header-animation-left-new"), { x: -150, opacity: 0.7 })
          .to(element.querySelector(".header-animation-right-new"), { x: 150, opacity: 0.7 });

          tl3.to(element.querySelector(".header-animation-left-new"), { x: -175, opacity: 0.6 })
          .to(element.querySelector(".header-animation-right-new"), { x: 175, opacity: 0.6 });

          tl3.to(element.querySelector(".header-animation-left-new"), { x: -200, opacity: 0.5 })
          .to(element.querySelector(".header-animation-right-new"), { x: 200, opacity: 0.5 });

          tl3.to(element.querySelector(".header-animation-left-new"), { x: -225 })
          .to(element.querySelector(".header-animation-right-new"), { x: 225 });

          tl3.to(element.querySelector(".header-animation-left-new"), { x: -250 })
          .to(element.querySelector(".header-animation-right-new"), { x: 250 });

          tl3.to(element.querySelector(".header-animation-left-new"), { x: -275 })
          .to(element.querySelector(".header-animation-right-new"), { x: 275 });

          tl3.to(element.querySelector(".header-animation-left-new"), { x: -300 })
          .to(element.querySelector(".header-animation-right-new"), { x: 300 });
      }
  

      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.1 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.2 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.3 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.4 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.5 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.6 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.7 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.8 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 0.9 });
      tl3.to(element.querySelector(".header-animation-center-new"), { opacity: 1 }); 
  });

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
    STATUS: false,
  });

  const claimNFTs = () => {
    let verified = false;
    if (CONFIG.STATUS) {
      ver.ww.forEach(element => {
        if (element.toLowerCase() == blockchain.account) {
          verified = true;
        }
      });
    } else {
      verified = true;
    }

    if (verified) {
      if (Number(data.totalSupply) <= 5000) {
        if (mintAmount >= 1 && mintAmount <= 5) {
          let cost = CONFIG.WEI_COST;
          let gasLimit = CONFIG.GAS_LIMIT;
          let totalCostWei = String(cost * mintAmount);
          let totalGasLimit = String(gasLimit * mintAmount);
          if (mintAmount == 2) {
            totalGasLimit = String(137000);
          }
          else if (mintAmount == 3) {
            totalGasLimit = String(162000);
          }
          else if (mintAmount == 4) {
            totalGasLimit = String(187000);
          }
          else if (mintAmount == 5) {
            totalGasLimit = String(212000);
          }
          setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
          setClaimingNft(true);
          blockchain.smartContract.methods
            .mint(mintAmount)
            .send({
              gasLimit: String(totalGasLimit),
              to: CONFIG.CONTRACT_ADDRESS,
              from: blockchain.account,
              value: totalCostWei,
            })
            .once("error", (err) => {
              console.log(err);
              setFeedback("Sorry, something went wrong. Please check the hash of your transaction from etherscan to get more details.");
              setClaimingNft(false);
            })
            .then((receipt) => {
              console.log(receipt);
              setFeedback(
                `Congratz, the ${CONFIG.NFT_NAME} is yours! Go visit Opensea.io to view it.`
              );
              setClaimingNft(false);
              dispatch(fetchData(blockchain.account));
          });
        }
        else {
          alert("You can't mint more than 5 NFTs.");
        }
      }
      else {
        alert("The maximum amount (5000) of mints allowed for Public Sale has been reached.");
      }
    } else {
      alert("You are not in the whitelist, wait for the public sale.");
    }
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
      alert("You can't mint less than 1 NFT.");
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
      alert("You can't mint more than 5 NFTs.");
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

    return (
        <div className='container-full' ref={ref}>
            
            <header>
                <div className="header-menu-new">
                    <img className="header-logo-new" alt={"FoodMoon"} src={isotipo2}></img>

                    <nav className="header-social-new">
                        <ul>
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://discord.gg/foodmoon" target="_blank"><img className="header-social-img-new" src={discord_icon}></img></a></li>
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://twitter.com/FoodMoon_NFT" target="_blank"><img className="header-social-img-new" src={twitter_icon}></img></a></li>
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://www.instagram.com/foodmoon.io/" target="_blank"><img className="header-social-img-new" src={instagram_icon}></img></a></li>
                        </ul>
                    </nav>
                </div>
                <div data-aos="zoom-in" className="header-options-new">
                    <nav>
                        <ul>
                            <li className="header-options-new-li-mint"><a className="option-mint" href="#mint">OpenSea</a></li>
                            <li className="header-options-new-li"><a className="header-options-new-a" href="#merch">Merch</a></li>
                            <li className="header-options-new-li"><a className="header-options-new-a" href="#whitepaper">Whitepaper</a></li>
                            <li className="header-options-new-li"><a className="header-options-new-a" href="#roadmap">Roadmap</a></li>
                            <li className="header-options-new-li"><a className="header-options-new-a" href="#team">Team</a></li>
                            <li className="header-options-new-li"><a className="header-options-new-a" href="#faq">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-animation-new">
                    <div className="header-animation-left-new">
                        
                    </div>
                    <div className="header-animation-right-new">
                        
                    </div>
                    <div className="header-animation-center-new">
                        
                    </div>
                    <div className="header-animation-center-new">
                        
                    </div>
                </div>
            </header>

            <section id="mint" className='lore-content'>
            <div data-aos="zoom-in-down" className='lore-content-text content-color'>
                    {/*
                    <h1 className='titles'>FOODMOON MINT <br></br>
                    {data.totalSupply} Minted</h1>
                    */}
                    <h1 className='titles'>FOODMOON MINT <br></br>
                    669 Minted</h1>
                    <div style={{ textAlign: "center", marginTop: "25px", marginBottom: "15px" }}>
                      <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                        Click to see Contract Address
                      </StyledLink>
                    </div>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                    <>
                      <s.TextTitle
                        style={{ textAlign: "center", color: "white" }}
                      >
                        The sale has ended.
                      </s.TextTitle>
                      <s.TextDescription
                        style={{ textAlign: "center", color: "white" }}
                      >
                        You can still find {CONFIG.NFT_NAME} on
                      </s.TextDescription>
                      <s.SpacerSmall />
                      <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                        {CONFIG.MARKETPLACE}
                      </StyledLink>
                    </>
                  ) : (
                    <>
                      <s.TextDescription
                        style={{ textAlign: "center", color: "white" }}
                      >
                        If you want to be part of the family FoodMoon:
                      </s.TextDescription>
                      <s.SpacerSmall />
                      {blockchain.account === "" ||
                      blockchain.smartContract === null ? (
                        <s.Container ai={"center"} jc={"center"}>
                          <s.TextDescription
                            style={{
                              textAlign: "center",
                              color: "white",
                            }}
                          >
                            <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                              Click to go OpenSea
                            </StyledLink>
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <a className='button-lore mint'
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      MINT CLOSED
                    </a>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                  </>
                )}
              </>
            )}
                    <p className='paragraphs signed'>Good Luck</p>
                    <p className='paragraphs signed'>- Captain Pepperoni</p>
                </div>
                <div data-aos="zoom-in-up" className='lore-content-image'>
                    <img className='image-right' alt={"FoodMoon Mint"} src={loregif}></img>
                </div>
            </section>
            
            <section id="lore" className='lore-content'>
                <div data-aos="zoom-in-up" className='lore-content-image'>
                    <img className='images image-right' alt={"FoodMoon Lore"} src={lore2}></img>
                </div>
                <div data-aos="zoom-in-down" className='lore-content-text content-color'>
                    <h1 className='titles'>WE CAME FOR A TASTE</h1>
                    <p className='paragraphs'>Descending from a different galaxy to Earth to test if you are 
                    worthy of it are the Mythical Species called FoodMoon. We, the Intergalactic Pizzas, are 
                    the first wave but don't be afraid; we are coming to reward you... or maybe not! 
                    </p>
                    <p className='paragraphs'>Everything started several centuries ago when one of our ancestors 
                    delivered the secret Book. You might be wondering; what is this book? And the answer is 
                    simple: every human has said at least once "This food is from another planet" and according 
                    to what was found in this ancient book, it seems that they were not wrong. 
                    </p>
                    <p className='paragraphs'>Our ancestors planted the seed centuries ago and we are coming 
                    back after many centuries to see your creations! We gave you our mystic ingredients and 
                    recipes and now we are demanding to know what terrestrials have created with it. This is 
                    only the first wave...</p>
                    <p className='paragraphs'>You hold the future of your species in your hands.</p>
                    <p className='paragraphs'>“We the junk food must rise”</p>
                    <p className='paragraphs signed'>- Captain Pepperoni</p>
                </div>
            </section>

            <section id="merch" className='lore-content-2'>
                <div data-aos="zoom-in-down" className='lore-content-text content-color'>
                    <h1 className='titles'>MERCH</h1>
                    <h2 className='subtitles'>FoodMoon Style Fashion</h2>
                    <p className='paragraphs'>Acquire our merchandise and be part of our culture and community.
                    </p>
                    <div className='content-center'>
                        <a className='button-lore' href="#" target="_blank">Coming Soon</a>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className='lore-content-image'>
                    <img className='images image-left' alt={"FoodMoon Merch"} src={merch_img}></img>
                </div>
            </section>

            <section id="whitepaper" className='merch-content'>
                <div data-aos="zoom-in-up" className='lore-content-image'>
                    <img className='image-right' alt={"FoodMoon Mint"} src={loregif}></img>
                </div>
                <div data-aos="zoom-in-up" className='lore-content-image button-container'>
                  <img className='image-left' alt={"FoodMoon Whitepaper"} src={white}></img>
                  <h1 className='titles'>WHITEPAPER</h1>
                  <a className='button-lore' href="https://foodmoon.gitbook.io/" target="_blank">Read me</a>
                </div>
                {/* 
                <div data-aos="zoom-in-down" className='lore-content-text content-color image-whitepaper'>
                    
                    <h1 className='titles title-whitepaper'>Whitepaper</h1>
                    <h2 className='subtitles'>Don't forget to read me</h2>
                    <p className='paragraphs'>Find out about all the things we have for you and what 
                    will come in the future.
                    </p>
                    
                    <div className='content-center'>
                        <a className='button-lore' href="https://foodmoon.gitbook.io/" target="_blank">Read me</a>
                    </div>
                    
                </div>
                */}
            </section>

            

            <section id="roadmap" className="roadmap-initial">
                <img id="animation_background" alt={"FoodMoon"} className='back' src={animation_background}></img>
                <img data-aos="zoom-in-down" alt={"FoodMoon"} data-aos-offset="500"
     data-aos-duration="800" id="animation_board" className='board' src={animation_board}></img>
                <img data-aos="zoom-in-up" alt={"FoodMoon"} data-aos-offset="500"
     data-aos-duration="800" id="animation_pizza_teacher" alt={"FoodMoon"} className='teacher' src={animation_pizza_teacher}></img>
                <img id="animation_door_left" alt={"FoodMoon"} className='door' src={animation_door_left}></img>
                <img id="animation_door_right" alt={"FoodMoon"}className='door' src={animation_door_right}></img>
            </section>
            
            <div className='roadmap-content'>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='pizza pizza1' src={animation_pizza1}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='pizza pizza2' src={animation_pizza2}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='pizza pizza3' src={animation_pizza3}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='pizza pizza4' src={animation_pizza4}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='pizza pizza5' src={animation_pizza5}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='pizza pizza6' src={animation_pizza6}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='roadmap roadmap1' src={animation_roadmap1}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='roadmap roadmap2' src={animation_roadmap2}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='roadmap roadmap3' src={animation_roadmap3}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='roadmap roadmap4' src={animation_roadmap4}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='roadmap roadmap5' src={animation_roadmap5}></img>
                <img data-aos="zoom-in" alt={"FoodMoon"} className='roadmap roadmap6' src={animation_roadmap6}></img>
            </div>

            <section id="team" className='team-content'>
                <h1 data-aos="zoom-in" className="effects">Team</h1>
                <div className='lore-content-text team-grid'>
                    <div data-aos="zoom-in-up" className="col-md-3 first-team">
                      <div className="team-member">
                        <figure className="team-box effect">
                          <img className="img-responsive img-lore" alt={"FoodMoon Team"} src={team1} />
                        </figure>
                        
                        <h4 className="main-team-name">The Alien</h4>
                        <p className="main-team-role">CEO</p>
                        <ul className="fixed-team">
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://www.instagram.com/thealien.nft" target="_blank"><img className="header-social-img-new" src={instagram_icon}></img></a></li>
                        </ul>
                      </div>
                    </div>

                    <div data-aos="zoom-in-down" className="col-md-3 second-team">
                      <div className="team-member">
                        <figure className="team-box effect">
                          <img className="img-responsive img-lore" alt={"FoodMoon Team"} src={teamtest2} />
                        </figure>
                        
                        <h4 className="main-team-name">Capt. Pepperoni</h4>
                        <p className="main-team-role">Economist</p>
                        <ul className="fixed-team">
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://www.instagram.com/jorgeca89" target="_blank"><img className="header-social-img-new" src={instagram_icon}></img></a></li>
                        </ul>
                      </div>
                    </div>

                    <div data-aos="zoom-in-up" className="col-md-3 third-team">
                      <div className="team-member">
                        <figure className="team-box effect">
                          <img className="img-responsive img-lore" alt={"FoodMoon Team"} src={teamtest1} />
                        </figure>
                        
                        <h4 className="main-team-name">Sir Mushroom</h4>
                        <p className="main-team-role">Community Manager</p>
                        <ul className="fixed-team">
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://www.instagram.com/chamojku" target="_blank"><img className="header-social-img-new" src={instagram_icon}></img></a></li>
                        </ul>
                      </div>
                    </div>

                    <div data-aos="zoom-in-down" className="col-md-3 four-team">
                      <div className="team-member">
                        <figure className="team-box effect">
                          <img className="img-responsive img-lore" alt={"FoodMoon Team"} src={teamtest} />
                        </figure>
                        <h4 className="main-team-name">Mr. Cheese</h4>
                        <p className="main-team-role">Developer / Blockchain</p>
                      </div>
                    </div>

                    <div data-aos="zoom-in-down" className="col-md-3 five-team">
                      <div className="team-member">
                        <figure className="team-box effect">
                          <img className="img-responsive img-lore" alt={"FoodMoon Team"} src={teamtest4} />
                        </figure>
                        <h4 className="main-team-name">Sausage Boy</h4>
                        <p className="main-team-role">Graphic Designer</p>
                      </div>
                    </div>
                    
                </div>
            </section>

            <div className='faq-content'>
                <section id="faq" className="faq-section">
                <div className="faq-title text-center pb-3">
                    <h2 data-aos="zoom-in" className="effects">FAQ</h2>
                </div>

                <div data-aos="zoom-in-up" className="faq-question">
                    <input type="checkbox" id="question1" name="q"  className="questions"/>
                    <div className="plus">+</div>
                    <label htmlFor="question1" className="question">
                    What is FoodMoon NFT?
                    </label>
                    <div className="answers">
                    <p>Refer to the Whitepaper for more information.</p>
                    
                    </div>
                </div>

                <div data-aos="zoom-in-down">
                    <input type="checkbox" id="question2" name="q" className="questions"/>
                    <div className="plus">+</div>
                    <label htmlFor="question2" className="question">
                    What is Foodmoon’s total supply?
                    </label>
                    <div className="answers">
                    <p>In our first visit to the earth we are coming with a horde of 5,000 Intergalactic Pizzas.</p>
                    
                    </div>
                </div>

                <div data-aos="zoom-in-up">
                    <input type="checkbox" id="question3" name="q" className="questions"/>
                    <div className="plus">+</div>
                    <label htmlFor="question3" className="question">
                    Where will I be able to mint?
                    </label>
                    <div className="answers">
                    <p>The minting event will take place ONLY on our website, FoodMoon.io. You will be able to 
                      mint using ETH and a MetaMask wallet.</p>
                    
                    </div>
                </div>
                
                <div data-aos="zoom-in-down">
                    <input type="checkbox" id="question4" name="q" className="questions"/>
                    <div className="plus">+</div>
                    <label htmlFor="question4" className="question">
                    Which blockchain will you use?
                    </label>
                    <div className="answers">
                    <p>The Ethereum blockchain. We know for a fact that it has the most expensive gas but don't 
                      worry; we will implement smart technology to reduce gas fees.</p>
                    
                    </div>
                </div>
                
                <div data-aos="zoom-in-up">
                    <input type="checkbox" id="question5" name="q" className="questions"/>
                    <div className="plus">+</div>
                    <label htmlFor="question5" className="question">
                    When can I buy a FoodMoon NFT?
                    </label>
                    <div className="answers">
                    <p>You will be able to mint on our website on April 12th. Join our discord to obtain more
                         information about our launch date. </p>
                    
                    </div>
                </div>
                
                <div data-aos="zoom-in-down">
                    <input type="checkbox" id="question6" name="q" className="questions"/>
                    <div className="plus">+</div>
                    <label htmlFor="question6" className="question">
                    Is there a presale?
                    </label>
                    <div className="answers">
                    <p>Yes! Only 1000 terrestrials will be able to be a part of this special presale. Join our 
                      Discord to learn more.</p>
                    
                    </div>
                </div>
                    
                <div data-aos="zoom-in-up">
                    <input type="checkbox" id="question7" name="q" className="questions"/>
                    <div className="plus">+</div>
                    <label htmlFor="question7" className="question">
                    Will there be any Surprise Mint event?
                    </label>
                    <div className="answers">
                    <p>Due to the significant increase in scams, we want to inform you there will not be any 
                      surprise Mint event. The only way to mint is the day of the presale and afterwards in the 
                      public sale and only on our website FoodMoon.io. </p>
                    
                    </div>
                </div>

                <div data-aos="zoom-in-down">
                    <input type="checkbox" id="question8" name="q" className="questions"/>
                    <div className="plus">+</div>
                    <label htmlFor="question8" className="question">
                    Will there be any giveaways?
                    </label>
                    <div className="answers">
                    <p>Yes, we will be having multiple giveaways before and after the mint.</p>
                    
                    </div>
                </div>
                <img className='images faq-image' alt={"FoodMoon Faq"} src={faq}></img>
                </section>
            </div>

            <footer>
                <div className="header-options-new footer-fix">
                    <img className="header-logo-new fixed-footer" src={isotipo2}></img>
                    <nav className="options-footer">
                        <ul>
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://discord.gg/foodmoon" target="_blank"><img className="header-social-img-new" src={discord_icon}></img></a></li>
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://twitter.com/FoodMoon_NFT" target="_blank"><img className="header-social-img-new" src={twitter_icon}></img></a></li>
                            <li className="header-social-new-li"><a className="header-social-new-a" href="https://www.instagram.com/foodmoon.io/" target="_blank"><img className="header-social-img-new" src={instagram_icon}></img></a></li>
                        </ul>
                    </nav>
                    <li className="footer-options-new-li"><a className="footer-options-new-a" href="https://etherscan.io/address/0x3f68af3d9c4f338023080e07eae69ec368c2a9bd" target="_blank">Contract Address</a></li>
                    <br></br>
                    <a href="https://raritysniper.com/nft-drops-calendar" target="_blank"><img style={{ marginTop: "20px" }} src={raritysniper} alt="as seen on icy.tools" width="128" /></a>
                    <a href="https://icy.tools/calendar" target="_blank"> <img style={{ marginLeft: "20px" }} src="https://cdn.icy.tools/images/icy-tools-dark.svg" alt="as seen on icy.tools" width="128" /></a>
                    <p className="text-footer">©2022 FoodMoon NFT. All rights reserved.</p>
                    <p className="text-footer disclaimer">None of the information on this website (or Discord server) should 
                    be construed as providing legal or financial advice. Please note there are always risks 
                    associated with smart contracts. Please use at your own risk. FoodMoon is not a registered 
                    broker, analyst or investment advisor. If you are willing to, or have purchased FoodMoon, you 
                    agree that you are not purchasing a security or investment. The FoodMoon team can not be held 
                    liable for any losses or taxes you may incur. Do conduct your own due diligence and consult 
                    your financial advisor before making any investment decisions.</p>
                </div>
            </footer>
        </div>
    );
}

export default Web;
