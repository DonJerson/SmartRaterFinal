
import React from 'react';
import CardIcon from '../dashboard/cardIcon';
import EditIcon from '../dashboard/editIcon';
import FileIcon from '../dashboard/fileIcon';
import SaveButton from '../dashboard/SaveButton';
import TrashIcon from '../dashboard/trashIcon';
import OverLay from '../elements/OverLay';
import Signature from '../elements/Signature';
import TextField from '../elements/TextField';
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
  const [activeButton, setActiveButton] = React.useState(false);
  const activateSave=()=>{
    setActiveButton(true)
  }

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
  
  const closeOverLay = () => {
    let neooverlay={...props.userPack.overlay}
    neooverlay.active=!neooverlay.active
    props.userPack.methods.stateHandling('overlay',neooverlay)
    setActiveButton(false)
  }
  const openOverlay = () => {
    let neooverlay={...props.userPack.overlay}
    neooverlay.active=!neooverlay.active
    props.userPack.methods.stateHandling('overlay',neooverlay)
  }
  // console.log(props.userPack.user)
    return(
      <>
       {console.log(props.userPack.user)}
       <OverLay title='Card details'
close={closeOverLay} 
active={props.userPack.overlay.active} userPack={props.userPack}>
<div className="row" style={{padding:"50px",marginTop:"20px"}}>

<TextField title="Name" onChange={activateSave} />
  <div className="row" style={{marginTop:"60px",marginBottom:"60px"}}>
    <SaveButton save={closeOverLay} active={activeButton}/>
  </div>
</div>

        </OverLay>
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
                  Payment Methods
              </p>
              <div className="greenBoxSizing">

                <div className="myRow flexStart">
                  <CardIcon/> <p style={{padding:"12px"
                }}>X-1885</p><EditIcon action={openOverlay}/><TrashIcon/>
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


        <div id="container">
            <p className="title6" style={{marginTop:"20px"}}>
              Drivers
            </p>
          <GreenBox title={"Jerson A. Mendez"} checkMark={!false}>
          <p className="" style={{fontSize: 12, fontWeight: '700', lineHeight: '100%', color: 'black',}}>Licencia: M542-433-332-33-0</p>
          <p className="Pip10,000 | $1,000 ded" style={{marginTop:"4px",
      fontSize: 12, lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Date of Birth: 09/29/1995</p>
        
          </GreenBox>
        </div>


        <div id="container">
            <p className="title6" style={{marginTop:"20px"}}>
              Cars
            </p>
          <GreenBox title={"Honda Civic 2014"} checkMark={!false}>
          <p className="" style={{fontSize: 12, fontWeight: '700', lineHeight: '100%', color: 'black',}}>VIN: J34223f1fd1s33</p>
          <p className="Pip10,000 | $1,000 ded" style={{marginTop:"4px", fontSize: 12, lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Comprehensive: No</p>
          <p className="Pip10,000 | $1,000 ded" style={{marginTop:"4px", fontSize: 12, lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Collision: No</p>
    
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