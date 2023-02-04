import { navigate } from "@reach/router";
import React from "react"
import "./styles.css"

function separator(numb) {
  try {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  } catch (error) {
    return numb
  }

}

function QuoteLines(props){
  console.log("refreshed",props.lines)
  return(
    <>
    {
      props.lines.map((line,index)=>(
        <QuoteLine setBind={props.setBind} bindButton={props.bindButton}
        index={index} line={line} key={index}/>
      ))
    }
    </>
  )
}
function QuoteLine(props){
 
  const onClick=()=>{
    console.log(props.line.insurer.name)
    props.setBind(props.line.id)
  }
  let selectedString=""
  //determine if line is selected

  if(props.bindButton==props.line.id){
    selectedString="selected"
  }
  return(
    <div className={`quoteline flex-row-vcenter-hstart ${selectedString}`} onClick={onClick}>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/68jjm911hw5-1002%3A1448?alt=media&token=31935afe-cfbd-489f-bf93-3a93cd4bedc4"
      alt="Not Found"
      className="vector-1"
    />
    <p className="txt-892">{props.line.insurer.name}</p>
    <p className="txt-111">${props.line.downPayment}, ${props.line.monthlyPayment}/m</p>
  </div>
  )

}
function CoveredAuto(props){
  return(
    <>
    <p className="txt-528">{props.auto.make} {props.auto.model} {props.auto.year}</p>
    <p className="txt-232">${props.auto.collisionDeductible} Comp/Col</p>
    </>
  )
}
function Driver(props){
  return(
    <>
        <div className="flex-row-vcenter-hcenter">
    <p className="txt-528" style={{minWidth:"100px"}}>{props.name}</p>
    </div>
    </>
  )
}
function Drivers(props){
  let mainInsured="No name"
  try {  mainInsured = props.mainInsured.first_name +" "+props.mainInsured.last_name
  } catch (error) {
    
  }
 
  return(
    <>
     <div className="frame-100014 flex-row-vcenter-hcenter" >
            <p className="txt-345">Drivers:</p>
            <div className="center" style={{height:"100%",width:"100%"}}>
    <Driver name={mainInsured}/></div>
    </div>
    <div style={{marginLeft:"52px"}}>
    {/* <Driver name='Jerson'/> */}
    </div>
   
 

    </>
  )
}

export default function Quotecard(props) {
  //const autoEls = props.quote.personalAutoQuoteElements
  let autoEls={coveredAutos:[]}
  let quote={lines:[]}
  const [bindButton,setBind]=React.useState(false)
  try {
    quote=props.quote
    autoEls = quote.personalAutoQuoteElements
  } catch (error) {
    console.log("error",error)
  }


  console.log("my user",quote,autoEls)

  const onClick= (e)=>{
    console.log("clicked")
    navigate("/savedquotes/"+props.quote.id)
  }
  let businessType = "Auto"
  try {
    props.quote.businessType?businessType=props.quote.businessType:businessType="Auto"
    businessType=="PA"?businessType="Personal Auto":businessType="Business Auto"
  } catch (error) {
    
  }
  const editQuote=()=>{
    console.log(props)
    navigate("/savedquotes/"+props.quote.id+"/edit")
  }

  return (
    <>
    <div className="quotecard flex-col-hcenter-vcenter">
      <div className="top flex-row-vcenter-hcenter">
        
        <div className="frame-66 flex-row-vcenter-hstart">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/68jjm911hw5-1002%3A1433?alt=media&token=b6899799-1829-46b7-a020-b9a109666e2c"
            alt="Not Found"
            className="checkmark"
          />
          <p className="txt-787">{businessType} Quote</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/68jjm911hw5-1027%3A2165?alt=media&token=4a46b686-553f-4261-9885-7cf42e796bba"
            alt="Not Found"
            className="vector link"
            onClick={editQuote}
          />
        </div>
      </div>
      <div className="innerbox flex-col-hcenter-vcenter">
        <div className="quotedetails flex-col-hcenter-vstart" >
          <div style={{marginBottom:"0px"}}>
          <Drivers mainInsured={autoEls.mainInsured}/>
          </div>
          
          <div className="frame-105 flex-row-vcenter-hstart">
            <p className="txt-345">Cars:</p>
            {autoEls.coveredAutos.map((auto,index)=>(
              
                <CoveredAuto auto={auto} key={index}/>
            ))}

          </div>
          <div className="frame-106 flex-row-vcenter-hstart">
            <p className="txt-345">Limits:</p>
            <p className="txt-232">${separator(autoEls.pipCoverage)} PIP Deductible | X UI/UN | X BI |</p>
          </div>
        </div>

        <div className="line-19" />
        <div style={{padding:"8px"}}>
        <div className="quotelines flex-col-hcenter-vcenter">
          <QuoteLines setBind={setBind} bindButton={bindButton} lines={quote?quote.lines:[]}/>
              
      
        </div>
        <div className="myRow center" style={{paddingBottom:"10px",paddingTop:"4px"}}>
          {bindButton?
                  <div className="callbutton flex-col-hcenter-vcenter link" onClick={onClick}>
                  <p className="txt-916 flex-hcenter">Start Coverage</p>
                  </div>
          :
          <div className="callbutton disabled flex-col-hcenter-vcenter link" onClick={onClick}>
          <p className="txt-916 flex-hcenter disabledText">Select a carrier</p>
          </div>
          }

      </div>

    </div>
      </div>
    </div>
    </>
  )
}
