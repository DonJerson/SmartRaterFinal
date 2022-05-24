
import React from 'react';

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
function companyName(companyAcronym){
    let companyName = "";
    switch(companyAcronym){
      case "UAIC":
        companyName = "United Automobile Ins Co";
        break;
      case "BRISTOL":
        companyName = "Bristol West";
        break;
        case "NATIONAL":
          companyName = "National General";
          break;
    }
    return companyName;
  }

function QuoteLine(props){
    console.log("la linea",props.line)
    return(
      <>
          <div className="myRow" style={{marginTop:8,height: 27, position: 'relative',}}>
  
  <svg width="22" style={{position:"relative",top:props.dimensions.width<900?0:3}} height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.04404 14.5H8.04548H8.0575V14.5L8.06308 14.5C8.2903 14.4974 8.51578 14.4528 8.72578 14.3675C8.93527 14.2825 9.12669 14.1581 9.28647 13.9994C9.28689 13.999 9.2873 13.9986 9.28771 13.9982L20.2636 3.21527C20.4262 3.06943 20.5581 2.89284 20.6484 2.69414C20.7408 2.49073 20.7869 2.27017 20.782 2.04666C20.777 1.82316 20.7211 1.60487 20.62 1.40563C20.5191 1.20663 20.3759 1.03227 20.2025 0.891278C20.0291 0.750369 19.8286 0.645119 19.6141 0.579511L19.4678 1.05765L19.6141 0.579511C19.3996 0.51391 19.1737 0.488679 18.9496 0.504649C18.7255 0.520618 18.5057 0.577622 18.3034 0.673725C18.1065 0.767316 17.9287 0.896842 17.7821 1.05713L8.02888 10.6375L3.42657 6.23415C3.42656 6.23414 3.42655 6.23413 3.42654 6.23412C3.11335 5.93443 2.69112 5.76742 2.25588 5.75499C1.82065 5.74256 1.38929 5.88512 1.05776 6.16446C0.72453 6.44523 0.516405 6.84557 0.500922 7.28273C0.485427 7.72024 0.665123 8.13395 0.980152 8.43541L0.980476 8.43572L6.82016 14.0138C6.8206 14.0142 6.82103 14.0147 6.82147 14.0151C6.98253 14.1707 7.17437 14.2921 7.38361 14.3745C7.59338 14.457 7.81803 14.4993 8.04404 14.5Z" fill="#0FBC9D" stroke="#0FBC9D"/>
  </svg>
      <p className="subtitle3 textAlign" style={{left:32, position: 'absolute', fontSize: 22, 
       color: 'rgba(71.19, 71.19, 71.19, 1)',}}>{companyName(props.line.insurer.short)}</p>
      <p className="subtitle3 " style={{position:"absolute",right:0, fontSize: 22, 
       color: 'rgba(71.19, 71.19, 71.19, 1)',}}>
        ${props.line.downPayment} Down, ${props.line.monthlyPayment}/m | Total Premium: ${formatNumber(props.line.totalPremium)}
        
        </p>
  
      </div>
  
      </>)
  }

export default QuoteLine;