import React from 'react';
  
  function SaveButton(props){
      let buttonClass = "saveButton center link"
        if(!props.active){
            buttonClass="saveButton center disabled"
        }
      return(
        <>
           <div onClick={props.save} className={buttonClass}>
              <div  className="">Save</div>  
           </div>
        {props.children}
        </>
      )
    }
  
  export default SaveButton;