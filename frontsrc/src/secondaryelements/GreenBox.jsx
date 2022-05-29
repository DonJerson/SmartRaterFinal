import React from 'react';
  
  function GreenBox(props){
      return(
        <>
        <div className='greenBoxSizing'>
  <div className={props.smallBox?"greenBoxOutter smallBox":"greenBoxOutter"}>
      <div className="greenBoxTop">
        <div className="myRow flexStart" style={{gap:"10px"}}>
          {props.checkMark?
          <></>
:

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="white"/>
<path d="M9.11185 13.4731H9.11345H9.11886V13.4731L9.12508 13.473C9.26852 13.4713 9.41004 13.4398 9.54076 13.3807C9.67091 13.3219 9.78755 13.2369 9.88341 13.1311C9.88383 13.1306 9.88425 13.1301 9.88467 13.1297L14.8154 7.73506C14.9113 7.63803 14.9873 7.52304 15.0389 7.39662C15.0924 7.2653 15.1186 7.12442 15.1158 6.98261C15.113 6.84081 15.0812 6.70109 15.0224 6.57202C14.9635 6.44295 14.879 6.32727 14.7738 6.23208C14.6687 6.13689 14.5452 6.06419 14.411 6.01846C14.2767 5.97273 14.1345 5.95493 13.9931 5.96615C13.8517 5.97737 13.7141 6.01738 13.5888 6.08372C13.4689 6.14715 13.3626 6.23339 13.2759 6.33751L9.10322 10.9022L7.24563 8.92284C7.24563 8.92283 7.24562 8.92282 7.24561 8.92281C7.05667 8.72147 6.79549 8.60343 6.51952 8.59466C6.24354 8.58588 5.97537 8.6871 5.77402 8.87604C5.57267 9.06498 5.45462 9.32617 5.44584 9.60215C5.43706 9.87813 5.53828 10.1463 5.72722 10.3477L5.72753 10.348L8.3536 13.1416C8.45036 13.2455 8.56737 13.3285 8.69744 13.3855C8.82811 13.4428 8.96917 13.4726 9.11185 13.4731Z" fill="#0FBC9D" stroke="#0FBC9D"/>
</svg>

        }


        <div  className={props.smallBox?"smallGreenTitle":"greenBoxTitle"}>{props.title?props.title:"Title"}</div>
        </div>
        
      </div>
      <div className="greenInnerContent">
        {props.children}
      </div>
      
  </div>
  </div>
        </>
      )
    }
  
  export default GreenBox;
