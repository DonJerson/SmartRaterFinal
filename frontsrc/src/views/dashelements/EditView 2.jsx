import { Link, navigate } from "@reach/router"
import MaterialInput from "../../elements/inputs/MaterialInput"
import ModalTitle from "./ModalTitle"
import React from "react"

export default (props)=> {
    const lead = props.userPack.user
    const leadId = lead.id
    const leadName = lead.first_name + " " + lead.last_name
  
  
    const updateUser = (e)=>{
        console.log("tamo aqui",e.target.name)
        let neoUser = {...lead}
        neoUser[e.target.name] = e.target.value
        props.userPack.methods.stateHandling('user',neoUser)
    }
    const saveUser = ()=>{
        const token =  window.localStorage.getItem('token')
        const axios =props.userPack.methods.axios
        let updateUser={}
        const user = props.userPack.user
        updateUser.first_name = lead.first_name
        updateUser.last_name = lead.last_name
        axios.defaults.headers.put['Authorization']="JWT "+token
        axios.defaults.headers.post['Authorization']="JWT "+token
        axios.put(
            props.userPack.baseUrl+"api/customer/"+leadId+"/",user
        ).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        navigate("/dashboard",{replace:true})
    }
    return (
      <>
      <div className="Login center outterModal">
  
  <div className="modalGreenCard flex-col-hstart-vstart" style={{ width:"80%", 
  maxHeight:"70%",background:"white",padding:"20px",borderRadius:"10px",
  }}>
    <ModalTitle/>
    <div className="myRow" style={{gap:8}}>
    <MaterialInput value={lead.first_name} onChange={updateUser} name='first_name'
    label="First name" type="text"/>

    <MaterialInput label="Middle name" onChange={updateUser}  value={lead.middle_name} 
    type="text" name='middle_name'/>
    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput value={lead.last_name} onChange={updateUser}
     label="Last name" type="text" name='last_name'/>
    <MaterialInput label="Phone" type="text" name='phone' value={lead.phone} 
     onChange={updateUser}/>
    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>

    <MaterialInput label="Email" type="text" name='email' value={lead.email} 
     onChange={updateUser}/>
    </div>
  
    <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
       <Link to='password'> <p>Change password</p></Link>
    </div>
    <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
       <Link to='verify'> <p>Verify Email</p></Link>
    </div>
        
    <div className='myRow center' style={{marginBottom:"12px",marginTop:"18px"}}>
        <div className="frame-2 center link" onClick={saveUser}>
          <p className="txt-1085 flex-hcenter">Save</p>
          </div>
        </div>

          
        </div>
        
      </div>
     
  
      </>
    )
  }