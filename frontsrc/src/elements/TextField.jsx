import React from 'react';
  
  function TextField(props){
      return(
        <>
        <div className="row flexStart">
            <div className="row">
            <div className="inputLabel">{props.title}</div>
            </div>
            <div className="row" style={{marginTop:"6px"}}>
                <input  onChange={props.onChange}
                className="greenInput" type="text" name="" id="" />
            </div>
        </div>
        {props.children}
        </>
      )
    }
  
  export default TextField;