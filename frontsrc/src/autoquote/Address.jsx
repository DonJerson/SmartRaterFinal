

import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
  function Address(props){
      return(
<>
<form className="generalForm" onSubmit={props.userPack.methods.next}>
  <div className="flexWrap center">
  <div className="addressGridLine1" style={{marginTop:"16px"}}>
    <GeneralField required={true} type="text" className="generalField" value={props.userPack.data.address1}
    onChange={props.userPack.methods.eventStateHandling}
  placeholder="Address" ref={props.userPack.methods.newQuoteRef} name="address1"/>
  
    <GeneralField type="text" className="generalField" value={props.userPack.data.address2}
    onChange={props.userPack.methods.eventStateHandling}
  placeholder="Unit" ref={props.userPack.methods.newQuoteRef} name="address2"/>
  </div>
  <div className="addressGridLine2" style={{marginTop:"12px"}}>
  <GeneralField required={true} onClick={props.userPack.methods.next} type="text" className="generalField" value={props.data.city}
   placeholder="City" ref={props.userPack.methods.newQuoteRef} name="city" onChange={props.userPack.methods.eventStateHandling}/>
 

 
  <GeneralField required={true} onClick={props.userPack.methods.next} type="text" className="generalField" value={props.data.state}
   placeholder="State" ref={props.userPack.methods.newQuoteRef} name="state" onChange={props.userPack.methods.eventStateHandling}/>
   


 <GeneralField required={true} onClick={props.userPack.methods.next} type="text" className="generalField" value={props.data.zipcode}
  placeholder="Zipcode" ref={props.userPack.methods.newQuoteRef} name="zipcode" onChange={props.userPack.methods.eventStateHandling}/>
  
 </div>
  <div className="myRow center" style={{marginTop:"12px"}}>
  <input  style={{minWidth:"200px"}}  className="blueBox center" type="submit" value="Continue"/>
  </div>
  </div>
  </form>
  </>
      )
    }
  
  export default Address;