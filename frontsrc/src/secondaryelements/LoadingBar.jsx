import React from 'react';
  
  function LoadingBar(props){
      let percentage
      percentage=props.userPack.data.step<8
      &&props.userPack.data.step>0?0.2*1*props.userPack.data.step/
      (4*props.userPack.data.step)+
      props.userPack.data.step/props.userPack.quoteSteps.length:
      props.userPack.data.step/props.userPack.quoteSteps.length
      if(props.userPack.data.step===0){
        percentage=0.07
      }
      return(
        <>
        <div className="myRow center">
          {props.userPack.data.step===0?
          <>
          </>
          :
          <div onClick={props.userPack.methods.previousStep}>
          <svg width="16" style={{marginRight:"10px"}} height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.96252 13.5L15.1076 24.6424C15.3599 24.8947 15.5017 25.2369 15.5017 25.5937C15.5017 25.9506 15.3599 26.2928 15.1076 26.5451C14.8553 26.7974 14.513 26.9392 14.1562 26.9392C13.7994 26.9392 13.4572 26.7974 13.2048 26.5451L1.11109 14.4514C0.985947 14.3265 0.886663 14.1783 0.818921 14.015C0.751179 13.8517 0.716309 13.6767 0.716309 13.5C0.716309 13.3232 0.751179 13.1482 0.818921 12.985C0.886663 12.8217 0.985947 12.6734 1.11109 12.5486L13.2048 0.454863C13.4572 0.202543 13.7994 0.060791 14.1562 0.060791C14.513 0.060791 14.8553 0.202543 15.1076 0.454863C15.3599 0.707183 15.5017 1.0494 15.5017 1.40624C15.5017 1.76307 15.3599 2.10529 15.1076 2.35761L3.96252 13.5Z" fill="black"/>
  </svg></div>
          }



            <div className="loadingBarOuter flexStart" style={{width:props.width*0.8+"px"}}>
                <div className="loadingBarInner center" style={{width:props.width*0.8*percentage+"px"}}>
                    <p className="karlaBold" style={{color:"white"}}>{Math.round(percentage*100)}% Complete</p>
                </div>
            </div>
            <div onClick={props.userPack.methods.nextStep}>
            <svg width="16" style={{marginLeft:"10px"}} height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2555 13.5L1.11043 2.35764C0.85811 2.10532 0.716359 1.7631 0.716359 1.40626C0.716358 1.04943 0.85811 0.707209 1.11043 0.454888C1.36275 0.202568 1.70497 0.0608168 2.06181 0.0608167C2.41864 0.0608167 2.76086 0.202568 3.01318 0.454888L15.1069 12.5486C15.2321 12.6735 15.3314 12.8217 15.3991 12.985C15.4668 13.1483 15.5017 13.3233 15.5017 13.5C15.5017 13.6768 15.4668 13.8518 15.3991 14.015C15.3314 14.1783 15.2321 14.3266 15.1069 14.4514L3.01318 26.5451C2.76086 26.7975 2.41864 26.9392 2.06181 26.9392C1.70497 26.9392 1.36275 26.7975 1.11043 26.5451C0.858112 26.2928 0.716361 25.9506 0.716361 25.5938C0.716361 25.2369 0.858112 24.8947 1.11043 24.6424L12.2555 13.5Z" fill="black"/>
</svg></div>

        </div>

        {props.children}
        </>
      )
    }
  
  export default LoadingBar;