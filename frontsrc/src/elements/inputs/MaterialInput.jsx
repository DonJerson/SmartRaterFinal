import { Router } from '@reach/router';
import React from 'react';
import Selector from '../../secondaryelements/Selector';
import '../media/css/material.css';

export default function(props){
    if(props.type==="select"){
        return(
        <>

        <div className="myRow">
          <p className='txt-290'> {props.label}:</p>
           
    <select className="select-text" required name={props.name} onChange={props.onChange} 
    value={props.value}>
        {props.options.map((c,index)=>(
            c.value==props.value?
<option key={index}  value={props.selected}>{c.value}</option>
            :
            
            <option key={index}
            value={props.value==c.label?true:false}>{c.label}</option>
        ))}
    </select>
    {/* <div className="myRow flexEnd" style={{width:"60px"}}>
    {props.edit?
    <img onClick={props.onClick} 
    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/th56l9v6g6p-974%3A1659?alt=media&token=1307f33e-6c02-4969-a314-f4990f6f9d80"
    alt="Not Found"
    className="frame-1004 link"
  />
    :
    <img style={{marginLeft:"10px"}} onClick={props.onClick} 
    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1704?alt=media&token=a7013aa8-ab91-4501-b14f-83f2d7aba2e1"
    alt="Not Found"
    className="frame-1004 link"
  />

    }
  </div> */}
    {/* <label className="select-label">State</label> */}
    </div>
</>)}
    return(
        <>
        <div className="material-textfield">
        <input type={props.type} placeholder={props.placeholder?props.placeholder:" "}
         name={props.name} onChange={props.onChange} value={props.value}/>
        <label className="" id='inputLabel'>{props.label}</label>
        </div>
        </>
    )
}
