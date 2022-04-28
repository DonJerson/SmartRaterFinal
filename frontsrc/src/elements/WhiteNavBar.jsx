
import BlackTitle from '../secondaryelements/BlackTitle';
import GeneralField from '../secondaryelements/GeneralField';
import Modal from './Modal';
import React from 'react';
import { Link } from '@reach/router';
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
// import 'firebase/compat/auth';
// import 'firebase/firestore'

// import 'firebaseui/dist/firebaseui.css'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAXaaKZPm61W0YdtVHu1Yn6w7lsJg8jX_Y",
//   authDomain: "smartrater-46f5b.firebaseapp.com",
//   databaseURL: "https://smartrater-46f5b-default-rtdb.firebaseio.com",
//   projectId: "smartrater-46f5b",
//   storageBucket: "smartrater-46f5b.appspot.com",
//   messagingSenderId: "106479349340",
//   appId: "1:106479349340:web:298ec8ebfa1a33d39d8099",
//   measurementId: "G-62HL0LZD62"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function LoginForm(props) {
  // var uiConfig = {
  //   signInSuccessUrl: 'https://smartrater-46f5b.web.app/',
  //   signInOptions: [
  //     // Leave the lines as is for the providers you want to offer your users.
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //   ],
  //   // tosUrl and privacyPolicyUrl accept either url string or a callback
  //   // function.
  //   // Terms of service url/callback.
  //   tosUrl: 'https://smartrater-46f5b.web.app/',
  //   // Privacy policy url/callback.
  //   privacyPolicyUrl: function() {
  //     window.location.assign('https://smartrater-46f5b.web.app/privacy');
  //   }
  // };
  // firebase.initializeApp({...firebaseConfig})
  // var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
  // // The start method will wait until the DOM is loaded.
  // console.log("renderedd",document.getElementsByClassName('loginForm')[0])
  // if(document.getElementById('firebaseui-auth-container')){
  //   console.log("modal is active")
  //   ui.start('#firebaseui-auth-container', uiConfig);
  // }
  const callRegisterModal = () => {
    let neoData={...props.userPack.data};
    neoData.modal.active=true;
    neoData.modal.type="Register";
    props.userPack.methods.stateHandling('data',neoData);
  }
  const loginFunction = () => {
    props.userPack.methods.login(props.userPack.data.username,props.userPack.data.password);
  }
  const dataHandler = (e) => {
    let neoData={...props.userPack.data};
    neoData[e.target.name]=e.target.value;
    props.userPack.methods.stateHandling('data',neoData);
  }


  return (
   
    <div className="loginForm
    ">
        {/* <div id="firebaseui-auth-container"></div> */}
      {props.userPack.data.modal.innerLoading?

     <> 
      <div className="myRow center" style={{marginTop:"40px"}}>

<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
</>
:
<>
    <div className="myRow">
    <GeneralField required={true} type="username"
className="generalField" onChange={dataHandler} value={props.userPack.data.username} name="username" placeholder="Username"/>
</div>
<div className="myRow"style={{paddingTop:"15px"}}>
<GeneralField required={true} type="password"
className="generalField" onChange={dataHandler} value={props.userPack.data.password} name="password" placeholder="Password"/>
</div>
        <div className="myRow center" style={{marginTop:"25px"}}>
    <input  style={{minWidth:"200px"}} onClick={loginFunction} className="blueBox center" type="submit" value="Login"/>
    </div>
    <div className="myRow center" style={{marginTop:"20px"}}>
      <div className="bodyText1 link" onClick={callRegisterModal}>Don't have an account? Register!</div>
      
    </div>
    <div className="myRow center" style={{marginTop:"15px"}}>
      <div className="bodyText1">Forgot your password?</div>
      
    </div>


   </>
   
   }
    </div>
  )
}

