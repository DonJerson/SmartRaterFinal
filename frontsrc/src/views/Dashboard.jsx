
import React from 'react';
import Signature from '../elements/Signature';
import WhiteNavBar from '../elements/WhiteNavBar';

import '../media/css/dashElements.css';
import GreenBox from '../secondaryelements/GreenBox';

// const isVarString =(a)=>{
//   if(a){
//     return a
//   }else{
//     return ""
//   }

  
// }

function Dashboard(props){
  const logOut = () => {
    localStorage.removeItem('token');
    props.userPack.refs.mainView.current.click();
    window.location.reload()
  }
  let userProfilePic = "url(https://www.pngfind.com/pngs/m/540-5404923_my-wedding-missing-profile-picture-icon-hd-png.png)"
  try {
    profilePicture="url("+props.userPack.user.profilePicture.url+")"
  } catch (error) {
  }
  
  // console.log(props.userPack.user)
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
    <div className="profilePic" style={{backgroundImage:userProfilePic,
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