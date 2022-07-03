import { Link } from '@reach/router';
import React from 'react';

  function GeneralField(props){

      return(
        <>
        <div className="myRow center">
        <input type={props.type} required={props.required} 
        className="generalField" name={props.name} value={props.value}
         placeholder={props.placeholder} onChange={props.onChange} />
        </div>
        </>
      )
    }
  
  export default GeneralField;