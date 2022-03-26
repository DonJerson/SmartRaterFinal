import {React,Component} from 'react';
import Selector from '../secondaryelements/Selector';
import GeneralField from '../secondaryelements/GeneralField';
import { waitFor } from '@testing-library/react';
  
  function Vin(props){
   
    const nextStep =(e)=>{
      e.preventDefault();e.stopPropagation()
      //console.log("cosas deberian suceder",props.userPack.data[props.name],props.userPack.data[props.name].length)
      if(props.userPack.data.driverAmount===props.localPack.innerDriver+1){
        
        props.localPack.methods.setLocalPath({step:0,innerDriver:1,error:''});
        let neoData={...props.userPack.data}
        neoData.additionalDriverStep=0
        props.userPack.methods.stateHandling("data",neoData)
        props.userPack.methods.quoteAuto();
        props.userPack.refs.resultsRef.current.click()
      }else{
      if(props.userPack.data[props.name].length==17){
      props.localPack.methods.updateLocalPack("innerDriver",(props.localPack.innerDriver+1));
      let neoData={...props.userPack.data}

     
      neoData.driverLabel="What is the VIN of Driver "+(props.localPack.innerDriver+2)+"?"
      props.userPack.methods.stateHandling("data",neoData)
      props.localPack.methods.updateLocalPack("innerDriver",(props.localPack.innerDriver+1));
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
       <div className="flexWrap">
      <div className="myRow center">
      <div className="myRow" style={{width:"55%",marginTop:"0px"}}>
        <GeneralField required={true} type="text" className="generalField" 
        value={props.userPack.data['firstName'+(props.localPack.innerDriver+1)]}
        onChange={props.userPack.methods.eventStateHandling}
      placeholder="First Name" ref={props.userPack.methods.newQuoteRef} name={'firstName'+(props.localPack.innerDriver+1)}/>
      </div>
      <div className="myRow" style={{width:"45%",paddingLeft:"20px",marginTop:"0px"}}>
      <GeneralField type="text" className="generalField" 
        value={props.userPack.data['middleName'+(props.localPack.innerDriver+1)]}
        onChange={props.userPack.methods.eventStateHandling}
      placeholder="Middle Name" ref={props.userPack.methods.newQuoteRef} name={'middleName'+(props.localPack.innerDriver+1)}/>
      </div>
      </div>
      <div className="myRow" style={{marginTop:"12px"}}>
      <GeneralField onClick={props.userPack.methods.next} type="text" className="generalField" value={props.userPack.data['lastName'+(props.localPack.innerDriver+1)]}
       placeholder="Last Name" ref={props.userPack.methods.newQuoteRef} name={'lastName'+(props.localPack.innerDriver+1)}
       onChange={props.userPack.methods.eventStateHandling}/>
      </div>
      <div className="bodyText" style={{marginTop:"12px",fontWeight:700}}>
        {/* Date of Birth text label */}
        Date of Brith
      </div>

      <div className="myRow" style={{marginTop:"6px"}}>
      <GeneralField required={true} type="date" value={props.userPack.data['dob'+(props.localPack.innerDriver+1)]} placeholder="Date of Birth"
       onChange={props.userPack.methods.eventStateHandling}  className="generalField" name={'dob'+(props.localPack.innerDriver+1)}/>
      </div>

      <div className="myRow center" style={{marginTop:"12px"}}>
      <input  style={{minWidth:"200px"}}  className="blueBox center" type="submit" value="Continue"/>
      </div>
      </div>
      
      </form>
        {props.children}
        </>
      )
    }
    
// const VinHandler=(props)=>{
  
//   switch(props.localPack.innerDriver){
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


  class AdditionalDrivers extends Component{
    constructor(props){
      super(props);
      this.state={localPack:{step:0,innerDriver:1,error:''}}
    }
    updateLocalPack= (name,value)=>{
      let neoPack={...this.state.localPack};
      neoPack[name]=value;
      this.setState({localPack:neoPack});
    }
    nextStep=()=>{
      this.updateLocalPack("step",this.state.localPack.step+1);
      this.props.userPack.methods.setAdditionalDrivs(this.state.localPack.step+1);
    }
    setLocalPath=(newLocalPath)=>{
      this.setState({localPath:newLocalPath});
    }
    getPositionalName=(key)=>{
      switch (key) {
        case 1:
          return("1st")
          case 2:
            return("2nd")
            case 3:
              return("3rd")
        default:
          return(key+"th")
      }
    }
    nextStepDriver=(e)=>{
      e.preventDefault();e.stopPropagation()
      let neoData={...this.props.userPack.data};
      let neoQuote={...this.props.userPack.newQuote};
      
      neoData.driverLabel="Please Provide The "+this.getPositionalName(this.state.localPack.innerDriver+1)+" Driver's Information";
      neoData.driverAmount=parseInt(e.target.getAttribute('value'))+1;
      neoQuote.driverAmount=parseInt(e.target.getAttribute('value'))+1;
      window.localStorage.setItem('driverAmount',neoQuote.driverAmount);
      this.props.userPack.methods.stateHandling("data",neoData);
      this.props.userPack.methods.stateHandling("newQuote",neoQuote);
      this.props.userPack.methods.stateHandling("driverAmount",parseInt(e.target.getAttribute('value'))+1);
      this.updateLocalPack("step",this.state.localPack.step+1);
    }
   render(){
      const methods={setLocalPath:this.setLocalPath,
        nextStep:this.nextStep,nextStepDriver:this.nextStepDriver,updateLocalPack:this.updateLocalPack
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
{this.state.localPack.step==1?<Selector name="driverAmount" 
selector={this.nextStepDriver} userPack={this.props.userPack} options={['1','2','3','4']}/>:
<Vin key={'vin'+(this.state.localPack.innerDriver+1)} name={'vin'+(this.state.localPack.innerDriver+1)}
              localPack={localPack} userPack={this.props.userPack}/>}


</>
}

        {this.props.children}
        </>
      )
    }
  }
  
  export default AdditionalDrivers;
