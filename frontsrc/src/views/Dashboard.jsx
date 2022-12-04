
import React from 'react';
import CardIcon from '../dashboard/cardIcon';
import EditIcon from '../dashboard/editIcon';
import FileIcon from '../dashboard/fileIcon';
import SaveButton from '../dashboard/SaveButton';
import TrashIcon from '../dashboard/trashIcon';
import OverLay from '../elements/OverLay';
import Title from './dashelements/title';
import Signature from '../elements/Signature';
import TextField from '../elements/TextField';
import WhiteNavBar from '../elements/WhiteNavBar';
import '../media/css/dashElements.css';
import {Router,Link, navigate} from '@reach/router';
import NiceInput from '@donjerson2/uielements/dist/Elements/input';
import './dashelements/animation.css';
import EditView from './dashelements/EditView';
import VerifyEmail from './dashelements/VerifyEmail';
import ChangePassword from './dashelements/ChangePassword';
import LeadView from './dashelements/LeadView';
import DashBody from './dashelements/DashBody';
import Lead from './dashelements/Lead';


function Client(props){
  return(
    <div className="myRow" style={{paddingTop:"10px"}}>
      <Link to={`${props.client.id}`}>
    <p className="link">{props.index+1}.  {props.client.first_name} {props.client.last_name}</p>
    </Link>
    
  </div>
  )
}
function Clients(props){
  const [filterText, setFilterText] = React.useState("");
  const onChange = (event) => {
    console.log("done",event.target.value.toString().toLowerCase())
    setFilterText(event.target.value.toString().toLowerCase());
  };

  let clients=props.clients
  let filteredClients=props.clients
  if(filterText.length>0){
  filteredClients=filteredClients.filter(client=>{
    try {
      console.log("tratando 1")
      if(client.first_name.toLowerCase().includes(filterText)){
        return client
      }
     
    } catch (error) {
      console.log(error)
    }
    try {
      console.log("tratando")
      if(client.last_name.toLowerCase().includes(filterText)){
        return client
      }
      
    } catch (error) {
      console.log(error)
    }
      
    })
  }
  
  const Elements=()=>{
    return filteredClients.map((client,index)=>{
      return(
        <>     
      <Client client={client} index={index} key={index}/>
      
      </>
      )
    })
  }
  const padding = "100px"
    return(
      // <Client client={props.clients[0]} index={0}/>
      <>
      <div className="myRow center"  style={{paddingTop:"10px",paddingBottom:"18px"}}>
      <div className="" style={{minWidth:"30vw",maxWidth:"90vw",paddingRight:padding,paddingLeft:padding}}>
      <div className="myRow flexStart" style={{flexDirection:"row"}}>
      <div>
      <input className='input' onChange={onChange} type="text" placeholder="Customer Search" />
      </div>
      <Link to='/dashboard/leads/new'>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1728?alt=media&token=3646f0b9-9e8f-45ad-b921-2d948848b99e"
        alt="Not Found"
        className="framee-104 link"
      /></Link>
</div>
      <Elements/>
      </div>
      
      </div>
      
      </>
    )
}

function Dashboard(props){
  const [activeButton, setActiveButton] = React.useState(false);
  const [masterUser, setMasterUser] = React.useState(false);
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
  const adminSwitch = (e) => {
    if(e.target.checked){
      navigate('/dashboard/leads/', { replace: true });
    }else{navigate('/dashboard/', { replace: true });}
   
    setMasterUser(e.target.checked)

  }
  // console.log(props.userPack.user)
  let master = false
  try {props.userPack.user.agency.master?
    master=true
    :
    master=false
  } catch (error) {
    
  }

  const user = props.userPack.user
  let clients
  try {
    clients=props.userPack.user.agency.clients
  } catch (error) {
    clients=[]
  }
  const name = user.first_name+" "+user.last_name
    return(
      <>
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
     


    </div>
   <div className='center' style={{margin:"18px"}}>
   <Title text={name}/>
   {
      user.agency?
      <div style={{marginLeft:"10px"}}>
      <div className="switch__container">
        <input onChange={adminSwitch} id="switch-shadow" className="switch switch--shadow" type="checkbox"/>
        <label htmlFor="switch-shadow"></label>
      </div>
  </div>
      :
      <></>
    }
   </div>

   
    <Router>
    {/* <LeadView path='dashboard/leads/:leadId' clients={clients}/>
     */}
    <ChangePassword path='dashboard/edit/password' userPack={props.userPack}/>
    <VerifyEmail path='dashboard/edit/verify' userPack={props.userPack}/>
    <EditView path='dashboard/edit' userPack={props.userPack}/>
    <Clients path='dashboard/leads/' clients={clients} />
    
  </Router>
    <DashBody userPack={props.userPack} name={name}
    openOverlay={openOverlay} logOut={logOut}
    />
  <Signature userPack={props.userPack}/>
   
      {props.children}
      </>
    )
  }

export default Dashboard;