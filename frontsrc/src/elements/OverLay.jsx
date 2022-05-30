import React from 'react';
import BlackTitle from '../secondaryelements/BlackTitle';
import CloseIcon from '../svgelements/CloseIcon';
import '../media/css/overlay.css';

  function OverLay(props){

      return(
        <>
        {props.active?
        <>
                          <div className="overLayOuter center">
            <div className="overLayBox center" style={{alignContent:"center"}}>
         
                    <div className="link" onClick={props.close} style={{zIndex:"1",width:"auto",position:"absolute",top:"14px",right:"14px"}}>
                      <CloseIcon close={props.close}/>
                  </div>
                  <div style={{display:"flex",position:"absolute",bottom:"15px",left:"15px"}}>
                  <BlackTitle/>
                </div>
                <div className="myRow center" style={{position:"absolute",top:"0px"}}>
                <div className='title6' style={{marginTop:"0.5rem"}}>{props.title}</div>
              </div>
                  {props.children}
            </div>
            </div>
        </>
        :null}

        </>
      )
    }
  
  export default OverLay;