import React from 'react';
import { Link } from "@reach/router";
function InnsuranceLanding(props){
  // let subTitle4 =
  // {...props.userPack.dimensions.width>600?"flexEnd":"center"

    return(
      <>
  
      <div className="div" style={{height:"100%",width:"100%",overflow:"hidden"}}>
      
      <svg style={{position:"absolute",zIndex:"1"}} width="100%" preserveAspectRatio="none"
       height="720" viewBox={"0 0 1285 800"} fill="none" xmlns="http://www.w3.org/2000/svg">
        {props.userPack.dimensions.width<600?
       <path d="M211.412 701.696C84.5575 718.418 41.7381 710.235 1 684.338V1H1284V743C1284 743 1184.56 716.854 1083.85 716.854C963.918 716.854 955.45 731.203 838.799 728.86C745.679 726.991 707.63 712.617 610.425 701.696C394.997 677.492 346.322 683.909 214.001 701.354L211.412 701.696Z" fill="#0F1B26" stroke="black"/>
        :
        <path d="M279.629 701.674C152.774 718.396 41.7381 682.826 1 656.929V1H1284V742.977C1284 742.977 1227.17 706.253 1128.09 699.216C1033.94 692.529 903.274 763.137 903.274 763.137C903.274 763.137 849.985 792.889 783.575 763.137C606.35 683.74 413.914 683.973 279.629 701.674Z" fill="#0F1B26" stroke="black"/>
        }
  
  
  
  </svg>
    
  <div className="row center" style={{zIndex:"2",height:"100%",
  paddingTop:"120px",marginLeft:"0px"}}>
  
  <div className="col-12 col-xl-7" style={{zIndex:"2"}}>
  <div className="col-12 center textAlign">
  <p className="title1" style={{width: 659.86, 
 fontSize: 74, fontWeight: '700', 
    lineHeight: '100%',color:"white",paddingBottom:props.userPack.dimensions.width<930?"0rem":"1rem"}}>
      Get Insured, Pay
     <span className="green1"> LESS</span>
     </p>
      <div style={{height: props.userPack.dimensions.width<600?0:40}}/>
  </div>
  <div className="col-12 center" style={{marginTop:"50px"}}>
    <Link to='freequote'>
  <div className="button1" >
         
  <p className="butonText" style={{fontSize: 18, fontWeight: '700', lineHeight: '100%', color: 'white',}}>GET A FREE QUOTE</p>
     </div>
     </Link>
  </div>
  <div style={{height: 30,}}/>
      <div className="col-12  center">
      <div className="button2 center" onClick={props.switcher}>
          
              <p className="butonText" style={{fontSize: 18, fontWeight: '700', lineHeight: '100%', color: 'white',}}>SPEAK WITH A SPECIALIST</p>
      </div>
      </div>
  
  </div>
  <div className="col-12 col-xl-5 center" style={{zIndex:"2", display:props.userPack.dimensions.width<1400?"none":"block"}}>
          
  <svg width="448" height="439" viewBox="0 0 448 439" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="223.992" cy="219.5" rx="223.992" ry="219.5" fill="#1C2834"/>
  <g clipPath="url(#clip0)">
  <path d="M327.226 119.817C279.816 119.817 230.684 75.8705 230.197 75.4303C226.931 72.4695 221.954 72.4695 218.689 75.4303C218.199 75.8739 169.196 119.817 121.66 119.817C116.929 119.817 113.095 123.652 113.095 128.382V230.958C113.095 314.055 174.899 347.26 221.388 365.007C222.372 365.383 223.407 365.57 224.443 365.57C225.479 365.57 226.514 365.383 227.498 365.007C292.682 340.122 335.791 301.305 335.791 230.958V128.382C335.791 123.652 331.956 119.817 327.226 119.817Z" fill="url(#paint0_linear)"/>
  <path d="M224.443 159.433C191.383 159.433 164.486 186.33 164.486 219.39C164.486 252.45 191.383 279.347 224.443 279.347C257.503 279.347 284.4 252.45 284.4 219.39C284.4 186.33 257.503 159.433 224.443 159.433ZM247.63 216.881L221.934 242.577C220.262 244.249 218.07 245.086 215.878 245.086C213.686 245.086 211.493 244.25 209.821 242.577L201.256 234.011C197.911 230.666 197.911 225.244 201.256 221.899C204.601 218.553 210.024 218.553 213.369 221.899L215.878 224.407L235.518 204.768C238.862 201.423 244.286 201.423 247.631 204.768C250.975 208.113 250.975 213.536 247.63 216.881Z" fill="url(#paint1_linear)"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear" x1="224.443" y1="365.57" x2="224.443" y2="73.2096" gradientUnits="userSpaceOnUse">
  <stop stopColor="#00B59C"/>
  <stop offset="1" stopColor="#9CFFAC"/>
  </linearGradient>
  <linearGradient id="paint1_linear" x1="224.443" y1="279.347" x2="224.443" y2="159.433" gradientUnits="userSpaceOnUse">
  <stop stopColor="#C3FFE8"/>
  <stop offset="0.9973" stopColor="#F0FFF4"/>
  </linearGradient>
  <clipPath id="clip0">
  <rect width="292.361" height="292.361" fill="white" transform="translate(78.2625 73.2096)"/>
  </clipPath>
  </defs>
  </svg>
  
  
  </div>

  
  </div>
  <div className={"myRow ".concat(props.userPack.dimensions.width>1399?"flexEnd":"center")} style={{marginTop:"8px"}}>
  <p className="subtitle4"
   style={{fontSize:"24px",color:"white",
  fontFamily: 'Karla', fontStyle: 'normal',fontWeight: 700, fontWize: '26px',
  lineHeight: '30px',fontWeight:1000,zIndex:1,paddingRight:"20px",paddingTop:"35px"}}>
    Find affordable  <span style={{color: "#1BC19E"}}>HOME
    </span>,  <span style={{color: "#1BC19E"}}>AUTO</span>, <span style={{color: "#1BC19E"}}>LIFE
    </span> and <span style={{color: "#1BC19E"}}>HEALTH</span> coverage</p>
  </div>
  </div>
    <div className="center" style={{marginTop:"15rem",overflow:"hidden"}}>
    <p className="title2 karlaBold" style={{minWidth: "80vw",
     textAlign: 'center', color: 'black',}}>
       Powered with Cloud Computing and AI, get dozens of insurance quotes in seconds</p>
    </div>
    {/* <div className="center" style={{marginTop:props.userPack.dimensions.width<900?"70px":"30px",overflow:"hidden"}}>
    <p className="body1 karlaRegular" style={{minWidth: "80vw", textAlign: 'center',
     color: 'black',}}>
       Enter your zipcode and begin quoting now </p>
    </div> */}

    {/* <div className="row center" style={{marginLeft:"0px",marginTop:"0px",overflow:"hidden"}}>
   
    <div  style={{width: 318.75}}>
    <select className="myRectangle" style={{width: 318.75}}>
      <option value="Auto">Auto</option>
      <option value="Auto">Home</option>
      <option value="Auto">Life</option>
      <option value="Auto">Health</option>
      <option value="Auto">Medicare</option>
      <option value="Auto">Commercial</option>
      
    </select>
  </div>
  <div style={{width:"1rem"}}></div>
  <div className="myRectangle center"  style={{position:"relative",width:145.34}}>
  <svg style={{position:"absolute", left:"8px"}}width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.28459 2C7.35259 2 5.49973 2.74364 4.13361 4.06733C2.76748 5.39102 2 7.18632 2 9.0583C2 10.7276 2.36605 11.8199 3.36586 13.0286L9.28459 19.6458L15.2033 13.0286C16.2031 11.8199 16.5692 10.7276 16.5692 9.0583C16.5692 7.18632 15.8017 5.39102 14.4356 4.06733C13.0694 2.74364 11.2166 2 9.28459 2V2Z" fill="#549DE3" stroke="#549DE3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.28458 11.705C10.7933 11.705 12.0163 10.52 12.0163 9.0582C12.0163 7.5964 10.7933 6.41138 9.28458 6.41138C7.77589 6.41138 6.55286 7.5964 6.55286 9.0582C6.55286 10.52 7.77589 11.705 9.28458 11.705Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    <input type="text" className="invisibleInput" style={{width:80,marginLeft:"4px"}} placeholder="33467">
      
    </input>


  </div>

<div style={{width:"1rem"}}></div>

  <div className="pinkButton center" ><Link to='/freequote'>
          <p className="pinkButtonTitle">Get Quotes</p></Link>
        </div>
    </div> */}
    <div className="row center" style={{marginLeft:"0px",marginTop:"55px",overflow:"hidden"}}>
    <div className="col-12 center" >
    <Link to='freequote'>
  <div className="button1">
         
         <p className="buttonText" style={{color: 'white',}}>GET A FREE QUOTE</p>
     </div>
     </Link>
  </div>
    </div>
      {props.children}
      </>
    )
  }
  
  export default InnsuranceLanding;