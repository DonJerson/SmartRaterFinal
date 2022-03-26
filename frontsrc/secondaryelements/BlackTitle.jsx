import React from 'react';
import { Link } from "@reach/router";

function BlackTitle(props){
    return(
      <>
      <Link to='/'  style={{width:"auto"}}>
      <div className="center link" style={{width:"auto"}}>
      <svg width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28.3594 6.05779C22.1972 6.05779 15.8111 0.345841 15.7479 0.288618C15.3234 -0.096206 14.6765 -0.096206 14.2521 0.288618C14.1885 0.346286 7.81919 6.05779 1.64062 6.05779C1.0258 6.05779 0.527344 6.55624 0.527344 7.17107V20.5036C0.527344 31.3042 8.56048 35.62 14.6029 37.9268C14.7308 37.9756 14.8654 38 15 38C15.1346 38 15.2692 37.9756 15.3971 37.9268C23.8694 34.6923 29.4727 29.647 29.4727 20.5036V7.17107C29.4727 6.55624 28.9742 6.05779 28.3594 6.05779Z" fill="url(#paint0_linear)"/>
  <path d="M15 11.207C10.703 11.207 7.20703 14.703 7.20703 19C7.20703 23.297 10.703 26.793 15 26.793C19.297 26.793 22.793 23.297 22.793 19C22.793 14.703 19.297 11.207 15 11.207ZM18.0137 18.6739L14.6739 22.0137C14.4566 22.2311 14.1716 22.3398 13.8867 22.3398C13.6018 22.3398 13.3169 22.2312 13.0996 22.0137L11.9863 20.9004C11.5515 20.4657 11.5515 19.7608 11.9863 19.326C12.421 18.8913 13.1259 18.8913 13.5607 19.326L13.8868 19.6521L16.4395 17.0995C16.8742 16.6647 17.5791 16.6647 18.0139 17.0995C18.4486 17.5343 18.4486 18.2391 18.0137 18.6739Z" fill="url(#paint1_linear)"/>
  <defs>
  <linearGradient id="paint0_linear" x1="15" y1="38" x2="15" y2="-1.81198e-05" gradientUnits="userSpaceOnUse">
  <stop stopColor="#00B59C"/>
  <stop offset="1" stopColor="#9CFFAC"/>
  </linearGradient>
  <linearGradient id="paint1_linear" x1="15" y1="26.793" x2="15" y2="11.207" gradientUnits="userSpaceOnUse">
  <stop stopColor="#C3FFE8"/>
  <stop offset="0.9973" stopColor="#F0FFF4"/>
  </linearGradient>
  </defs>
  </svg>
  
      <div style={{width: "0.8rem",}}/>
      <p className="mainTitleBlack" style={{width: 231, height: 26, lineHeight: '100%', color: 'black',}}>Smart Rater</p>
  </div>
  </Link>
      {props.children}
      </>
    )
  }
  
  
  export default BlackTitle;