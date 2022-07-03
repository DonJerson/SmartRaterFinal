import Modal from "./Modal";
import AutoQuote from '../dashelements/AutoQuote';
import Button from "../buttons/greenButton";
import { Link, navigate,Router } from "@reach/router";

export default function AutoSelect(props) {
    const newAutoQuote=()=>{
        navigate('/autoquote/select-vehicle-vin')
    }
    const pullUpQuote=()=>{
        navigate('/savedquotes/1')
    }
    const quote =  props.userPack.user.quoteList[0]

    return(
        <>
        <Modal>
            <div className="myRow flexStart">
            <Link to="../" className='center link'>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u8r5dgewyx-I961%3A1293%3B961%3A1033?alt=media&token=191a567f-78e7-4bb5-862a-1e0412cb0bda"
            alt="Not Found"
            className="frame-3"
          />
          </Link>
            <p> Resume quote</p>
            </div>

            <p style={{marginTop:"10px",marginBottom:"10px"}}> You already started a quote</p>
            <div className='link' style={{position:"relative",padding:"10px"}}>
            <AutoQuote quote={quote} />
            </div>
         
            <div className="myRow center"style={{marginTop:"10px"}}>
            <Button onClick={newAutoQuote} text="New Quote"/>
            </div>
            
        </Modal>
        </>
    )
}