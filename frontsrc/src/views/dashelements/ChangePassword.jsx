import { Link } from "@reach/router"
import MaterialInput from "../../elements/inputs/MaterialInput"
export default (props)=> {
    const lead = props.userPack.user
    const leadId = lead.id
    const leadName = lead.first_name + " " + lead.last_name
  
    console.log("tamo aqui",lead)
    return (
      <>
      <div className="Login center" style={{position:'fixed',width: '100%'
      ,marginTop: "0px", zIndex:1000,top:"0px",
       height:'100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
       display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
  
  <div className=" flex-col-hstart-vstart" style={{ width:"80%", maxHeight:"70%"
  ,background:"white",padding:"20px",borderRadius:"10px",
  }}>
              <Link className="center" to="../">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u8r5dgewyx-I961%3A1293%3B961%3A1033?alt=media&token=191a567f-78e7-4bb5-862a-1e0412cb0bda"
            alt="Not Found"
            className="frame-3"
          />
          </Link>
                 <div className='myRow center' style={{marginBottom:"12px",marginTop:"0px"}}>
          <p className="txt-086">New password</p>
  
        </div>
        <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="Password" type="text"/>
    <MaterialInput label="Re-type Password" type="text"/>
    </div>
        <div className='myRow center' style={{marginBottom:"12px",marginTop:"18px"}}>
        <div className="frame-2 center">
          <p className="txt-1085 flex-hcenter">Save Password</p>
          </div>
        </div>

      </div>
      </div>
  
      </>
    )
  }