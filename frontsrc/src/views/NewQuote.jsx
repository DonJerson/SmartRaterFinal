import WhiteNavBar from "../elements/WhiteNavBar";
import Modal from "../elements/Modal";
import React,{Component} from 'react';
import {Link, navigate} from '@reach/router';
import Signature from "../elements/Signature";
import LoadingBar from "../secondaryelements/LoadingBar";
import PageSwitcher from "../secondaryelements/PageSwitcher";
import Elements from "../elements/Elements";
import SearchBar from "../secondaryelements/SearchBar";
import YesOrNo from "../secondaryelements/YesOrNo";
import Carriers from "../secondaryelements/Carriers";
import GeneralField from "../secondaryelements/GeneralField";
import Embellishment from "../secondaryelements/Embellishment";
function Body(props){
  const elements = new Elements();

  let myYears=[]
  for (let index = 0; index < 24; index++) {
    myYears.push(2021-index);
  }



  return(
      <>
      <h1>qloq</h1>


     {props.userPack.data.loading
     ?
     <>
      <div className="myRow center" style={{marginTop:"220px",height:"100px"}}>
       <div className="spinner">
    <div className="spinner-item"></div>
    <div className="spinner-item"></div>
    <div className="spinner-item"></div>
    <div className="spinner-item"></div>
    <div className="spinner-item"></div>
  </div>
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
            
            {/* <CurrentStep localPack={props.localPack} userPack={props.userPack}/> */}
            <div className="myRow center" style={{width:"82vw",marginTop:"-5px"}}>
              <span className="karlaBold textAlign" style={{width:"82vw",marginTop:"",fontSize:"28px"}}>{props.stepLine.label}

            </span>
           
          </div>
          <div className="flexWrap center" style={{marginTop:"20px"}}>
          {props.children}
          </div>
         
      </div>
      </div>
    </>
    }
    </>
  )
  
}

const AutoQuote = (props) => {
    const elements = new Elements();
    const [userPack,setUserPack] = React.useState({
        data:{
            loading:true,
        }});
    const autoSteps=['select-vehicle-vin', 'select-year', 'select-brand', 'select-model', 'select-additionalVehicles', 'select-accidents', 'select-insurance', 'select-dui', 'select-military', 'select-married', 'select-homeowner', 'select-name', 'select-dob', 'select-address', 'select-emailAddress', 'select-phoneNumber', 'select-additionalDrivers']
    const driverSteps=['select-driver-name0', 'select-driver-dob0', 'select-driver-phoneNumber0', 
    'select-driver-emailAddress0', 'select-driver-licenseNumber0']
    
    return(
        <>
              <WhiteNavBar userPack={props.userPack}/>
      <Body userPack={props.userPack} steps={props.steps} stepLine={props.stepLine}>
        {props.stepLine.component}
      </Body>
      <PageSwitcher userPack={props.userPack}/>
      <Embellishment/>
      <Carriers/>
      <Signature userPack={props.userPack}/>
        </>

    )
    }
export default AutoQuote;