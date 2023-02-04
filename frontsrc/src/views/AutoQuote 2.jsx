import WhiteNavBar from "../elements/WhiteNavBar";
import React from 'react';
import Signature from "../elements/Signature";
import LoadingBar from "../secondaryelements/LoadingBar";
import PageSwitcher from "../secondaryelements/PageSwitcher";
import Embellishment from "../secondaryelements/Embellishment";
import Carriers from "../secondaryelements/Carriers";
import GetElement from "../elements/GetElement";

function Body(props){
  let myYears=[]
  for (let index = 0; index < 24; index++) {
    myYears.push(2021-index);
  }
  let label=props.elements.labels[props.userPack.data.step]
  if(props.elements.paths[props.userPack.data.step]=="select-additionalVehicles"){
    if(props.userPack.data.additionalVehicleStep==1){
    label=props.userPack.data.vehicleLabel}
    else{
      label="Do You Have Any Additional Vehicles?"}
  }
  if(props.elements.paths[props.userPack.data.step]=="select-additionalDrivers"){
    if(props.userPack.data.additionalDriverStep==1){
      label=props.userPack.data.driverLabel}
      else{
        label="Do You Have Any Additional Drivers?"}
  }
  
  //console.log("llega rendered",props.userPack.data.loading)
  return(
      <>
     {props.userPack.data.loading
     ?
     <>
      <div className="myRow center" style={{height:"50vh",width:"100vw"}}>
        <div className="lds-roller" style={{marginTop:"22vh"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
     </>
     :
     <>
      <div className="myRow center">
        <span className="" style={{marginTop:"100px",fontSize:"20px",
          width:"90vw !important",backgrouncColor:"black",color:"#000000"}}>
          Compare Insurance Rates in Florida</span>
      </div>

      <div className="myRow center" style={{marginTop:"12px"}}>
          <LoadingBar userPack={props.userPack} width={props.userPack.dimensions.width} percentage={0.84}/>
      </div>
      {props.userPack.data.step<3?
      <>
       <div className="myRow center">
      <div className="myRow center" style={{width:"82vw",marginTop:"12px"}}>
      <span className="textAlign" style={{marginTop:"10px",fontSize:"28px",
        width:"60vw !important",backgrouncColor:"black",color:"#000000"}}>
          Let’s Get Started!
          </span>
          </div>
          </div>
      </>
      :<></>}

      <div className="myRow center" style={{marginTop:"26px"}}>
          <div className="flexWrap center" id="myBox" style={{width:"540px"}}>
            
            <div className="myRow center" style={{width:"82vw",marginTop:"-5px"}}>
              <span className="karlaBold textAlign" style={{width:"82vw",marginTop:"",fontSize:"28px"}}>
                {label}
              </span>
          </div>
          <div className="flexWrap center" style={{marginTop:"20px"}}>
          <GetElement userPack={props.userPack} quoteType={props.userPack.quoteType} 
          data={props.userPack.newQuote}/>
          </div>
      </div>
      </div>
    </>
    }
    </>
  )
}

const NewQuote = (props) => {

    return (
      <>
        <WhiteNavBar userPack={props.userPack}/>
        <Body userPack={props.userPack} elements={props.elements} steps={props.steps} stepLine={props.stepLine}/>
        <PageSwitcher userPack={props.userPack}/>
        <Embellishment/>
        <Carriers/>
        <Signature userPack={props.userPack}/>
      </>
    );
}
 
export default NewQuote;