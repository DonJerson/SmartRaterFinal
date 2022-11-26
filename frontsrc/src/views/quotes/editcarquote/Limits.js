import React from "react"
import dollarize from "../../../functions/dollarize"
import "./styles.css"

const dollarizeCoverage = (coverage) => {
  if(coverage === "" || coverage === null|| coverage === undefined
  || coverage === "undefined"|| coverage == "0" || coverage == 0){
  return("No Coverage")
    
  }return dollarize(coverage)
}

export default function Input(props) {
  let autoEls={}
  try {
    autoEls= props.quote.personalAutoQuoteElements
  } catch (error) {
    
  }

  return (
<div className="frame-109 flex-row-vcenter-hstart" >
<p className="txt-290">Liability:</p>
<div className="flexStart" style={{width:"100%"}}>
      <div className="inputtext">
        <p className="txt-884">PIP: {dollarizeCoverage(autoEls.pipCoverage*1000)} Dedictible: {dollarizeCoverage(autoEls.pipDeductible)}</p>
      </div>
      <div className="inputtext">
        <p className="txt-884">Bodily Injury: {dollarize(autoEls.biCoverage*1000)+"/"+
        dollarize(autoEls.biCoverage*2000)}</p>
      </div>
      <div className="inputtext">
        <p className="txt-884">Uninsured Motorist: {dollarize(autoEls.uninsuredMotorist*1000)+"/"+
        dollarize(autoEls.uninsuredMotorist*2000)}</p>
      </div>
      <div className="inputtext">
        <p className="txt-884">Rental: {(autoEls.rentalDeductible)} {autoEls.rentalDeductible?"Deductible":""}</p>
      </div>
      <div className="inputtext">
        <p className="txt-884">Towing: {(autoEls.towingDeductible)} {autoEls.towingDeductible?"Deductible":""}</p>
      </div>
    </div>
    <div className="flexEnd" style={{width:"fit-content"}}>
    <img onClick={props.onClick}
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/th56l9v6g6p-974%3A1659?alt=media&token=1307f33e-6c02-4969-a314-f4990f6f9d80"
        alt="Not Found"
        className="frame-1004 link"
      />
    </div>
    </div>
  )
}
