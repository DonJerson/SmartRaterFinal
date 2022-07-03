import React from "react"
import Button from "../buttons/greenButton"
import "./styles.css"

export default function Quotecard() {
  return (
    <div className="quotecard2 flex-col-hcenter-vcenter">
      <div className="top flex-row-vcenter-hcenter">
        
        <div className="frame-66 flex-row-vcenter-hstart">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/68jjm911hw5-1002%3A1433?alt=media&token=b6899799-1829-46b7-a020-b9a109666e2c"
            alt="Not Found"
            className="checkmark"
          />
          <p className="txt-787" style={{fontSize:"16px"}}>Homeowners</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/68jjm911hw5-1027%3A2165?alt=media&token=4a46b686-553f-4261-9885-7cf42e796bba"
            alt="Not Found"
            className="vector"
          />
        </div>
      </div>
      <div className="innerbox flex-col-hcenter-vcenter">
        <div className="quotedetails2 flex-col-hcenter-vstart">
          <div className="frame-100014 flex-row-vcenter-hcenter">
            <p className="txt-345 genKarla">Address:</p>
            <p className="txt-516 flex-hcenter genKarla">71 Ferne ln, Lake Worth FL 33567</p>
          </div>
          <div className="myRow " style={{display:"grid",gridTemplateRows:"auto",
          gridTemplateColumns:"auto auto auto auto",gridGap:"0px"
        }}>
          <div className="frame-667 center" style={{display:"grid",rowGap:"30px !important"}}>
            <div>     <p className="txt-091 genKarla">F - Medical Payments</p></div>
 
      <p className="txt-2108 genKarla">E - Personal Liability</p>
      <p className="txt-899 genKarla">D - Loss of Use</p>
      <p className="txt-695 genKarla">C - Personal Property</p>
      <p className="txt-413 genKarla">B - Other Structures</p>
      <p className="txt-947 genKarla">A - Dwelling</p>
    </div>          <div className="frame-6667">
      <p className="txt-091 genKarla">$5,000</p>
      <p className="txt-2108 genKarla">$100,000</p>
      <p className="txt-899 genKarla">$20,000</p>
      <p className="txt-695 genKarla">$30,000</p>
      <p className="txt-413 genKarla">$8,000</p>
      
    </div>
    <div className="frame-667 flex-col-hstart-vstart">
      <p className="txt-091 genKarla">Sinkhole Coverage</p>

      <p className="txt-2108 genKarla">C Replacement Cost</p>

      <p className="txt-899 genKarla">Law Code Liability</p>
      <p className="txt-695 genKarla">Loss Assessment</p>
      <p className="txt-413 genKarla">Mold Liability</p>
      <p className="txt-947 genKarla">Mold</p>
    </div>          <div className="frame-6667 flex-col-hstart-vstart">
      <p className="txt-091 genKarla">No</p>
      
      <p className="txt-2108 genKarla">Yes</p>
      <p className="txt-899 genKarla">$20,000</p>
      <p className="txt-695 genKarla">$3,000</p>
      <p className="txt-413 genKarla">$50,000</p>
      
    </div>

    </div>          <div className="frame-100014 flex-row-vcenter-hcenter" style={{marginTop:"8px",
    marginBottom:"-4px"
}}>
            <p className="txt-345 genKarla">Deductibles:</p>
            <p className="txt-516 genKarla flex-hcenter">$500 All Perils, 2% Hurricane</p>
          </div>
    
        </div>
        <div className="line-19" />
        <div className="quotelines flex-col-hcenter-vcenter">
          <div className="quoteline flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/68jjm911hw5-1002%3A1448?alt=media&token=31935afe-cfbd-489f-bf93-3a93cd4bedc4"
              alt="Not Found"
              className="vector-1"
            />
            <p className="txt-892 genKarla">United Auto Insurance</p>
            <p className="txt-111 genKarla">$180 Down, $115/m</p>
          </div>
          <div className="quoteline flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/68jjm911hw5-1002%3A1452?alt=media&token=df1106a7-edbe-4eab-84f9-46b0bea89174"
              alt="Not Found"
              className="vector-2"
            />
            <p className="txt-892 genKarla">National General</p>
            <p className="txt-111 genKarla">$180 Down, $115/m</p>
          </div>
          <div className="frame-106 flex-row-vcenter-hstart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/68jjm911hw5-1002%3A1456?alt=media&token=efc72b87-1aa9-4ffd-b6ac-8ff1366672fb"
              alt="Not Found"
              className="vector-1"
            />
            <p className="txt-892 genKarla">Bristol West</p>
            <p className="txt-111 genKarla">$180 Down, $115/m</p>
          </div>
        </div>
        <div className="myRow center" style={{padding:"12px"}}>
        <Button text="Begin Coverage"/>
    </div>
      </div>
    </div>
  )
}
