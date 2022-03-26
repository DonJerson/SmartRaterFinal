import React from 'react';
import Selector from '../secondaryelements/Selector';
import GeneralField from '../secondaryelements/GeneralField';
import SubmitButton from '../secondaryelements/SubmitButton';

  function Empty(props){
      return(
        <>
         <Selector name="dob" 
    selector={props.userPack.methods.selector} userPack={props.userPack} 
    options={[]} >
      <form className="generalForm" onSubmit={props.userPack.methods.saveData}>
      <GeneralField required={true} type="date" value={props.userPack.data.dob}
       onChange={props.userPack.methods.eventStateHandling}  className="generalField" name="dob"/>
      <SubmitButton next={props.userPack.methods.next}/>
      </form>
    </Selector>
        {props.children}
        </>
      )
    }
  
  export default Empty;