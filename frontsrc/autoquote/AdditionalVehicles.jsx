import {React,Component} from 'react';
import Selector from '../secondaryelements/Selector';
import GeneralField from '../secondaryelements/GeneralField';
import { waitFor } from '@testing-library/react';
  
  function Vin(props){
   
    const nextStep =(e)=>{
      e.preventDefault();e.stopPropagation()
      //console.log("cosas deberian suceder",props.userPack.data[props.name],props.userPack.data[props.name].length)
      if(props.userPack.data.vehicleAmount===props.localPack.innerVehicle+1){
        props.userPack.methods.next(e);
        props.localPack.methods.setLocalPath({step:0,innerVehicle:1,error:''});
        let neoData={...props.userPack.data}
        neoData.additionalVehicleStep=0
        props.userPack.methods.stateHandling("data",neoData)
      }else{
      if(props.userPack.data[props.name].length==17){
      props.localPack.methods.updateLocalPack("innerVehicle",(props.localPack.innerVehicle+1));
      let neoData={...props.userPack.data}

     
      neoData.vehicleLabel="What is the VIN of vehicle "+(props.localPack.innerVehicle+2)+"?"
      props.userPack.methods.stateHandling("data",neoData)
      props.localPack.methods.updateLocalPack("innerVehicle",(props.localPack.innerVehicle+1));
      //props.userPack.methods.setAdditionalVehs(props.localPack.step+1);
  }else{
    props.localPack.methods.updateLocalPack("error",'VIN must be 17 characters long ('+(17-props.userPack.data[props.name].length)+' missing)')
  }}
    // const nextStep=()=>{
      

    // }}
   }
      return(
          <>
                          <div className="myRow center">
      <div className="bodyText textAlign" style={{color:"red"}}>{props.localPack.error}</div>
      </div>
       <form className="generalForm" style={{marginTop:"12px"}}onSubmit={nextStep}>
        <GeneralField required={true} type="text" className="generalField" 
        value={props.userPack.data[props.name]}
         onChange={props.userPack.methods.eventStateHandling}
      placeholder="VIN" ref={props.userPack.methods.newQuoteRef} name={props.name}/>
      {//* Show text describing vin and its location *//
     }
      <div className="myRow center" style={{marginTop:"12px"}}>
      <div className="bodyText textAlign">
        The VIN identifies your car. It can be found from outside of the car on the driverside-bottom corner of the windshield</div>
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
  
// const VinHandler=(props)=>{
  
//   switch(props.localPack.innerVehicle){
//     case 1:
//       return(<Vin updateLocalPack={props.updateLocalPack} 
//         name={name} localPack={props.localPack} userPack={props.userPack}/>)
//       case 2:
//         return(<Vin updateLocalPack={props.updateLocalPack} 
//           name={name} localPack={props.localPack} usesrPack={props.userPack}/>)
//         case 3:
//           return(<Vin updateLocalPack={props.updateLocalPack} 
//             name={name} localPack={props.localPack} userPack={props.userPack}/>)
//           case 4:
//             return()
//   }
// }


  class AdditionalVehicles extends Component{
    constructor(props){
      super(props);
      this.state={localPack:{step:0,innerVehicle:1,error:''}}
    }
    updateLocalPack= (name,value)=>{
      let neoPack={...this.state.localPack};
      neoPack[name]=value;
      this.setState({localPack:neoPack});
    }
    nextStep=()=>{
      this.updateLocalPack("step",this.state.localPack.step+1);
      this.props.userPack.methods.setAdditionalVehs(this.state.localPack.step+1);
    }
    setLocalPath=(newLocalPath)=>{
      this.setState({localPath:newLocalPath});
    }
    nextStepVehicle=(e)=>{
      e.preventDefault();e.stopPropagation()
      let neoData={...this.props.userPack.data};
      let neoQuote={...this.props.userPack.newQuote};
      
      neoData.vehicleLabel="What Is The VIN Of Vehicle "+(this.state.localPack.innerVehicle+1)+"?";
      neoData.vehicleAmount=parseInt(e.target.getAttribute('value'))+1;
      neoQuote.vehicleAmount=parseInt(e.target.getAttribute('value'))+1;
      window.localStorage.setItem('vehicleAmount',neoQuote.vehicleAmount);
      this.props.userPack.methods.stateHandling("data",neoData);
      this.props.userPack.methods.stateHandling("newQuote",neoQuote);
      this.props.userPack.methods.stateHandling("vehicleAmount",parseInt(e.target.getAttribute('value'))+1);
      this.updateLocalPack("step",this.state.localPack.step+1);
    }
   render(){
      const methods={setLocalPath:this.setLocalPath,
        nextStep:this.nextStep,nextStepVehicle:this.nextStepVehicle,updateLocalPack:this.updateLocalPack
      }
      const localPack={...this.state.localPack,methods};
      return(
        <>
        {this.state.localPack.step==0?
     <div className="myRow center"  style={{marginTop:"1rem"}}>
<div value={'/autoquote/'+this.props.userPack.quoteSteps[this.props.data.step+1]}
className={'blueBox'} style={{minWidth:"22vw"}} onClick={this.props.userPack.methods.setAdditionalVehsNext}>No</div>
<div value={'/autoquote/'+this.props.userPack.quoteSteps[this.props.data.step+1]}
 style={{minWidth:"22vw"}} className={'blueBox'} onClick={this.nextStep}>Yes</div>
</div>
:
<>
{this.state.localPack.step==1?<Selector name="vehicleAmount" 
selector={this.nextStepVehicle} userPack={this.props.userPack} options={['1','2','3','4']}/>:
<Vin key={'vin'+(this.state.localPack.innerVehicle+1)} name={'vin'+(this.state.localPack.innerVehicle+1)}
              localPack={localPack} userPack={this.props.userPack}/>}


</>
}

        {this.props.children}
        </>
      )
    }
  }
  
  export default AdditionalVehicles;
