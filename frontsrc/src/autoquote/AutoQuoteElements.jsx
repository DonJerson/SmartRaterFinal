import React from 'react';
import Vin from './Vin';
import AdditionalVehicles from './AdditionalVehicles';
import YesOrNo from '../secondaryelements/YesOrNo';
import Selector from '../secondaryelements/Selector';
import GeneralField from '../secondaryelements/GeneralField';
import { Router, Link,navigate } from "@reach/router";
import EmailAddress from './EmailAddress';
import PhoneNumber from './PhoneNumber';
import Name from './Name';
import Dob from './Dob';
import Address from './Address';
import AdditionalDriver from './AdditionalDriver';
import DriverName from './DriverPhone';
import DriverDob from './DriverDob';
import DriverPhone from './DriverPhone';
import DriverEmail from './DriverEmail';
import DriverLicense from './DriverLicense';

let myYears=[]
for (let index = 0; index < 28; index++) {
  myYears.push(2022-index);
}

    const AutoQuote = (props) => {
      const brandSelector =(e)=>{
        let filteredModels=[]
        let neoData={...props.userPack.data}
        neoData.filteredModels=[]
        props.userPack.methods.stateHandling("filteredModels",filteredModels)
        props.userPack.methods.stateHandling("data",neoData)
        props.userPack.methods.selector(e)
      }
        switch(props.userPack.data.step){
          case 0:
            return(<Vin userPack={props.userPack}/>
              )
            case 1:
            return(<Selector name='year' selector={props.userPack.methods.selector}
            userPack={props.userPack} options={myYears} />)
              case 2:
            return(
          <Selector name="brand" selector={brandSelector}
          userPack={props.userPack} options={props.userPack.data.filteredBrands.slice(0,18)}
           searchBar={true} filterName="filteredBrands"
           filterValue={props.userPack.data.filterSearch}/>
            )
                 case 3:
              return(
                <Selector name="model" 
           selector={props.userPack.methods.selector}  userPack={props.userPack} searchBar={true} 
           filterName="filteredModels" filterValue={props.userPack.filterModelSearch}
            options={props.userPack.filteredModels.slice(0,18)} />
              )
              case 4:
                return(
                  <AdditionalVehicles userPack={props.userPack} data={props.data}/>
                )
                case 5:
                  return(
                    <YesOrNo name="accident" title="Any at-fault Accidents in the Last 3 years?" userPack={props.userPack}/>
                  )
                  case 6:
                    return(
                      <YesOrNo name="prior" title="Do You Currently Have Insurance?" userPack={props.userPack}/>
                    )
                    case 7:
                      return(
                        <YesOrNo name="dui" title="Do You Have A DUI" userPack={props.userPack}/>
                      )
                    case 8:
                      return(
                        <YesOrNo name="millitary" title="Are You a Military Person?" userPack={props.userPack}/>
                      )
                      case 9:
                        return(
                          <YesOrNo name="married" title="Are You Married?" userPack={props.userPack}/>
                        )
                        case 10:
                          return(
                            <YesOrNo name="homeOwner" title="Are You A HomeOwner?" userPack={props.userPack}/>
                          )
                          case 11:
                            return( 
                             <Name userPack={props.userPack} data={props.data}/>
                            )
                            case 12:
                              return(
                               <Dob userPack={props.userPack} data={props.data}/>
                              )
                              case 13:
                                return(
                                  <Address userPack={props.userPack} data={props.userPack.data}/>
                                )
                              case 14:
                                return(
                                  <EmailAddress userPack={props.userPack} data={props.userPack.data}/>
                                )
                                case 15:
                                  return(
                                    <PhoneNumber userPack={props.userPack} data={props.userPack.data}/>
                                  )
                                  case 16:
                                    return(
                                      <AdditionalDriver userPack={props.userPack} data={props.userPack.data}/>
                                    )
                                    // case 17:
                                    //   return(
                                    //     <DriverName userPack={props.userPack} data={props.userPack.data}/>
                                    //   )
                                    //   case 18:
                                    //     return(
                                    //         <DriverDob userPack={props.userPack} data={props.userPack.data}/>
                                    //         )
                                    //     case 19:
                                    //       return(
                                    //         <DriverPhone userPack={props.userPack} data={props.userPack.data}/>
                                    //       )
                                    //       case 20:
                                    //         return(
                                    //             <DriverEmail userPack={props.userPack} data={props.userPack.data}/>
                                    //         )
                                    //         case 21:
                                    //             return(
                                    //                 <DriverLicense userPack={props.userPack} data={props.userPack.data}/>
                                    //             )
        }
    }
    
  
  export default AutoQuote;