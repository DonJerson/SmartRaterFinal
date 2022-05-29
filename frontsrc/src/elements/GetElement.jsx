import React, { Component } from 'react';
import { Router, Link,navigate } from "@reach/router";
import MainView from '../views/MainView';
import QuoteView from '../views/QuoteView';
import NewQuote from '../views/NewQuote';
import Results from '../views/Results';
import YesOrNo from '../secondaryelements/YesOrNo';
import Selector from '../secondaryelements/Selector';
import GeneralField from '../secondaryelements/GeneralField';
import AdditionalDriverForm from '../autoquote/AdditionalDriverForm';
import Teteo from '../views/Teteo';
import SavedQuotes from '../views/SavedQuotes';
import Terms from '../views/Terms';
import PrivacyPolicy from '../views/PrivacyPolicy';

import AutoQuote from '../autoquote/AutoQuoteElements';
 //AUTOQUOTE

const GetElement = (props) => {
  
  switch(props.userPack.newQuote.quoteType){
    default:
      return(<></>)
    case "Auto":
     return(<AutoQuote userPack={props.userPack} data={props.data}/>)
     
    case "Home":
      break
    case "Commercial":
      break
    case "Life":
      break
    case "Health":
      break
    case "Business":
      break
  }
}



export default GetElement;