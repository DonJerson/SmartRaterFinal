
import React from 'react';
import CardIcon from '../dashboard/cardIcon';
import EditIcon from '../dashboard/editIcon';
import FileIcon from '../dashboard/fileIcon';
import TrashIcon from '../dashboard/trashIcon';
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
  let profilePicture = "url(https://www.pngfind.com/pngs/m/540-5404923_my-wedding-missing-profile-picture-icon-hd-png.png)"
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
    <div className="profilePic" style={{backgroundImage:profilePicture,
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
        Active Policies
    </p>
    <GreenBox title="Auto">
    <p className="" style={{fontSize: 12, fontWeight: '700', lineHeight: '100%', color: 'black',}}>Policy# G01-039942343</p>
    <p className="Pip10,000 | $1,000 ded" style={{marginTop:"4px",
      fontSize: 12, lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Honda Civic 2014</p>
<p className="XUM" style={{fontSize: 12, lineHeight: '100%', marginTop:"10px",color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Premium: $1,350</p>
<p className="XUM" style={{fontSize: 12, lineHeight: '100%',color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Term: 6 months</p>

    </GreenBox>
    </div>
    <div id="container">
    <p className="title6" style={{marginTop:"20px"}}>
        Quotes
    </p>
    <GreenBox title="Auto">
      
    <p className="" style={{fontSize: 12, fontWeight: '700', lineHeight: '100%', color: 'black',}}>Quote# G01-039942343</p>
    <p className="Pip10,000 | $1,000 ded" style={{marginTop:"4px",
      fontSize: 12, lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Honda Civic 2014</p>
<p className="XUM" style={{fontSize: 12, lineHeight: '100%', marginTop:"10px",color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Premium: $1,350</p>
<p className="XUM" style={{fontSize: 12, lineHeight: '100%',color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Term: 6 months</p>
</GreenBox>
    </div>
    </div>
        
        <div id="column">
        <div id="container">
              <p className="title6">
                  Cards
              </p>
              <div className="greenBoxSizing">

                <div className="myRow flexStart">
                  <CardIcon/> <p style={{padding:"12px"
                }}>X-1885</p><EditIcon/><TrashIcon/>
                </div>
              </div>
        {/* <GreenBox checkMark={false}/> */}
        </div>


        <div id="container">
        <p className="title6" style={{marginTop:"20px"}}>
                  Documents
              </p>
        <GreenBox smallBox={true} title={"Application.pdf"} checkMark={!false}>
          <div className="myRow center">
<FileIcon/>


</div>

        </GreenBox>
        </div>
        </div>

        </div>

<div className="myRow center" style={{marginTop:"40px"}}>

  <div className="logOutBox center">
    <p className="pinkButtonTitle link" onClick={logOut}>Logout</p>
  </div>
</div>


<Signature userPack={props.userPack}/>
      {props.children}
      </>
    )
  }

export default Dashboard;