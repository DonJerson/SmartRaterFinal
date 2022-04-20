
import React from 'react';
  
  function Teteo(props){
      return(
        <>
        <div className="myRow center" style={{marginTop:"30px"}}>

<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
        {props.children}
        </>
      )
    }
  
  export default Teteo;