function RegisterForm(props) {
  

  const callLoginModal = () => {
    let neoData={...props.userPack.data};
    neoData.modal.active=true;
    neoData.modal.type="Login";
    props.userPack.methods.stateHandling('data',neoData);
  }
  const [emailRegistration,setEmailRegistration]=React.useState(false);
  const dataHandler = (e) => {
    let neoData={...props.userPack.data};
    neoData[e.target.name]=e.target.value;
    props.userPack.methods.stateHandling('data',neoData);
  }
  const setEmailRegistrationFunction=()=>{
    setEmailRegistration(!emailRegistration);
  }
  const handleRegister=(e)=>{
    props.userPack.methods.handleRegister();
  }

  return (
    <div  className="loginForm">
      {emailRegistration?
      <>
    <div className="myRow">
    <GeneralField key="email" required={true} type="email"
className="generalField" value={props.userPack.data.username}
 onChange={dataHandler} name="username" placeholder="Email Address"/>
</div>
        <div className="myRow center" style={{marginTop:"18px"}}>
    <input  style={{minWidth:"280px"}} onClick={setEmailRegistrationFunction}  className="blueBox center" type="submit" value="Continue with email"/>
    </div>
    <div className="myRow center" style={{marginTop:"20px"}}>
      <div className="bodyText1 link" onClick={callLoginModal}>Already have an account? Login!</div>
      
    </div>
    <div className="myRow center" style={{marginTop:"10px"}}>
      <div className="bodyText1">or</div>
      
    </div>
    <div className="myRow center" style={{marginTop:"18px"}}>
    <input  style={{minWidth:"280px"}}  className="blueBox center" type="submit" value="Continue with Facebook"/>
    </div>
    <div className="myRow center" style={{marginTop:"18px"}}>
    <input  style={{minWidth:"280px"}}  className="blueBox center" type="submit" value="Continue with Google"/>
    </div>
      </>
      :
      <>
    <div className="myRow">
    <GeneralField key="email" required={true} type="email"
className="generalField" value={props.userPack.data.username}
 onChange={dataHandler} name="username" placeholder="Email Address"/>
</div>
<div className="myRow" style={{marginTop:"18px"}}>
    <GeneralField key="password" required={true} type="password" 
className="generalField" value={props.userPack.data.password}
 onChange={dataHandler} name="password" placeholder="Password"/>
</div>
        <div className="myRow center" style={{marginTop:"18px"}}>
    <input style={{minWidth:"280px"}} onClick={handleRegister}  
    className="blueBox center" type="submit" value="Register"/>
    </div>
    <div className="myRow center" style={{marginTop:"20px"}}>
      <div className="bodyText1 link" onClick={callLoginModal}>Already have an account? Login!</div>
      
    </div>
    <div className="myRow center" style={{marginTop:"20px"}}>
      <div className="bodyText1 link" onClick={setEmailRegistrationFunction}>   Go back</div>
      
    </div>


      </>
      }

    </div>
  );
}

