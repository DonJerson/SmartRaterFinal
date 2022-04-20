

import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
import Selector from '../secondaryelements/Selector';

  function DriverName(props){
      return(
          <>
          <Selector name="name" 
selector={props.userPack.methods.selector} userPack={props.userPack} options={[]}>
        <>
    <form className="generalForm" onSubmit={props.userPack.methods.next}>
      <div className="flexWrap">
      <div className="myRow" style={{marginTop:"16px"}}>
        <GeneralField required={true} type="text" className="generalField" value={props.data.firstName}
        onChange={props.userPack.methods.eventStateHandling}
      placeholder="First Name" ref={props.userPack.methods.newQuoteRef} name="firstName"/>
      </div>
      <div className="myRow" style={{marginTop:"12px"}}>
      <GeneralField onClick={props.userPack.methods.next} type="text" className="generalField" value={props.data.lastName}
       placeholder="Last Name" ref={props.userPack.methods.newQuoteRef} name="lastName" onChange={props.userPack.methods.eventStateHandling}/>
      </div>
      <div className="myRow center" style={{marginTop:"12px"}}>
      <input  style={{minWidth:"200px"}} onClick={props.userPack.methods.next} className="blueBox center" type="submit" value="Continue"/>
      </div>
      </div>
      </form>
      </>
</Selector>
        {props.children}
        </>
      )
    }
  
  export default DriverName;