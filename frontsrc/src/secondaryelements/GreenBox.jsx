import React from 'react';
  
  function GreenBox(props){
      return(
        <>
  <div className="greenBoxOutter">
      

  </div>
        {props.children}
        </>
      )
    }
  
  export default GreenBox;
