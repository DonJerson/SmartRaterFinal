import WhiteNavBar from "../elements/WhiteNavBar";
import Modal from "../elements/Modal";
import React from 'react';
import InsuranceLanding from "../elements/InsuranceLanding";
import Signature from "../elements/Signature";

function MainView(props){
  const switcher=(e)=>{
    let neoData={...props.userPack.data}
    neoData.modal.active=!neoData.modal.active
    props.userPack.methods.stateHandling('data',neoData)
  }
  console.log(props.userPack.user.agency)
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