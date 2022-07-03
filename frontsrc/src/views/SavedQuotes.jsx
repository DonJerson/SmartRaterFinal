import React from 'react';
import WhiteNavBar from '../elements/WhiteNavBar';
import Embellishment from '../secondaryelements/Embellishment';
import Carriers from '../secondaryelements/Carriers';
import Signature from '../elements/Signature';
import QuoteLine from '../elements/QuoteLine';
import AutoQuote from './dashelements/AutoQuote';
import HomeQuote from './dashelements/HomeQuote';
import Button from './buttons/greenButton';
//create a function that will render the quote card



function QuoteCard(props){
  return(
<>
<div className="Rectangle30" style={{width: "80vw", backgroundColor: 'white',
             borderRadius: 4, borderStyle: 'solid', borderWidth: 1, 
             position: 'relative',
              borderStyle: 'solid', borderColor: 'rgba(15, 188, 157, 1)',}}
              >
<div className="Rectangle32" style={{width: "80vw", height: 54, 
backgroundColor: 'rgba(15, 188, 157, 1)', 
borderTopLeftRadius: 4, borderTopRightRadius: 4,}}>
<div className="Checkmark" style={{padding:12,display:"flex",
width:700,height: 25}}>
<svg width="25" height="25" viewBox="0 0 25 25" fill="none"
xmlns="http://www.w3.org/2000/svg">
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
         <div className="" style={{paddingTop:"3.5rem",position:"relative",
         paddingLeft:"3vw",paddingRight:"3vw"}}>
          </div>
         <div className="myRow flexStart" style={{marginTop:"10px"}}>
         <span className="karlaBold" style={{
         fontSize:"22px",letterSpacing:"-0.05em",
          marginLeft:props.userPack.dimensions.width<754?"25px":"15vw",
          backgrouncColor:"black",color:"#000000"}}>
            Quotes </span>   
            <img style={{marginLeft:"10px"}}
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c0hskcsi42p-975%3A1704?alt=media&token=a7013aa8-ab91-4501-b14f-83f2d7aba2e1"
              alt="Not Found"
              className="frame-1004 link"
            />
            </div>

            <div className="myRow center" style={{marginTop:"14px"}}>
              {/* <AutoQuote/> */}
              {props.userPack.user.quoteList.map((quote,index)=>(
               <AutoQuote quote={quote} />
              ))}

              
            </div>
            <div className="myRow center" style={{marginTop:"24px"}}>
            <div className="frame-67 flex-col-hcenter-vstart">
        <div className="frame-71 flex-col-hcenter-vstart">
          <p className="txt-365 flex-hcenter">
            Get Your Policy Bound TODAY - Talk to an Agent.
          </p>
          <p className="txt-908 genKarla flex-hcenter">
            Tell us what car you drive and we’ll get the best insurance rates
            for you!
          </p>
        </div>

        <Button text="Chat with us!"/>
      {/* <a href="tel:+15615320620">
        <div className="callbutton flex-col-hcenter-vcenter link" style={{marginTop:"10px"}}>
        
          <p className="txt-937 flex-hcenter">Call us now!</p>
       
        </div>   
        </a> */}
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

function SavedQuotes(props){
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
  
  export default SavedQuotes;