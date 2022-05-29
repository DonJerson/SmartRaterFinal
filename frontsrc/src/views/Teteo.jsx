
import React from 'react';
  
  function Teteo(props){
      return(
        <>
        <div className="myRow center" style={{marginTop:"30px"}}>

        <div className="Frame82" style={{width: 441, height: 326, paddingTop: 26, paddingBottom: 45, paddingLeft: 37, backgroundColor: 'rgba(248.63, 248.63, 248.63, 1)', borderStyle: 'solid', borderWidth: 2, borderStyle: 'solid', borderColor: 'black', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
    <p className="Justa Moment, qq..." style={{fontSize: 36, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'black',}}>Just a Moment, qq...</p>
    <div style={{height: 14,}}/>
    <p className="We’refinalizing your quotes." style={{fontSize: 28, lineHeight: '100%', textAlign: 'center', color: 'rgba(93, 187, 233, 1)',}}>We’re finalizing your quotes.</p>
    <div style={{height: 14,}}/>
    <div className="Group78" style={{width: 362, height: 20,}}>
        <div className="Rectangle35" style={{width: 362, height: 20, paddingRight: 304, backgroundColor: 'rgba(243, 244, 244, 1)', borderRadius: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
            <div className="Rectangle36" style={{width: 58.17, height: 20, backgroundColor: 'rgba(107, 194, 148, 1)', borderRadius: 50,}}/>
        </div>
    </div>
    <div style={{height: 14,}}/>
    <div className="Group81" style={{width: 318, height: 26, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
        <img className="Frame83" style={{width: 25.29, height: 25.70, borderRadius: 8,}} src="https://via.placeholder.com/25.290985107421875x25.698699951171875"/>
        <div style={{width: 9.71,}}/>
        <p className="Lookingfor best rates in Florida" style={{fontSize: 22, lineHeight: '100%', textAlign: 'center', color: 'rgba(146.62, 146.62, 146.62, 1)',}}>Looking for best rates in Florida</p>
    </div>
    <div style={{height: 14,}}/>
    <div className="Group80" style={{width: 324.36, height: 26, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
        <img className="Frame82" style={{width: 25.29, height: 25.70, borderRadius: 8,}} src="https://via.placeholder.com/25.290985107421875x25.698699951171875"/>
        <div style={{width: 9.07,}}/>
        <p className="Comparingquotes from carriers" style={{fontSize: 22, lineHeight: '100%', textAlign: 'center', color: 'rgba(146.62, 146.62, 146.62, 1)',}}>Comparing quotes from carriers</p>
    </div>
    <div style={{height: 14,}}/>
    <div className="Group103" style={{width: 238.29, height: 26, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
        <div className="Vector" style={{width: 17.29, height: 13.70, backgroundColor: 'rgba(93, 187, 233, 1)', borderRadius: 8, borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(93, 187, 233, 1)',}}/>
        <div style={{width: 13,}}/>
        <p className="Checkingfor discounts" style={{fontSize: 22, lineHeight: '100%', textAlign: 'center', color: 'rgba(146.62, 146.62, 146.62, 1)',}}>Checking for discounts</p>
    </div>
</div>

<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
        {props.children}
        </>
      )
    }
  
  export default Teteo;