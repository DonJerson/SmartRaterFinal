import React from 'react';
  
  function Carriers(props){
      return(
        <>
                <div className="myRow center" style={{marginTop:"1.5rem"}}>
              <p className="karlaBold" style={{fontSize:"20px"}}>Insurance Carriers Include:</p>
            </div>

            <div className="myRow center">
            
            </div>
        {props.children}
        </>
      )
    }
  
  export default Carriers;