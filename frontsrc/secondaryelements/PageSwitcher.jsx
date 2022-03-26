import React from 'react';
  
  function Empty(props){
      return(
        <>
        <div className="myRow center">
            <div className="" style={{width:"200px"}}>
                
            </div>
        </div>
        {props.children}
        </>
      )
    }
  
  export default Empty;