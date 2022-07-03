import { Link } from "@reach/router"

export default ()=> {

    return (
      <>
      <div className="Login center outterModal">
  
  <div className="modalbox flex-col-hstart-vstart">
  <Link to="../">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s1jny69ti6-961%3A1045?alt=media&token=3819de9b-dec7-4175-96b3-bca05967dd80"
          alt="Not Found"
          className="frame-1"
        />
        </Link>
        <div className="modalcontent flex-col-hstart-vstart">
          <div className="fieldbox flex-col-hstart-vstart">
            <p className="txt-924">Account Name</p>
            <NiceInput placeholder="test" type="text"/>
          </div>
          <div className="fieldbox flex-col-hstart-vstart">
            <p className="txt-924">Email</p>
            <NiceInput placeholder="test" type="text"/>
          </div>
          <div className="fieldbox-1 flex-col-hstart-vstart">
            <p className="txt-924">Phone</p>
            <NiceInput placeholder="test" type="text"/>
          </div>
          <div className="fieldbox-1 flex-col-hstart-vstart">
            <p className="txt-924">Phone</p>
            <NiceInput placeholder="test" type="text"/>
          </div>
          <div className="fieldbox-1 flex-col-hstart-vstart">
            <p className="txt-924">Phone</p>
            <NiceInput placeholder="test" type="text"/>
          </div>
        </div>
      </div>
      <div className="myRow center" style={{height:"100%",width:"100%",maxHeight:"100px"}}>
        <button>Qloq</button>
          </div>
      </div>
     
  
      </>
    )
  }
  