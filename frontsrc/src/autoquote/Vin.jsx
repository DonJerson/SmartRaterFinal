import React from 'react';
import GeneralField from '../secondaryelements/GeneralField';
  
  function Vin(props){
    const [error,setError]=React.useState('')

    const next=(e)=>{
      e.preventDefault();
      e.stopPropagation();
      if(props.userPack.data.vin.length==17){
      props.userPack.methods.flyOutEffect(`/autoquote/${props.userPack.quoteSteps[props.userPack.data.step+3]}`,props.userPack.data.step+3)
    }else{setError('VIN must be 17 characters long ('+(17-props.userPack.data.vin.length)+' missing)')}
  }
      return(
          <>
                <div className="myRow center">
      <div className="bodyText textAlign" style={{color:"red"}}>{error}</div>
      </div>
       <form className="generalForm" onSubmit={next}  style={{marginTop:"12px"}}>
        <GeneralField required={true} type="text" className="generalField" value={props.userPack.data.vin}
         onChange={props.userPack.methods.eventStateHandling}
      placeholder="VIN" ref={props.userPack.methods.newQuoteRef} name="vin"/>
      {//* Show text describing vin and its location *//
     }
      <div className="myRow center" style={{marginTop:"12px"}}>
      <div className="bodyText textAlign">The VIN identifies your car. It can be found from outside of the car on the driverside-bottom corner of the windshield</div>
      </div> 
      <div className="myRow center" style={{marginTop:"12px"}}>
          <input style={{minWidth:"200px"}} className="blueBox center"
           type="submit" value="Continue"/>
          </div>
      {/* <div className="myRow center" style={{marginTop:"12px"}}>
      <div className="bodyText textAlign">Don't have access to your car ATM?</div>
      </div>
      <div className="myRow center" style={{marginTop:"12px"}}>
      <input onClick={()=>{}} style={{minWidth:"200px"}} 
       className="blueBox center" type="submit" value="Continue without VIN"/>
      </div> */}
      </form>
        {props.children}
        </>
      )
    }
  
  export default Vin;