import React from 'react';
import { Link } from "@reach/router";

function BlackTitle(props){
    return(
      <>
      <Link to='/'  style={{width:"auto"}}>
      <div className="center link" style={{width:"auto"}}>
      <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6852 4.14481C15.3268 4.14481 10.81 0.236628 10.7653 0.197476C10.4651 -0.0658253 10.0075 -0.0658253 9.70735 0.197476C9.66236 0.236933 5.15743 4.14481 0.78741 4.14481C0.35255 4.14481 0 4.48586 0 4.90653V14.0288C0 21.4187 5.68174 24.3716 9.95548 25.9499C10.0459 25.9834 10.1411 26 10.2363 26C10.3316 26 10.4267 25.9833 10.5172 25.9499C16.5096 23.7369 20.4727 20.2848 20.4727 14.0288V4.90653C20.4727 4.48586 20.1201 4.14481 19.6852 4.14481Z" fill="url(#paint0_linear_1065_1109)"/>
<path d="M10.2363 7.66797C7.19708 7.66797 4.72446 10.0599 4.72446 13C4.72446 15.9401 7.19708 18.332 10.2363 18.332C13.2756 18.332 15.7482 15.9401 15.7482 13C15.7482 10.0599 13.2756 7.66797 10.2363 7.66797ZM12.3679 12.7769L10.0057 15.062C9.85196 15.2108 9.65044 15.2852 9.44892 15.2852C9.24739 15.2852 9.04587 15.2108 8.89216 15.062L8.10475 14.3003C7.79724 14.0028 7.79724 13.5206 8.10475 13.2231C8.41221 12.9256 8.9108 12.9256 9.21831 13.2231L9.44897 13.4462L11.2544 11.6996C11.5619 11.4022 12.0605 11.4022 12.368 11.6996C12.6755 11.9971 12.6755 12.4794 12.3679 12.7769Z" fill="url(#paint1_linear_1065_1109)"/>
<defs>
<linearGradient id="paint0_linear_1065_1109" x1="10.2363" y1="26" x2="10.2363" y2="-1.23978e-05" gradientUnits="userSpaceOnUse">
<stop stopColor="#00B59C"/>
<stop offset="1" stopColor="#9CFFAC"/>
</linearGradient>
<linearGradient id="paint1_linear_1065_1109" x1="10.2363" y1="18.332" x2="10.2363" y2="7.66797" gradientUnits="userSpaceOnUse">
<stop stopColor="#C3FFE8"/>
<stop offset="0.9973" stopColor="#F0FFF4"/>
</linearGradient>
</defs>
</svg>

  
      <div style={{width: "0.8rem",}}/>
      <p className="mainTitleBlack" style={{lineHeight: '100%', color: 'black',}}>Smart Rater</p>
  </div>
  </Link>
      {props.children}
      </>
    )
  }
  
  
  export default BlackTitle;