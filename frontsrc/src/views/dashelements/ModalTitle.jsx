import { Link } from "@reach/router"

export default (props)=> {
    return(
        <>
          <div className="titlerow flex-row-vcenter-hstart">
          
          <Link to="../" className='center link'>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u8r5dgewyx-I961%3A1293%3B961%3A1033?alt=media&token=191a567f-78e7-4bb5-862a-1e0412cb0bda"
            alt="Not Found"
            className="frame-3"
          />
          </Link>
          <div className="myRow center">
          <p className="txt-086 flex-hcenter" style={{marginLeft:"-14px"}}>Edit Account</p>
          </div>
        </div>
        </>
    )
}