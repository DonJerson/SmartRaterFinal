import { Link, navigate } from "@reach/router"
import MaterialInput from "../../elements/inputs/MaterialInput"
import ModalTitle from "./ModalTitle"
import React from "react"
import Toggle from "./Toggle"

export default (props)=> {
  const [lead, setClient] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    notes: "",
    address2: "",
    prior:true,
    new:false,
    married:false,
    mortgage:true,
    inspections:false,
    primary:true
  })
  
  const onChange = (event) => {
    setClient({ ...lead, [event.target.name]: event.target.value })
  }
  

    return (
      <>
      <div className="Login center outterModal">
  
  <div className="modalGreenCard flex-col-hstart-vstart" style={{ width:"80%", 
  maxHeight:"75%",background:"white",padding:"20px",borderRadius:"10px", overflowY:"auto"}}>

             <div className="titlerow flex-row-vcenter-hstart">
          
          <Link to="../" className='center link'>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u8r5dgewyx-I961%3A1293%3B961%3A1033?alt=media&token=191a567f-78e7-4bb5-862a-1e0412cb0bda"
            alt="Not Found"
            className="frame-3"
          />
          </Link>
          <div className="myRow center">
          <p className="txt-086 flex-hcenter" style={{marginLeft:"-14px"}}>New Account</p>
          </div>
        </div>

    <div className="myRow" style={{gap:8}}>
    <MaterialInput value={lead.first_name} onChange={onChange} name='first_name'
    label="First Name" type="text"/>

    <MaterialInput label="Middle" onChange={onChange}  value={lead.middle_name} 
    type="text" name='middle_name'/>
    <MaterialInput value={lead.last_name} onChange={onChange}
     label="Last Name" type="text" name='last_name'/>
    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    
    <MaterialInput label="Phone" type="text" name='phone' value={lead.phone} 
     onChange={onChange}/>
         <MaterialInput label="Email" type="text" name='email' value={lead.email} 
     onChange={onChange}/>
    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput value={lead.address} onChange={onChange} name='address'
    label="Address" type="text"/>

    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="Address2" onChange={onChange}  value={lead.address2} 
    type="text" name='address2'/>
       </div>
       <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="City" onChange={onChange}  value={lead.city} 
    type="text" name='city'/>
        <MaterialInput label="State" onChange={onChange}  value={lead.state} 
    type="text" name='state'/>
        <MaterialInput label="Zipcode" onChange={onChange}  value={lead.zipcode} 
    type="text" name='zipcode'/>
       </div>
       <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        <select className="select-textr">
        <option value="HO3">HO3</option>
        </select> <select className="select-textr">
        <option value="4 Corners">4 Corners</option>
        </select> <select className="select-textr">
        <option value="Masonry">Masonry</option>
        </select>
        </div>
       <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        <div>Prior</div>
     <Toggle function={setClient} name="prior" lead= {lead} />
      <div>Mortgage</div>
      <Toggle function={setClient} name="mortgage" lead= {lead}/> 


      </div>
      <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
      <div>New</div>
       <Toggle function={setClient} name="new" lead= {lead}/><div>Married</div>
       <Toggle function={setClient} name="married" lead= {lead}/></div>
      <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        
      <div>Inspections</div>
       <Toggle function={setClient} name="inspections" lead= {lead}/> <div>Primary</div>
       <Toggle function={setClient} name='primary' lead= {lead}/>


      </div>


      <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Year Built" onChange={onChange}  value={lead.year} 
    type="text" name='year'/>
            <MaterialInput label="Sq Ft" onChange={onChange}  value={lead.area} 
    type="text" name='area'/>
     <select className="select-textr">
        <option value="1">1</option>
        </select> <select className="select-textr">
        <option value="1">1</option>
        </select>
        </div>
        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Roof Year" onChange={onChange}  value={lead.middle_name} 
    type="text" name='year'/>   
     <select className="select-textr" style={{wdith:"80px !important"}}>
        <option value="Gable">Gable</option>
        </select> <select className="select-textr" style={{wdith:"80px !important"}}>
        <option value="No Pool">No Pool</option>
        </select>

   
        </div>
        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        </div>
<div className="myRow center" style={{paddingTop:"15px"}}>
<div className="quoteLine" style={{display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
    <div className="CallButton" style={{height: 24, paddingLeft: 11, paddingRight: 11, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(176.37, 176.37, 176.37, 1)', boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.40)', borderRadius: 4, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        <p className="Cancel" style={{fontSize: 16, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white',}}>Cancel</p>
    </div>
    <div style={{width: 48,}}/>
    <div className="CallButton" style={{height: 24, paddingLeft: 11, paddingRight: 11, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(15, 188, 157, 1)', boxShadow: '0px 2px 2px rgba(54, 157, 139, 1)', borderRadius: 4, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        <p className="Save" style={{fontSize: 16, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white',}}>Save</p>
    </div>
</div>
</div>

          
        </div>
        
      </div>
     
  
      </>
    )
  }