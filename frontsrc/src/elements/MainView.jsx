import WhiteNavBar from "./WhiteNavBar";
import Modal from "./Modal";
import React from 'react';
import InsuranceLanding from "./InsuranceLanding";
import Signature from "./Signature";

function MainView(props){
  const switcher=(e)=>{
    let neoData={...props.userPack.data}
    neoData.modal.active=!neoData.modal.active
    props.userPack.methods.stateHandling('data',neoData)
  }
    return(
      <>
      <Modal switcher={switcher} active={props.userPack.data.modal.active}>
      </Modal>
        <WhiteNavBar userPack={props.userPack}/>
        <InsuranceLanding switcher={switcher} userPack={props.userPack}/>
        <Signature userPack={props.userPack}/>
      {props.children}
      </>
    )
  }

  export default MainView;