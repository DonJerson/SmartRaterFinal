
import React from 'react';
import Signature from '../elements/Signature';
import WhiteNavBar from '../elements/WhiteNavBar';

import '../media/css/dashElements.css';
import GreenBox from '../secondaryelements/GreenBox';
function Dashboard(props){
  console.log(props.userPack.user)
    return(
      <>
      <WhiteNavBar userPack={props.userPack}/>
     <div style={{paddingTop:"103px"}}></div>
      <div className="myRow center" style={{gap:"30px"}}>


      <div className="title6 link">My Profile</div>
      <div className="title6 link">Policies</div>
      <div className="title6 link">Quotes</div>
      <div className="title6 link">Assets</div>
    </div>
    <div className="myRow center">
    <div className="profilePic"></div>
    </div>
    <div className="myRow center" style={{marginTop:"17px"}}>
      
    <p className="title6">{props.userPack.user.name}</p>
    </div>

    <div id='mainBox'style={{maxWidth:"76vw",paddingLeft:"12vw",paddingRight:"12vw",paddingTop:"40px"}} className="myRow">
        <div id="column">
          <div id="container">
        <p className="title6">
        Active Policies
    </p>
    <GreenBox/>
    </div>
    <div id="container">
    <p className="title6" style={{marginTop:"34px"}}>
        My Quotes
    </p>
    <GreenBox/>
    </div>
    </div>
        
        <div id="column">
        <div id="container">
              <p className="title6">
                  My Payment Methods
              </p>
        <GreenBox/>
        </div>


        <div id="container">
        <p className="title6" style={{marginTop:"34px"}}>
                  My Account Documents
              </p>
        <GreenBox/>
        </div>
        </div>

        </div>



<Signature userPack={props.userPack}/>
      {props.children}
      </>
    )
  }

export default Dashboard;