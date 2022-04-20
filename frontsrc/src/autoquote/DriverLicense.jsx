

import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
import SubmitButton from '../secondaryelements/SubmitButton';

  function DriverName(props){
    const next = () => {
      props.userPack.refs.resultsRef.current.click();}
      return(
          <>
    <form className="generalForm" onSubmit={props.userPack.methods.lastDriver} name={"driverLicenseNumber"+props.index}>

<GeneralField required={true} type="text" className="generalField" value={props.data["driverLicenseNumber"+props.index]}
onChange={props.userPack.methods.eventStateHandling}
placeholder="License Number" ref={props.userPack.methods.newQuoteRef} name={"driverLicenseNumber"+props.index}/>
<SubmitButton next={next}/>
</form>
        {props.children}
        </>
      )
    }
  
  export default DriverName;