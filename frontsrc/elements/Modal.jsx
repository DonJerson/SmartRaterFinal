import React from 'react';
import BlackTitle from '../secondaryelements/BlackTitle';
import CloseIcon from '../svgelements/CloseIcon';


  function Modal(props){

      return(
        <>
        {props.active?
        <>
                          <div className="outterModal center">
            <div className="innerModalBox center" style={{alignContent:"center"}}>
         
                    <div className="link" onClick={props.close} style={{zIndex:"1",width:"auto",position:"absolute",top:"40px",right:"40px"}}>
                      <CloseIcon close={props.close}/>
                  </div>
                  <div style={{display:"flex",position:"absolute",bottom:"15px",left:"15px"}}>
                  <BlackTitle/>
                </div>
                <div className="myRow center" style={{position:"absolute",top:"22px"}}>
                <h2>{props.title}</h2>
              </div>
                  {props.children}
            </div>
            </div>
        </>
        :null}

        </>
      )
    }
  
  export default Modal;