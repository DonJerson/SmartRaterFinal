import { Link } from "@reach/router"
import React from "react"
import "../css/dash.css"

export default function Nameline(props) {
  return (
    <div className=" center" style={{minWidth:"120px"}}>
      <p className="title6" style={{paddingRight:"10px"}}>{props.text || "No name"}</p>
      <Link to='/dashboard/edit'>
      <img 
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/th56l9v6g6p-974%3A1659?alt=media&token=1307f33e-6c02-4969-a314-f4990f6f9d80"
        alt="Not Found"
        className="group-89"
      /></Link>
    </div>
  )
}