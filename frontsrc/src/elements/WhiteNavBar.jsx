
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
            <div className="navHeader1 center link">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clipRule="evenodd" d="M19.3333 10.8751C19.3333 12.157 18.8241 13.3863 17.9176 14.2928C17.0112 15.1992 15.7818 15.7084 14.5 15.7084C13.2181 15.7084 11.9887 15.1992 11.0823 14.2928C10.1759 13.3863 9.66663 12.157 9.66663 10.8751C9.66663 9.5932 10.1759 8.36382 11.0823 7.4574C11.9887 6.55097 13.2181 6.04175 14.5 6.04175C15.7818 6.04175 17.0112 6.55097 17.9176 7.4574C18.8241 8.36382 19.3333 9.5932 19.3333 10.8751V10.8751ZM16.9166 10.8751C16.9166 11.516 16.662 12.1307 16.2088 12.5839C15.7556 13.0371 15.1409 13.2917 14.5 13.2917C13.859 13.2917 13.2443 13.0371 12.7911 12.5839C12.3379 12.1307 12.0833 11.516 12.0833 10.8751C12.0833 10.2341 12.3379 9.61945 12.7911 9.16624C13.2443 8.71303 13.859 8.45842 14.5 8.45842C15.1409 8.45842 15.7556 8.71303 16.2088 9.16624C16.662 9.61945 16.9166 10.2341 16.9166 10.8751V10.8751Z" fill="black"/>
<path fill-rule="evenodd" clipRule="evenodd" d="M14.5 1.20837C7.15936 1.20837 1.20831 7.15942 1.20831 14.5C1.20831 21.8407 7.15936 27.7917 14.5 27.7917C21.8406 27.7917 27.7916 21.8407 27.7916 14.5C27.7916 7.15942 21.8406 1.20837 14.5 1.20837ZM3.62498 14.5C3.62498 17.0255 4.48652 19.3503 5.93048 21.1966C6.94455 19.8649 8.25278 18.7857 9.75296 18.0433C11.2531 17.3008 12.9047 16.9153 14.5785 16.9167C16.2307 16.9151 17.8615 17.2907 19.3465 18.0148C20.8316 18.7389 22.1318 19.7924 23.148 21.0951C24.195 19.722 24.8999 18.1193 25.2045 16.4196C25.509 14.7199 25.4045 12.9721 24.8995 11.3209C24.3945 9.66965 23.5035 8.16239 22.3004 6.92384C21.0972 5.68528 19.6164 4.75104 17.9804 4.19841C16.3445 3.64577 14.6005 3.49064 12.8927 3.74584C11.1849 4.00104 9.56248 4.65924 8.15958 5.66598C6.75667 6.67272 5.61367 7.99905 4.82513 9.53524C4.0366 11.0714 3.6252 12.7733 3.62498 14.5V14.5ZM14.5 25.375C12.0035 25.3788 9.58238 24.52 7.64631 22.9439C8.4256 21.8283 9.46285 20.9174 10.6698 20.2888C11.8767 19.6602 13.2177 19.3324 14.5785 19.3334C15.9224 19.3323 17.2471 19.6519 18.4427 20.2655C19.6383 20.8792 20.6702 21.7692 21.4527 22.8617C19.5016 24.489 17.0406 25.3786 14.5 25.375V25.375Z" fill="black"/>
</svg>

               </div>
         
               </Link>
          </>:
            <>
  <p className="navHeader1 link" onClick={callLoginModal}>Customer Login</p>
  </>
}
                  <div style={{width: "1.5rem",}}/>

         </>
         }
          <a href="tel:+15618531537">
            <div className="center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2085 23.7526H18.2435C18.9035 23.7526 19.5273 23.5055 19.9998 23.0566L23.3899 19.8356C23.5061 19.7254 23.5983 19.5945 23.6612 19.4504C23.7241 19.3063 23.7565 19.1519 23.7565 18.9959C23.7565 18.8399 23.7241 18.6855 23.6612 18.5414C23.5983 18.3973 23.5061 18.2664 23.3899 18.1562L18.3897 13.4054C18.2738 13.2951 18.136 13.2075 17.9843 13.1477C17.8327 13.088 17.6701 13.0572 17.506 13.0572C17.3418 13.0572 17.1792 13.088 17.0276 13.1477C16.8759 13.2075 16.7382 13.2951 16.6222 13.4054L14.6296 15.2986C13.7058 15.0373 11.982 14.4435 10.8894 13.4054C9.7969 12.3674 9.17188 10.7296 8.89687 9.85188L10.8894 7.9587C11.0056 7.8485 11.0978 7.71761 11.1607 7.57353C11.2236 7.42944 11.256 7.27499 11.256 7.11901C11.256 6.96302 11.2236 6.80857 11.1607 6.66449C11.0978 6.5204 11.0056 6.38951 10.8894 6.27931L5.88925 1.52856C5.65027 1.31424 5.33409 1.19485 5.00547 1.19485C4.67685 1.19485 4.36066 1.31424 4.12168 1.52856L0.732799 4.74957C0.257781 5.20089 -0.0097297 5.82086 0.000270692 6.4539C0.0290218 8.14517 0.50029 14.0195 5.37298 18.6491C10.2457 23.2787 16.4284 23.7253 18.2085 23.7526V23.7526ZM5.00672 4.04764L8.23934 7.11901L6.62303 8.65469C6.47594 8.79405 6.36789 8.96617 6.30872 9.15536C6.24955 9.34455 6.24115 9.54479 6.28427 9.73786C6.31427 9.87444 7.04805 13.1133 9.12313 15.0848C11.1982 17.0564 14.6071 17.7536 14.7508 17.7821C14.954 17.8233 15.1649 17.8154 15.364 17.7592C15.5632 17.7029 15.7443 17.6001 15.8909 17.4602L17.5072 15.9245L20.7398 18.9959L18.2322 21.3772C16.6722 21.3523 11.3345 20.9544 7.14055 16.9685C2.93289 12.9707 2.52537 7.8815 2.50037 6.42896L5.00672 4.04764ZM22.4999 10.688H25C25 4.59517 20.1586 0 13.7371 0V2.37538C18.8148 2.37538 22.4999 5.87074 22.4999 10.688V10.688Z" fill="black"/>
<path d="M13.7496 7.12625C16.3784 7.12625 17.4997 8.19162 17.4997 10.6894H19.9998C19.9998 6.85902 17.781 4.75085 13.7496 4.75085V7.12625V7.12625Z" fill="black"/>
</svg>

<div style={{width: "0.5rem",}}/>
              <p className="navHeader1">561-853-1537</p>
            </div></a>
           
             <div style={{width: "1.5rem",}}/>
          </div>
          </div>
      {props.children}
      </>
    )
  }

export default WhiteNavBar;