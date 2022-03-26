

import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
import SubmitButton from '../secondaryelements/SubmitButton';

  function DriverName(props){
      return(
          <>
    <form className="generalForm" onSubmit={props.userPack.methods.next} name={"driverEmailAddress"+props.index}>
    <GeneralField required={true} type="email" className="generalField" value={props.data["driverEmailAddress"+props.index]}
    onChange={props.userPack.methods.eventStateHandling}
  placeholder="Email Address" ref={props.userPack.methods.newQuoteRef} name={"driverEmailAddress"+props.index}/>
  <SubmitButton/>
  </form>
        {props.children}
        </>
      )
    }
  
  export default DriverName;