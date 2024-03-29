import { Link } from '@reach/router';
import React from 'react';
import BlackTitle from '../secondaryelements/BlackTitle';

  function Signature(props){
    let myPadding
    let signatureBox
    let flexSwitch
    let maxVal
    const width=props.userPack.dimensions.width
    if(width<975){signatureBox="40vw"}else{signatureBox="22vw";maxVal="78vw"}
    if(width<975){myPadding="5vw";maxVal="95vw"}else{myPadding="28vw";maxVal="43vw"}
    if(width<975){flexSwitch="flexStart"}else{flexSwitch="flexStart"}
      return(
        <>
        <div className="myRow" style={{
            maxWidth:maxVal,maxHeight:"265px",
            paddingLeft:myPadding,paddingRight:myPadding,marginLeft:"0px",
            paddingTop:"6rem"}}>
            <div className={width<975?"col-12 col-lg-4":"col-12 col-lg-4"} >
                <div className={"row "+flexSwitch}>
                    <BlackTitle/>
                </div>
                <div className={"row "+flexSwitch}>
                   <a className={"row "+flexSwitch} style={{maxWidth:"310px"}} href="https://www.google.com/maps/place/Sebanda+insurance/@26.6395651,-80.0583223,17z/data=!4m9!1m2!2m1!1s2000+N+Dixie+Hwy+Suite+6+Lake+Worth,+FL+33467+sebanda!3m5!1s0x88d8d76fc75926bd:0x66ec0ddf710191f!8m2!3d26.6393314!4d-80.0561428!15sCjUyMDAwIE4gRGl4aWUgSHd5IFN1aXRlIDYgTGFrZSBXb3J0aCwgRkwgMzM0Njcgc2ViYW5kYSIDiAEBkgERaW5zdXJhbmNlX2NvbXBhbnk">
                    <div className={"row "+flexSwitch} style={{maxWidth:"310px",marginTop:"30px"}}>


                        <div className="flexStart" style={{width:"3rem"}}>
                        <svg width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6476 18.6791C17.196 18.6791 19.2619 16.6912 19.2619 14.239C19.2619 11.7867 17.196 9.79883 14.6476 9.79883C12.0992 9.79883 10.0333 11.7867 10.0333 14.239C10.0333 16.6912 12.0992 18.6791 14.6476 18.6791Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.6475 2.39868C11.3841 2.39868 8.25434 3.64616 5.94675 5.86669C3.63916 8.08722 2.34277 11.0989 2.34277 14.2392C2.34277 17.0395 2.96109 18.8718 4.64992 20.8995L14.6475 32L24.6452 20.8995C26.334 18.8718 26.9523 17.0395 26.9523 14.2392C26.9523 11.0989 25.6559 8.08722 23.3483 5.86669C21.0407 3.64616 17.911 2.39868 14.6475 2.39868V2.39868Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

                        </div>
                        <div>
                        <div className="karlaRegular" >
                        631 Lucerne Ave
                        </div>
                        <div className="karlaRegular" >
                        Suite 65
                        </div>
                        <div className="karlaRegular" >
                        Lake Worth, FL 33460
                        </div>
                        </div>

                    </div>
                    </a>
                    <a className={"row "+flexSwitch} href="tel:+15615320620" style={{maxWidth:"310px"}}>  
                        <div className={"row "+flexSwitch} style={{maxWidth:"310px",marginTop:"15px"}}>

                        <div className="flexStart" style={{width:"3.0rem"}}>
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.6652 26.6459H19.703C20.4158 26.6459 21.0895 26.3688 21.5998 25.8651L25.2611 22.2518C25.3866 22.1281 25.4862 21.9813 25.5541 21.8197C25.622 21.658 25.657 21.4848 25.657 21.3098C25.657 21.1348 25.622 20.9615 25.5541 20.7999C25.4862 20.6383 25.3866 20.4914 25.2611 20.3678L19.8609 15.0384C19.7357 14.9145 19.5869 14.8163 19.4231 14.7492C19.2593 14.6822 19.0837 14.6477 18.9064 14.6477C18.7291 14.6477 18.5536 14.6822 18.3898 14.7492C18.226 14.8163 18.0772 14.9145 17.9519 15.0384L15.8 17.1621C14.8023 16.869 12.9405 16.2028 11.7606 15.0384C10.5807 13.8739 9.90563 12.0366 9.60862 11.0519L11.7606 8.92815C11.8861 8.80453 11.9856 8.6577 12.0536 8.49606C12.1215 8.33442 12.1564 8.16116 12.1564 7.98617C12.1564 7.81119 12.1215 7.63792 12.0536 7.47629C11.9856 7.31465 11.8861 7.16782 11.7606 7.0442L6.36039 1.71475C6.10229 1.47433 5.76082 1.3404 5.4059 1.3404C5.05099 1.3404 4.70951 1.47433 4.45142 1.71475L0.791423 5.32811C0.278403 5.83441 -0.0105081 6.5299 0.000292347 7.24005C0.0313436 9.13733 0.540313 15.7272 5.80282 20.9207C11.0653 26.1143 17.7427 26.6153 19.6652 26.6459V26.6459ZM5.40725 4.54069L8.89849 7.98617L7.15287 9.70892C6.99402 9.86526 6.87732 10.0583 6.81342 10.2706C6.74952 10.4828 6.74044 10.7074 6.78701 10.924C6.81941 11.0773 7.61189 14.7106 9.85298 16.9223C12.0941 19.134 15.7757 19.9161 15.9309 19.9481C16.1504 19.9943 16.3781 19.9855 16.5932 19.9224C16.8083 19.8593 17.0039 19.744 17.1622 19.587L18.9078 17.8643L22.399 21.3098L19.6908 23.9812C18.0059 23.9532 12.2412 23.5069 7.71179 19.0354C3.16752 14.5507 2.7274 8.84155 2.7004 7.21207L5.40725 4.54069ZM24.2999 11.9899H27C27 5.15491 21.7712 0 14.836 0V2.66472C20.3199 2.66472 24.2999 6.58586 24.2999 11.9899V11.9899Z" fill="black"/>
    <path d="M14.8495 7.99434C17.6886 7.99434 18.8996 9.18948 18.8996 11.9915H21.5998C21.5998 7.69455 19.2034 5.32959 14.8495 5.32959V7.99434V7.99434Z" fill="black"/>
    </svg> </div>
    <div>
    <div className="karlaBold">
    Call for a free quote
                        </div>
                        <div className="karlaRegular">
    (561) 532-0620
                        </div>
                        </div>
                    </div>
                    </a>
                
                    <a className={"row "+flexSwitch} href="mailto:contact@smartrater.us" style={{minWidth:"230px"}}>   
                        <div className={"row "+flexSwitch} style={{maxWidth:"230px",marginTop:"15px"}}>

                        <div className="flexStart" style={{width:"3.0rem"}}>
                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.7126 2.89992L21.9119 2H20.4125H4.5875H3.08813L4.2874 2.89992L12.1999 8.83742L12.5 9.06262L12.8001 8.83742L20.7126 2.89992ZM2.8 3.6625L2 3.0625V4.0625V16.25C2 16.7141 2.18437 17.1592 2.51256 17.4874C2.84075 17.8156 3.28587 18 3.75 18H21.25C21.7141 18 22.1592 17.8156 22.4874 17.4874C22.8156 17.1592 23 16.7141 23 16.25V4.0625V3.0625L22.2 3.6625L12.95 10.6C12.8202 10.6974 12.6623 10.75 12.5 10.75C12.3377 10.75 12.1798 10.6974 12.05 10.6L2.8 3.6625ZM3.75 0.5H21.25C22.112 0.5 22.9386 0.84241 23.5481 1.4519C24.1576 2.0614 24.5 2.88805 24.5 3.75V16.25C24.5 17.112 24.1576 17.9386 23.5481 18.5481C22.9386 19.1576 22.112 19.5 21.25 19.5H3.75C2.88805 19.5 2.0614 19.1576 1.4519 18.5481C0.84241 17.9386 0.5 17.112 0.5 16.25V3.75C0.5 2.88805 0.84241 2.0614 1.4519 1.4519C2.0614 0.84241 2.88805 0.5 3.75 0.5Z" fill="black" stroke="black"/>
    </svg></div>
    <div>
    <div className="karlaBold">
    Have questions?
                        </div>
                    
                        <div className="karlaRegular">
    contact@smartrater.us
                        </div>
                    
                        </div>
                    </div>
                    </a>
<div></div>
                </div>
            </div>
            <div className="col-12 col-lg-8">

            {/* 975-992 = la diferans entre html px and react px width */}
                <div className={width<975?"row center":"row flexStart"} style={{marginTop:width<975?"0px":"0px"}}>
                    <div style={{width:signatureBox,minHeight:"170px"}}>
                        <div className="myRow center">
                        <p className="signatureTitle center">Quotes</p>
                        </div>
                        <div className="myRow center">
                            <p className="signatureSecondaryTitle">
                                Auto
                            </p>
                        </div>
                        <div className="myRow center">
                            <p className="signatureSecondaryTitle">
                                Home
                            </p>
                        </div>
                        <div className="myRow center">
                            <p className="signatureSecondaryTitle">
                                Life
                            </p>
                        </div>
                        <div className="myRow center">
                            <p className="signatureSecondaryTitle">
                                Health
                            </p>
                        </div>
                        <div className="myRow center">
                            <p className="signatureSecondaryTitle">
                                Medicare
                            </p>
                        </div>
                        <div className="myRow center">
                            <p className="signatureSecondaryTitle">
                                Commercial
                            </p>
                        </div>
                    </div>
                    <div style={{width:signatureBox,minHeight:"170px"}}>
                         <p className="signatureTitle center">About us</p>
                         <div className="myRow center">
                             <Link to='/privacypolicy'>
                            <p className="signatureSecondaryTitle">
                                Privacy Policy
                            </p>
                            </Link>
                        </div>
                        <div className="myRow center">
                        <Link to='/terms'>
                            <p className="signatureSecondaryTitle">
                                Terms of Use
                            </p>
                            </Link>
                        </div>
                    </div>
                    
                    
                    {/* <div style={{width:signatureBox,minHeight:"170px"}}>
                         <p className="signatureTitle">Resources</p>
                    </div> */}
                </div>
            </div>
            
        </div>
        <div className="myRow center" style={{paddingBottom:"2rem"}}>
                    <div className="flexStart center link" style={{maxWidth:"310px",marginTop:"30px"}}>
                    <a href='https://twitter.com/smartrater?s=11&t=tzj6zIwANnpMIANfRzW3-w'>
                    <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="17.599" cy="17.5" rx="17.599" ry="17.5" fill="black"/>
<path d="M25.9658 13.4783C25.4141 13.7199 24.8214 13.883 24.1984 13.9568C24.8413 13.5768 25.3222 12.9786 25.5516 12.274C24.9475 12.6284 24.2865 12.8779 23.5971 13.0116C23.1335 12.5226 22.5195 12.1985 21.8504 12.0895C21.1812 11.9806 20.4944 12.093 19.8966 12.4093C19.2987 12.7255 18.8232 13.2279 18.544 13.8385C18.2648 14.449 18.1974 15.1336 18.3523 15.7859C17.1284 15.7252 15.9311 15.4109 14.8382 14.8634C13.7452 14.316 12.7809 13.5476 12.008 12.6082C11.7437 13.0586 11.5917 13.5808 11.5917 14.137C11.5914 14.6376 11.7162 15.1306 11.955 15.5722C12.1939 16.0138 12.5393 16.3904 12.9608 16.6684C12.472 16.653 11.994 16.5226 11.5666 16.2878V16.327C11.5666 17.0292 11.8124 17.7098 12.2625 18.2533C12.7125 18.7968 13.3391 19.1698 14.0358 19.3089C13.5824 19.4301 13.107 19.448 12.6456 19.3611C12.8422 19.9653 13.225 20.4937 13.7407 20.8722C14.2563 21.2507 14.8788 21.4605 15.5211 21.4722C14.4308 22.3178 13.0842 22.7764 11.6981 22.7744C11.4526 22.7745 11.2072 22.7603 10.9634 22.732C12.3704 23.6258 14.0082 24.1001 15.681 24.0982C21.3434 24.0982 24.4389 19.4649 24.4389 15.4464C24.4389 15.3159 24.4356 15.184 24.4296 15.0535C25.0318 14.6233 25.5515 14.0906 25.9645 13.4803L25.9658 13.4783V13.4783Z" fill="white"/>
</svg></a>
<a href='https://www.linkedin.com/in/jerson-mendez-de-castro-03513598/'>

<svg style={{marginLeft:"1.2rem"}} width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="18" cy="17.5" rx="17.599" ry="17.5" fill="black"/>
<path d="M15.0851 24.0983V15.1945H12.1165V24.0983H15.0851ZM13.6012 13.9781C14.6364 13.9781 15.2808 13.2944 15.2808 12.44C15.2615 11.5663 14.6364 10.9016 13.6209 10.9016C12.6054 10.9016 11.9414 11.5664 11.9414 12.44C11.9414 13.2945 12.5856 13.9781 13.5818 13.9781H13.6011H13.6012ZM16.7282 24.0983H19.6967V19.126C19.6967 18.8599 19.716 18.5941 19.7944 18.4038C20.009 17.8722 20.4975 17.3215 21.3175 17.3215C22.3917 17.3215 22.8214 18.138 22.8214 19.3349V24.0983H25.7898V18.9929C25.7898 16.258 24.3253 14.9855 22.3722 14.9855C20.7707 14.9855 20.0676 15.8779 19.677 16.4857H19.6968V15.1943H16.7283C16.7672 16.0298 16.7283 24.0982 16.7283 24.0982L16.7282 24.0983Z" fill="white"/>
</svg>
</a>
<a href="https://www.facebook.com/smartrater/" >
<svg style={{marginLeft:"1.2rem"}} width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="18.2005" cy="17.5" rx="17.599" ry="17.5" fill="black"/>
<path d="M23.1051 10.1894C23.1051 10.0753 23.0581 9.96591 22.9745 9.88524C22.8909 9.80456 22.7774 9.75924 22.6592 9.75924H20.4298C19.3072 9.70528 18.2081 10.0822 17.3726 10.8077C16.5372 11.5331 16.0333 12.5481 15.971 13.6309V15.9539H13.7417C13.6234 15.9539 13.51 15.9992 13.4264 16.0799C13.3428 16.1606 13.2958 16.27 13.2958 16.3841V18.6211C13.2958 18.7352 13.3428 18.8446 13.4264 18.9253C13.51 19.0059 13.6234 19.0513 13.7417 19.0513H15.971V24.8158C15.971 24.9299 16.018 25.0393 16.1016 25.12C16.1853 25.2006 16.2987 25.246 16.4169 25.246H19.0922C19.2104 25.246 19.3238 25.2006 19.4075 25.12C19.4911 25.0393 19.5381 24.9299 19.5381 24.8158V19.0513H21.8745C21.9736 19.0526 22.0704 19.0221 22.1495 18.9644C22.2287 18.9068 22.2856 18.8253 22.3114 18.7329L22.9535 16.496C22.9712 16.4324 22.9736 16.3658 22.9604 16.3012C22.9473 16.2366 22.9189 16.1758 22.8776 16.1234C22.8362 16.071 22.783 16.0285 22.7219 15.9991C22.6609 15.9698 22.5937 15.9543 22.5254 15.9539H19.5381V13.6309C19.5602 13.418 19.6639 13.2206 19.8288 13.0774C19.9937 12.9343 20.208 12.8555 20.4298 12.8566H22.6592C22.7774 12.8566 22.8909 12.8113 22.9745 12.7306C23.0581 12.6499 23.1051 12.5405 23.1051 12.4264V10.1894Z" fill="white"/>
</svg></a>
<a href="https://instagram.com/smartrater?igshid=NDA1YzNhOGU=">
<svg style={{marginLeft:"1.2rem"}} width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="18.401" cy="17.5" rx="17.599" ry="17.5" fill="black"/>
<path d="M18.3991 15.1083C17.0747 15.1083 15.9939 16.183 15.9939 17.5C15.9939 18.817 17.0747 19.8917 18.3991 19.8917C19.7235 19.8917 20.8043 18.817 20.8043 17.5C20.8043 16.183 19.7235 15.1083 18.3991 15.1083ZM25.613 17.5C25.613 16.5096 25.622 15.5281 25.5661 14.5395C25.5101 13.3912 25.2467 12.3721 24.4023 11.5324C23.556 10.6909 22.5329 10.4307 21.3781 10.3751C20.3821 10.3194 19.3951 10.3284 18.4009 10.3284C17.4049 10.3284 16.4179 10.3194 15.4237 10.3751C14.2689 10.4307 13.2441 10.6926 12.3996 11.5324C11.5534 12.3739 11.2917 13.3912 11.2358 14.5395C11.1799 15.5299 11.1889 16.5114 11.1889 17.5C11.1889 18.4886 11.1799 19.4719 11.2358 20.4605C11.2917 21.6088 11.5552 22.628 12.3996 23.4677C13.2459 24.3092 14.2689 24.5693 15.4237 24.625C16.4197 24.6806 17.4067 24.6716 18.4009 24.6716C19.3969 24.6716 20.3839 24.6806 21.3781 24.625C22.5329 24.5693 23.5578 24.3074 24.4023 23.4677C25.2485 22.6262 25.5101 21.6088 25.5661 20.4605C25.6238 19.4719 25.613 18.4904 25.613 17.5V17.5ZM18.3991 21.18C16.3512 21.18 14.6984 19.5365 14.6984 17.5C14.6984 15.4635 16.3512 13.82 18.3991 13.82C20.4471 13.82 22.0999 15.4635 22.0999 17.5C22.0999 19.5365 20.4471 21.18 18.3991 21.18ZM22.2514 14.5287C21.7733 14.5287 21.3872 14.1448 21.3872 13.6693C21.3872 13.1938 21.7733 12.8099 22.2514 12.8099C22.7296 12.8099 23.1157 13.1938 23.1157 13.6693C23.1159 13.7822 23.0936 13.894 23.0502 13.9984C23.0069 14.1027 22.9432 14.1975 22.8629 14.2773C22.7826 14.3572 22.6873 14.4205 22.5824 14.4636C22.4774 14.5068 22.365 14.5289 22.2514 14.5287V14.5287Z" fill="white"/>
</svg></a>


                    </div>
                    </div>
        {props.children}
        </>
      )
    }
  
  export default Signature;