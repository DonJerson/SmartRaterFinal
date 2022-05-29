import React, { Component } from 'react';
import { Router, Link,navigate } from "@reach/router";
import MainView from './MainView';
import QuoteView from './QuoteView';
import NewQuote from './NewQuote';
import Results from './Results';
import YesOrNo from '../secondaryelements/YesOrNo';
import Selector from '../secondaryelements/Selector';
import GeneralField from '../secondaryelements/GeneralField';
import AdditionalDriverForm from '../autoquote/AdditionalDriverForm';
import Teteo from './Teteo';
import SavedQuotes from './SavedQuotes';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';

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