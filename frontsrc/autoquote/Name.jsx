

import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
import Selector from '../secondaryelements/Selector';

  function Name(props){
      return(
          <>
          <Selector name="name" 
selector={props.userPack.methods.selector} userPack={props.userPack} options={[]}>
        <>
    <form className="generalForm" onSubmit={props.userPack.methods.next}>
      <div className="flexWrap">
      <div className="myRow center">
      <div className="myRow" style={{width:"55%",marginTop:"16px"}}>
        <GeneralField required={true} type="text" className="generalField" 
        value={props.userPack.data.firstName}
        onChange={props.userPack.methods.eventStateHandling}
      placeholder="First Name" ref={props.userPack.methods.newQuoteRef} name="firstName"/>
      </div>
      <div className="myRow" style={{width:"45%",paddingLeft:"20px",marginTop:"16px"}}>
      <GeneralField type="text" className="generalField" 
        value={props.userPack.data.middleName}
        onChange={props.userPack.methods.eventStateHandling}
      placeholder="Middle Name" ref={props.userPack.methods.newQuoteRef} name="middleName"/>
      </div>
      </div>
      <div className="myRow" style={{marginTop:"12px"}}>
      <GeneralField onClick={props.userPack.methods.next} type="text" className="generalField" value={props.userPack.data.lastName}
       placeholder="Last Name" ref={props.userPack.methods.newQuoteRef} name="lastName" onChange={props.userPack.methods.eventStateHandling}/>
      </div>
      <div className="myRow center" style={{marginTop:"12px"}}>
      <input  style={{minWidth:"200px"}}  className="blueBox center" type="submit" value="Continue"/>
      </div>
      </div>
      </form>
      </>
</Selector>
        {props.children}
        </>
      )
    }
  
  export default Name;