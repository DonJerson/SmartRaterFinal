

import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
import SubmitButton from '../secondaryelements/SubmitButton';

  function DriverDob(props){
      return(
          <>
    <form className="generalForm" onSubmit={props.userPack.methods.next} name={"driverDob"+props.index}>
    <GeneralField required={true} type="date" className="generalField" value={props.data["driverDob"+props.index]}
    onChange={props.userPack.methods.eventStateHandling}
  placeholder="Date Of Birth" ref={props.userPack.methods.newQuoteRef} name={"driverDob"+props.index}/>
  <SubmitButton/>
  </form>
        {props.children}
        </>
      )
    }
  
  export default DriverDob;