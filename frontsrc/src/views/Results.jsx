import React from 'react';
import WhiteNavBar from '../elements/WhiteNavBar';
import Signature from '../elements/Signature';
import QuoteLine from '../elements/QuoteLine';
import Button from './buttons/greenButton';

//create a function that will render the quote card

// function formatNumber(num) {
//   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
// }
// function companyName(companyAcronym){
//   let companyName = "";
//   switch(companyAcronym){
//     case "UAIC":
//       companyName = "United Automobile Ins Co";
//       break;
//     case "BRISTOL":
//       companyName = "Bristol West";
//       break;
//       case "NATIONAL":
//         companyName = "National General";
//         break;
//   }
//   return companyName;
// }

// function QuoteLine(props){
//   console.log("la linea",props.line)
//   return(
//     <>
//         <div className="myRow" style={{marginTop:8,height: 27, position: 'relative',}}>

// <svg width="22" style={{position:"relative",top:props.dimensions.width<900?0:3}} height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8.04404 14.5H8.04548H8.0575V14.5L8.06308 14.5C8.2903 14.4974 8.51578 14.4528 8.72578 14.3675C8.93527 14.2825 9.12669 14.1581 9.28647 13.9994C9.28689 13.999 9.2873 13.9986 9.28771 13.9982L20.2636 3.21527C20.4262 3.06943 20.5581 2.89284 20.6484 2.69414C20.7408 2.49073 20.7869 2.27017 20.782 2.04666C20.777 1.82316 20.7211 1.60487 20.62 1.40563C20.5191 1.20663 20.3759 1.03227 20.2025 0.891278C20.0291 0.750369 19.8286 0.645119 19.6141 0.579511L19.4678 1.05765L19.6141 0.579511C19.3996 0.51391 19.1737 0.488679 18.9496 0.504649C18.7255 0.520618 18.5057 0.577622 18.3034 0.673725C18.1065 0.767316 17.9287 0.896842 17.7821 1.05713L8.02888 10.6375L3.42657 6.23415C3.42656 6.23414 3.42655 6.23413 3.42654 6.23412C3.11335 5.93443 2.69112 5.76742 2.25588 5.75499C1.82065 5.74256 1.38929 5.88512 1.05776 6.16446C0.72453 6.44523 0.516405 6.84557 0.500922 7.28273C0.485427 7.72024 0.665123 8.13395 0.980152 8.43541L0.980476 8.43572L6.82016 14.0138C6.8206 14.0142 6.82103 14.0147 6.82147 14.0151C6.98253 14.1707 7.17437 14.2921 7.38361 14.3745C7.59338 14.457 7.81803 14.4993 8.04404 14.5Z" fill="#0FBC9D" stroke="#0FBC9D"/>
// </svg>
//     <p className="subtitle3 textAlign" style={{left:32, position: 'absolute', fontSize: 22, 
//      color: 'rgba(71.19, 71.19, 71.19, 1)',}}>{companyName(props.line.insurer.short)}</p>
//     <p className="subtitle3 " style={{position:"absolute",right:0, fontSize: 22, 
//      color: 'rgba(71.19, 71.19, 71.19, 1)',}}>
//       ${props.line.downPayment} Down, ${props.line.monthlyPayment}/m | Total Premium: ${formatNumber(props.line.totalPremium)}
      
//       </p>

//     </div>

//     </>)
// }

