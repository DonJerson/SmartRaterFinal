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
            <div className="loadingBarOuter flexStart" style={{width:props.width*0.8+"px"}}>
                <div className="loadingBarInner center" style={{width:props.width*0.8*percentage+"px"}}>
                    <p className="karlaBold" style={{color:"white"}}>{Math.round(percentage*100)}% Complete</p>
                </div>
            </div>
        </div>
        {props.children}
        </>
      )
    }
  
  export default LoadingBar;