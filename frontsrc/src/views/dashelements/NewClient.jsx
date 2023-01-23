import { Link, navigate } from "@reach/router"
import MaterialInput from "../../elements/inputs/MaterialInput"
import ModalTitle from "./ModalTitle"
import React from "react"
import Toggle from "./Toggle"
import NewLeadForm from '../../views/dashelements/NewLeadForm';
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
  const textChange=(e)=>{
    let neoLead = {...lead}
    neoLead['comments'] = e.target.value
    setClient(neoLead)
  }
  const onChange = (event) => {
    setClient({ ...lead, [event.target.name]: event.target.value })
  }

  const save=()=>{
    console.log("saving",lead)
  }

const labelize=(list)=>{
  let neoList = []
  list.map((c,index)=>{
    neoList.push({label:c,value:c})
  })
  return neoList
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
<NewLeadForm userPack={props.userPack}/>





          
        </div>
        
      </div>
     
  
      </>
    )
  }