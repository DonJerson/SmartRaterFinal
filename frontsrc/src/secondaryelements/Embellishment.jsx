import React from 'react';
  
  function Embellishment(props){
      return(
        <>
        <div className="myRow center" style={{marginTop:"5rem"}}>
        <div className="center" style={{width:"75vw"}}>
        <svg className="relative" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="12.5" fill="#4BC350"/>
            <path d="M11.3918 16.2164C11.2992 16.2161 11.2076 16.1967 11.1227 16.1595C11.0379 16.1223 10.9616 16.0681 10.8986 16.0001L7.61479 12.5069C7.49204 12.3761 7.42628 12.2019 7.43198 12.0226C7.43768 11.8433 7.51438 11.6736 7.6452 11.5508C7.77601 11.4281 7.95023 11.3623 8.12953 11.368C8.30883 11.3737 8.47853 11.4504 8.60128 11.5812L11.3851 14.5474L17.0675 8.33122C17.1252 8.25941 17.1969 8.20015 17.2783 8.15707C17.3597 8.114 17.4491 8.08802 17.5409 8.08073C17.6327 8.07344 17.725 8.085 17.8122 8.1147C17.8994 8.14439 17.9795 8.1916 18.0478 8.25341C18.1161 8.31523 18.171 8.39034 18.2092 8.47415C18.2474 8.55796 18.268 8.64869 18.2699 8.74077C18.2717 8.83285 18.2547 8.92433 18.2199 9.0096C18.1851 9.09487 18.1332 9.17213 18.0675 9.23662L11.8918 15.9934C11.8294 16.0625 11.7534 16.118 11.6685 16.1564C11.5836 16.1948 11.4917 16.2152 11.3986 16.2164H11.3918Z" fill="white"/>
        </svg>

        <p className="karlaRegular relative" style={{fontSize:"15px",marginLeft:"16px",maxWidth:"80%"}}>Tell us what car you drive and we’ll get the best insurance rates for you!</p>
        </div>
        </div>
        {props.children}
        </>
      )
    }
  
  export default Embellishment;