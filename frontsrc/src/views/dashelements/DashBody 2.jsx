import { Link } from "@reach/router";

export default function(props){
    return(
      <>
      <div className="dash center" style={{marginTop:"26px"}}>
      <div className="dashbody center flex-row-vstart-hstart">
        <div className="leftwing flex-col-hstart-vstart">
          <div className="elementline flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1704?alt=media&token=a7013aa8-ab91-4501-b14f-83f2d7aba2e1"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Active Policies</p>
          </div>
          <div className="elementline flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1712?alt=media&token=0f0154f9-b0b8-4901-80da-90b444dffb87"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Vehicles</p>
          </div>
          <div className="elementline flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1716?alt=media&token=ae48a26c-ec72-4519-b7eb-29fca8d7b843"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Drivers</p>
          </div>
          <div className="elementline flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1720?alt=media&token=d908b11e-79c8-470f-b687-83c1349fc9dd"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Business</p>
          </div>
        </div>
        <div className="rightwing flex-col-hstart-vstart">
         
          <div className="elementline-1 flex-row-vcenter-hstart link">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1724?alt=media&token=7ef23acb-a5b5-4df4-8507-bbbe218751c9"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Documents</p>
          </div>
          
          <div className="elementline-1 flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1728?alt=media&token=3646f0b9-9e8f-45ad-b921-2d948848b99e"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Payment History</p>
          </div>
          <div className="elementline-1 flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1732?alt=media&token=66d7d05e-b2ec-41c6-be27-8dccd0858ca9"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Quotes Elements</p>
          </div>
     
          <div className="elementline-1 flex-row-vcenter-hstart">
          <Link to="/savedquotes">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1736?alt=media&token=c604523e-e9f4-4705-8e96-428cf59a4136"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Quotes</p>
            </Link>
          </div>
        
          <div className="elementline-1 flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1740?alt=media&token=bbd3e426-467f-4b0f-90db-57db4442963d"
              alt="Not Found"
              className="frame-104"
            />
            <p className="txt-838">Payment Methods</p>
          </div>
        </div>
        
      </div>
   
  
  </div>
  <div className="myRow center" style={{marginTop:"40px"}}>
  {/* <div className='bg' onMouseEnter={(e)=>{
    console.log("penetro")
    const textBg=  e.target.firstChild
    const textel=  e.target.firstChild
    textBg.style.top="-10px"
    textel.style.top="-10px"
    }}  onMouseLeave={(e)=>{
      console.log("salio")
      const textBg=  e.target.firstChild
      const textel=  e.target.firstChild
      textel.style.color="black"
     
      }}
    
    >
  <div id='textbg'>
  <p id='First_name'>First name</p>
  </div>
  
  </div> */}
  </div>
  <div className="myRow center" style={{marginTop:"70px"}}>
  
    <div className="logOutBox center">
      <p className="pinkButtonTitle link" onClick={props.logOut}>Logout</p>
    </div>
  </div>
  
  
  
  </>
    )
  }