import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
import SubmitButton from '../secondaryelements/SubmitButton';
  function EmailAddress(props){
      return(
          <>
        <form className="generalForm" onSubmit={props.userPack.methods.next} name="email">
        <GeneralField required={true} type="email" onChange={props.userPack.methods.eventStateHandling}
        className="generalField" value={props.data.email} name="email" placeholder="Email Address"/>
        <SubmitButton/>
        </form>
        </>
        )
        
      }  export default EmailAddress;
      