function QuoteCard(props){
  return(
<>
<div className="Rectangle30" style={{width: "80vw", backgroundColor: 'white',
             borderRadius: 4, borderStyle: 'solid', borderWidth: 1, position: 'relative',
              borderStyle: 'solid', borderColor: 'rgba(15, 188, 157, 1)',}}
              >
                <div className="Rectangle32" style={{width: "80vw", height: 54, 
                  backgroundColor: 'rgba(15, 188, 157, 1)', borderTopLeftRadius: 4, borderTopRightRadius: 4,}}>
                  <div className="Checkmark" style={{padding:12,display:"flex",width:700,height: 25}}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12.5" fill="white"/>
<path d="M11.3902 16.7164H11.3918H11.3986V16.7164L11.4048 16.7163C11.5669 16.7143 11.7268 16.6788 11.8745 16.612C12.0216 16.5455 12.1535 16.4494 12.2619 16.3297C12.2622 16.3292 12.2626 16.3288 12.263 16.3283L18.4286 9.58262C18.5378 9.47264 18.6242 9.34212 18.6828 9.19854C18.7434 9.05017 18.773 8.89099 18.7698 8.73077C18.7666 8.57056 18.7306 8.41268 18.6642 8.26685C18.5978 8.12102 18.5022 7.99032 18.3834 7.88276L18.0478 8.25341L18.3834 7.88276C18.2646 7.77521 18.1251 7.69307 17.9734 7.6414C17.8217 7.58973 17.6611 7.56962 17.5013 7.5823C17.3416 7.59498 17.1861 7.64018 17.0444 7.71513C16.9082 7.78724 16.7875 7.88543 16.6891 8.00405L11.3802 13.8117L8.96589 11.2391C8.96588 11.2391 8.96587 11.2391 8.96586 11.2391C8.75237 11.0116 8.45726 10.8782 8.14543 10.8683C7.83359 10.8583 7.53058 10.9727 7.30306 11.1862C7.07554 11.3997 6.94215 11.6948 6.93224 12.0067C6.92232 12.3185 7.03669 12.6215 7.25018 12.849L7.25048 12.8494L10.532 16.3401C10.5324 16.3406 10.5329 16.3411 10.5333 16.3416C10.6427 16.4591 10.7749 16.553 10.922 16.6174C11.0696 16.6822 11.229 16.7158 11.3902 16.7164Z" fill="#0FBC9D" stroke="#0FBC9D"/>
</svg>
<p className="" style={{marginLeft:10,height: 22, fontSize: 24, fontWeight: '700', lineHeight: '100%', color: 'white',}}>Quoted on 10/07/2021</p>

</div>
</div>

<div className="QuotesContentBox" style={{position:"relative", boxSizing:"border-box",padding:"3vw",width: "100%", height: 'auto', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end',}}>
    <p className="title3" style={{fontWeight: '700', lineHeight: '100%', color: 'black',
      }}>Based on our SmartReview You Can Save an Average of  $419+/Year</p>
    <div style={{height: 10.67,}}/>
    {props.quote.lines.map((line,index)=>(
       <QuoteLine line={line} key={index} dimensions={props.dimensions}/>
    ))}
     
   
</div>

                
              </div>
</>
  )
}

function Body(props){
    return(
        <>
         <div className="" style={{paddingTop:"56px",paddingLeft:"9vw",paddingRight:"9vw"}}>
         <div className="myRow flexStart">
         <span className="karlaBold" style={{marginTop:10,fontSize:"28px",letterSpacing:"-0.05em",

          backgrouncColor:"black",color:"#000000"}}>
            Results 
            </span>   
            </div>
            <div className="myRow flexStart" >
            </div>
          

            </div>
        <div className="myRow center" style={{marginTop:"26px"}}>
            <div className="flexWrap center" id="myBox" style={{width:"540px"}}>
            {/* {props.userPack.user.quoteList.map((quote,index)=>(
              <QuoteCard quote={quote} key={index} dimensions={props.userPack.dimensions}/>
              ))} 
                <div className="Rectangle29" style={{wminWidth: "80vw", marginTop:47,display: 'flex',  padding: '3vw',boxSizing:"border-box",
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',borderColor: 'rgba(116.88, 116.88, 116.88, 1)',
            height: 216, backgroundColor: 'white', borderRadius: 4, borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', }}>
            <p className="title3" style={{width: "74vw"}}>
              Get Your Policy Bound TODAY - Speak to an Agent.
            </p>
              */}
              <div className="myRow center">
                <div className="lds-roller"><div></div><div></div><div></div><div>
                </div><div></div><div></div><div></div><div></div></div>
              </div>


          <div className="Rectangle29 center" style={{marginTop:47,display: 'flex',  padding: '3vw',boxSizing:"border-box",
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',borderColor: 'rgba(116.88, 116.88, 116.88, 1)',
            height: 216, backgroundColor: 'white', borderRadius: 4, borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', }}>
            <p className="title3" style={{width: ""}}>
              Please sit back while we work for you
            </p>

            <a href="tel:+15615320620" style={{margin:"10px"}}>
<Button text='Call us now!'/>
</a>
{/* 
        <div className="Rectangle28" style={{width:150, height: 10, marginTop:20, paddingTop: 19, paddingBottom: 18, paddingLeft: 79, paddingRight: 78,
        backgroundColor: 'rgba(15, 188, 157, 1)', boxShadow: '0px 4px 1px rgba(45.21, 157.25, 137.17, 1)',display: 'flex', flexDirection: 'row', 
           alignItems: 'center', justifyContent: 'center',}}>
             <a href="tel:+15615320620">

              <p className="2021" style={{fontSize: 26, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white',}}>Call us now!</p>
              </a>
  
</div> */}

                </div>


              {/* <CurrentStep localPack={props.localPack} userPack={props.userPack}/> */}
          
          
            </div>


        </div>
        {props.children}
      
      </>
    )
    
  }

function LoadingPage(props) {
  return (
    <>
             <div className="" style={{paddingTop:"86px",paddingLeft:"2vw",paddingRight:"2vw"}}>
         <div className="myRow center">
         <div className="Rectangle37" style={{width: 718, height: 354, padding:20,
          backgroundColor: 'rgba(248.63, 248.63, 248.63, 1)', 
          borderStyle: 'solid', borderWidth: 2, borderStyle: 'solid', borderColor: 'black',}}>
           <div className="myRow flexStart">
            <p className="Justa Moment, qq..." style={{fontSize: 36, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'black',}}>Just a Moment, qq...</p>
            </div>
            <div className="myRow flexStart" style={{marginTop:14}}>
<p className="We’refinalizing your quotes." style={{fontSize: 28, lineHeight: '100%', textAlign: 'center', color: 'rgba(93, 187, 233, 1)',}}>We’re finalizing your quotes.</p>
</div>
<div className="myRow flexStart" style={{height: 46, marginTop:20}}>
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="25.291" height="25.6987" fill="white"/>
<path d="M9.80174 15.8068L6.84152 12.7594L6.84157 12.7594L6.83541 12.7533C6.57713 12.4965 6.22814 12.3518 5.86292 12.355C5.49772 12.3583 5.15138 12.5092 4.89764 12.7704C4.64434 13.0312 4.50311 13.381 4.50005 13.7437C4.49699 14.1064 4.63228 14.4585 4.88098 14.7236L4.88093 14.7237L4.88698 14.7299L8.82447 18.7834L8.82453 18.7834C9.08119 19.0475 9.43239 19.1987 9.80174 19.1987C10.1711 19.1987 10.5223 19.0475 10.779 18.7834L10.779 18.7834L20.404 8.87493L20.4041 8.87498L20.41 8.86865C20.6587 8.60357 20.794 8.25145 20.7909 7.88872C20.7879 7.52597 20.6466 7.17619 20.3933 6.91544C20.1396 6.65422 19.7933 6.50332 19.4281 6.50005C19.0628 6.49679 18.7139 6.64149 18.4556 6.89829L18.4555 6.89824L18.4495 6.90447L9.80174 15.8068Z" fill="#5DBBE9" stroke="#5DBBE9"/>
</svg>

    <p className="Comparingquotes from carriers" style={{fontSize: 22, lineHeight: '100%', textAlign: 'center', color: 'rgba(146.62, 146.62, 146.62, 1)',}}>Comparing quotes from carriers</p>
</div>
<div className="myRow flexStart" style={{height: 46, }}>
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="25.291" height="25.6987" fill="white"/>
<path d="M9.80174 15.8068L6.84152 12.7594L6.84157 12.7594L6.83541 12.7533C6.57713 12.4965 6.22814 12.3518 5.86292 12.355C5.49772 12.3583 5.15138 12.5092 4.89764 12.7704C4.64434 13.0312 4.50311 13.381 4.50005 13.7437C4.49699 14.1064 4.63228 14.4585 4.88098 14.7236L4.88093 14.7237L4.88698 14.7299L8.82447 18.7834L8.82453 18.7834C9.08119 19.0475 9.43239 19.1987 9.80174 19.1987C10.1711 19.1987 10.5223 19.0475 10.779 18.7834L10.779 18.7834L20.404 8.87493L20.4041 8.87498L20.41 8.86865C20.6587 8.60357 20.794 8.25145 20.7909 7.88872C20.7879 7.52597 20.6466 7.17619 20.3933 6.91544C20.1396 6.65422 19.7933 6.50332 19.4281 6.50005C19.0628 6.49679 18.7139 6.64149 18.4556 6.89829L18.4555 6.89824L18.4495 6.90447L9.80174 15.8068Z" fill="#5DBBE9" stroke="#5DBBE9"/>
</svg>

    <p className="Lookingfor best rates in Florida" style={{fontSize: 22, lineHeight: '100%', textAlign: 'center', color: 'rgba(146.62, 146.62, 146.62, 1)',}}>Looking for best rates in Florida</p>
</div>
<div className="myRow flexStart" style={{height: 46, }}>
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="25.291" height="25.6987" fill="white"/>
<path d="M9.80174 15.8068L6.84152 12.7594L6.84157 12.7594L6.83541 12.7533C6.57713 12.4965 6.22814 12.3518 5.86292 12.355C5.49772 12.3583 5.15138 12.5092 4.89764 12.7704C4.64434 13.0312 4.50311 13.381 4.50005 13.7437C4.49699 14.1064 4.63228 14.4585 4.88098 14.7236L4.88093 14.7237L4.88698 14.7299L8.82447 18.7834L8.82453 18.7834C9.08119 19.0475 9.43239 19.1987 9.80174 19.1987C10.1711 19.1987 10.5223 19.0475 10.779 18.7834L10.779 18.7834L20.404 8.87493L20.4041 8.87498L20.41 8.86865C20.6587 8.60357 20.794 8.25145 20.7909 7.88872C20.7879 7.52597 20.6466 7.17619 20.3933 6.91544C20.1396 6.65422 19.7933 6.50332 19.4281 6.50005C19.0628 6.49679 18.7139 6.64149 18.4556 6.89829L18.4555 6.89824L18.4495 6.90447L9.80174 15.8068Z" fill="#5DBBE9" stroke="#5DBBE9"/>
</svg>

    <p className="Checkingfor discounts" style={{fontSize: 22, lineHeight: '100%', textAlign: 'center', color: 'rgba(146.62, 146.62, 146.62, 1)',}}>Checking for discounts</p>
</div>
          </div>
            </div>
            </div>
    </>
  )
}

function Results(props){
  console.log("tamo aqui con quote",props.userPack.data)
    return(
        <>
            
            {false?
              <LoadingPage/>
              :
              <>
              <WhiteNavBar userPack={props.userPack}/>
              <Body userPack={props.userPack}/>
              <Signature userPack={props.userPack}/>
              </>
            }
          
            {props.children}
        </>
      )
    }
  
  export default Results;