function WhiteNavBar(props){
  const callLoginModal = () => {
    let neoData={...props.userPack.data};
    neoData.modal.active=true;
    neoData.modal.type="Login";
    props.userPack.methods.stateHandling('data',neoData);
  }
  const callRegisterModal = () => {
    let neoData={...props.userPack.data};
    neoData.modal.active=true;
    neoData.modal.type="Register";
    props.userPack.methods.stateHandling('data',neoData);
  }
    return(
      <>
        {//* Full outterModal    *//



          }
        
<Modal title={props.userPack.data.modal.type} close={props.userPack.methods.closeModal} 
active={props.userPack.data.modal.active} userPack={props.userPack}>
  {(props.userPack.data.modal.active && props.userPack.data.modal.type==="Login")?  
  <LoginForm userPack={props.userPack}/>:
  <RegisterForm userPack={props.userPack}/>
  }   
        
          </Modal>
          {/* <div className="loadingBar" style={{width: "100%", height: 6, left: 0, top: 0, position: 'absolute', backgroundColor: 'rgba(74.94, 195.50, 79.76, 1)',}}/> */}
          <div className='navBar1 shadow1' style={{marginBottom:"0px"}}>
          <div className="center ">
          <div style={{width: "1.5rem",}}/>
          <BlackTitle/>
          </div>
          <div className="sm-col-12 flexEnd" style={{width:"100%"}}>
  
         {props.userPack.dimensions.width<650?
                <>
                </>
                :
         <>
{/* check if customer is logged in */}
{props.userPack.user && props.userPack.logged?
  <>
  <Link to='/dashboard'>
    <div className="navHeader1 center link profileAvatar" style={{width:"40px",height:"50px"}}>
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M19.3333 10.8751C19.3333 12.157 18.8241 13.3863 17.9176 14.2928C17.0112 15.1992 15.7818 15.7084 14.5 15.7084C13.2181 15.7084 11.9887 15.1992 11.0823 14.2928C10.1759 13.3863 9.66663 12.157 9.66663 10.8751C9.66663 9.5932 10.1759 8.36382 11.0823 7.4574C11.9887 6.55097 13.2181 6.04175 14.5 6.04175C15.7818 6.04175 17.0112 6.55097 17.9176 7.4574C18.8241 8.36382 19.3333 9.5932 19.3333 10.8751V10.8751ZM16.9166 10.8751C16.9166 11.516 16.662 12.1307 16.2088 12.5839C15.7556 13.0371 15.1409 13.2917 14.5 13.2917C13.859 13.2917 13.2443 13.0371 12.7911 12.5839C12.3379 12.1307 12.0833 11.516 12.0833 10.8751C12.0833 10.2341 12.3379 9.61945 12.7911 9.16624C13.2443 8.71303 13.859 8.45842 14.5 8.45842C15.1409 8.45842 15.7556 8.71303 16.2088 9.16624C16.662 9.61945 16.9166 10.2341 16.9166 10.8751V10.8751Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.5 1.20837C7.15936 1.20837 1.20831 7.15942 1.20831 14.5C1.20831 21.8407 7.15936 27.7917 14.5 27.7917C21.8406 27.7917 27.7916 21.8407 27.7916 14.5C27.7916 7.15942 21.8406 1.20837 14.5 1.20837ZM3.62498 14.5C3.62498 17.0255 4.48652 19.3503 5.93048 21.1966C6.94455 19.8649 8.25278 18.7857 9.75296 18.0433C11.2531 17.3008 12.9047 16.9153 14.5785 16.9167C16.2307 16.9151 17.8615 17.2907 19.3465 18.0148C20.8316 18.7389 22.1318 19.7924 23.148 21.0951C24.195 19.722 24.8999 18.1193 25.2045 16.4196C25.509 14.7199 25.4045 12.9721 24.8995 11.3209C24.3945 9.66965 23.5035 8.16239 22.3004 6.92384C21.0972 5.68528 19.6164 4.75104 17.9804 4.19841C16.3445 3.64577 14.6005 3.49064 12.8927 3.74584C11.1849 4.00104 9.56248 4.65924 8.15958 5.66598C6.75667 6.67272 5.61367 7.99905 4.82513 9.53524C4.0366 11.0714 3.6252 12.7733 3.62498 14.5V14.5ZM14.5 25.375C12.0035 25.3788 9.58238 24.52 7.64631 22.9439C8.4256 21.8283 9.46285 20.9174 10.6698 20.2888C11.8767 19.6602 13.2177 19.3324 14.5785 19.3334C15.9224 19.3323 17.2471 19.6519 18.4427 20.2655C19.6383 20.8792 20.6702 21.7692 21.4527 22.8617C19.5016 24.489 17.0406 25.3786 14.5 25.375V25.375Z" fill="black"/>
</svg>
<div className="mainHover">
                <Link to="/dashboard">
                <p className="bulletPoint">Dashboard</p>
                </Link>
                <Link to="/myProfile">
                <p className="bulletPoint">Mi perfil</p>
                </Link>
                <Link to="/dashboard/userId">
                <p className="bulletPoint">Mi cuenta</p>
                </Link>
                <a href="#" onClick={()=>{}}>
                <p className="bulletPoint">Logout</p>
                </a>
            </div>
       </div>
 
       </Link>
  </>:

    <> 
<div style={{width: "1rem",}}/>
                <div style={{display:"flex",gap:"15px"}} >
    <p className="navHeader1 link" onClick={callRegisterModal}>Register</p>
<p className="navHeader1 link" onClick={callLoginModal}>Login</p>
</div>    

</>
}


             <div style={{width: "1.5rem",}}/>
          </div>
          </div>
      {props.children}
      </>
    )
  }

export default WhiteNavBar;