import { Link } from "@reach/router"

export default (props)=> {
    const leadId = parseInt(props.leadId)
    const lead = props.clients.find(lead=>lead.id===leadId)
    let leadName=''
    try {
      leadName = `${lead.first_name} ${lead.last_name}`
    } catch (error) {
      
    }
  
    console.log("tamo aqui",lead)
    return (
      <>
      <div className="Login center" style={{position:'fixed',width: '100%', paddingLeft: 17, 
      paddingRight: 17, marginTop: "0px", paddingBottom: 20,zIndex:1000,top:"0px",
       height:'100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
       display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
  
  <div className="modalbox flex-col-hstart-vstart">
  <div className="titlerow flex-row-vcenter-hstart">
          
          <Link className="center" to="../">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u8r5dgewyx-I961%3A1293%3B961%3A1033?alt=media&token=191a567f-78e7-4bb5-862a-1e0412cb0bda"
            alt="Not Found"
            className="frame-3"
          />
          </Link>
          <p className="txt-086 flex-hcenter">Smart Quotes</p>
        </div>
  
        <p className="txt-947">Account: {leadName}</p>
        <div className="line flex-row-vcenter-hstart">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kk8f0stc98-961%3A1297?alt=media&token=2890c8cf-ac06-4661-af0b-73005543901e"
            alt="Not Found"
            className="iconholder"
          />
          <p className="txt-817 flex-hcenter">New Policy</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kk8f0stc98-961%3A1299?alt=media&token=285a4abd-604f-4d08-8c43-d98d56a9c6aa"
            alt="Not Found"
            className="addbutton"
          />
        </div>
        <div className="line flex-row-vcenter-hstart">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kk8f0stc98-961%3A1303?alt=media&token=8346eaf5-78c3-48e0-aaca-89cf68b0e098"
            alt="Not Found"
            className="iconholder-1"
          />
          <p className="txt-817 flex-hcenter">New Address</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kk8f0stc98-961%3A1306?alt=media&token=fff786b5-1bec-4945-8ea2-836a3a3c8758"
            alt="Not Found"
            className="addbutton"
          />
        </div>
        <div className="line flex-row-vcenter-hstart">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kk8f0stc98-961%3A1308?alt=media&token=bd08b5dc-6109-4923-8062-546fb3e388ab"
            alt="Not Found"
            className="iconholder-1"
          />
          <p className="txt-817 flex-hcenter">New Car</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kk8f0stc98-961%3A1313?alt=media&token=6d9385e0-efbf-43ae-9ecc-3bd79af5d07e"
            alt="Not Found"
            className="addbutton"
          />
        </div>
        <div className="line-1 flex-row-vcenter-hstart">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kk8f0stc98-961%3A1318?alt=media&token=412e9850-c68d-4d3d-b5f1-25fd70eb3bec"
            alt="Not Found"
            className="addbutton-1"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kk8f0stc98-961%3A1315?alt=media&token=29f69540-24b4-4b31-ad7e-01f681ab303e"
            alt="Not Found"
            className="iconholder-2"
          />
          <p className="txt-851 flex-hcenter">New Quote</p>
        </div>
        <div className='myRow center' style={{height:"100%",marginBottom:"12px",marginTop:"8px"}}>
        <div className="frame-2 center">
          <p className="txt-1085 flex-hcenter">Edit Account</p>
          </div>
        </div>
      
      
      <div className="myRow center" style={{padingTop:"",height:"100%",width:"100%",maxWidth:"277px",maxHeight:"100px"}}>
      <div className="frame-2 center">
          <p className="txt-1085 flex-hcenter">Scrape Account</p>
          </div>
        </div>
          
        </div>
        
      </div>
     
  
      </>
    )
  }