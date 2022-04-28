
import React from 'react';
import Signature from '../elements/Signature';
import WhiteNavBar from '../elements/WhiteNavBar';

import '../media/css/dashElements.css';
import GreenBox from '../secondaryelements/GreenBox';
function Dashboard(props){
  const logOut = () => {
    localStorage.removeItem('token');
    props.userPack.refs.mainView.current.click();
    window.location.reload()
  }
  console.log(props.userPack.user)
    return(
      <>
       {console.log(props.userPack.user)}
      <WhiteNavBar userPack={props.userPack}/>
     <div style={{paddingTop:"72px"}}></div>
      {/* <div className="myRow center" style={{gap:"30px"}}>


      <div className="title6 link">My Profile</div>
      <div className="title6 link">Policies</div>
      <div className="title6 link">Quotes</div>
      <div className="title6 link">Assets</div>
    </div> */}
    <div className="myRow center">
    <div className="profilePic" style={{backgroundImage:"url("+props.userPack.user.profilePicture.url+")",
    WebkitBackgroundSize:"100%"
  }}></div>
    </div>
    <div className="myRow center" style={{marginTop:"17px"}}>
     
    <p className="title6">{props.userPack.user.first_name} {props.userPack.user.middle_name} {props.userPack.user.last_name}</p>
    </div>
   
    <div id='mainDashBox' className="myRow">
        <div id="column">
          <div id="container">
        <p className="title6">
        Policies
    </p>
    <GreenBox/>
    </div>
    <div id="container">
    <p className="title6" style={{marginTop:"34px"}}>
        Quotes
    </p>
    <GreenBox/>
    </div>
    </div>
        
        <div id="column">
        <div id="container">
              <p className="title6">
                  Cards
              </p>
        <GreenBox/>
        </div>


        <div id="container">
        <p className="title6" style={{marginTop:"34px"}}>
                  Documents
              </p>
        <GreenBox/>
        </div>
        </div>

        </div>

<div className="myRow center" style={{marginTop:"40px"}}>

  <div className="logOutBox center">
    <p className="pinkButtonTitle link" onClick={logOut}>Log Out</p>
  </div>
</div>


<Signature userPack={props.userPack}/>
      {props.children}
      </>
    )
  }

export default Dashboard;