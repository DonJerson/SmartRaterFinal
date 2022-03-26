

import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
import SubmitButton from '../secondaryelements/SubmitButton';

  function DriverName(props){
      return(
          <>
    <form className="generalForm" onSubmit={props.userPack.methods.next} name={"driverPhoneNumber"+props.index}>
    <GeneralField required={true} type="text" className="generalField" value={props.data["driverPhoneNumber"+props.index]}
    onChange={props.userPack.methods.eventStateHandling}
  placeholder="Phone Number" ref={props.userPack.methods.newQuoteRef} name={"driverPhoneNumber"+props.index}/>
  <SubmitButton/>
  </form>
        {props.children}
        </>
      )
    }
  
  export default DriverName;