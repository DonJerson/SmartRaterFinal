import React from 'react';
import Selector from '../secondaryelements/Selector';
function AdditionalDriverForm(props){
    return(
      <>
      <Selector name="driver1" options={['1','2','3','4']} selector={props.selector} 
      userPack={props.userPack} />
      <div className="form-group">
          <label htmlFor="additionalDriverAge">Age</label>
          <input type="number" className="form-control" id="additionalDriverAge" placeholder="Enter Age" name="additionalDriverAge" value={props.additionalDriverAge} onChange={props.handleChange}/>
      </div>
      <div className="form-group">
          <label htmlFor="additionalDriverLicense">License</label>
          <input type="text" 
          className="form-control" id="additionalDriverLicense" placeholder="Enter License"
          name="additionalDriverLicense" value={props.additionalDriverLicense} onChange={props.handleChange}/>
      </div>
      {props.children}
      </>
    )
  }

export default AdditionalDriverForm;