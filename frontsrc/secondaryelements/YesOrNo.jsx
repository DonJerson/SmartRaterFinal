import { Link,navigate } from '@reach/router';
import React from 'react';


  function YesOrNo(props){

      const falseMethod=(e)=>{
        e.preventDefault()
        let neoQuote = {...props.userPack.newQuote}
        neoQuote[props.name]=false
        window.localStorage.setItem(props.name,false)
        props.userPack.methods.stateHandling('newQuote',neoQuote)
        if(props.action){
          props.action(e,false)
        }else{
          props.userPack.methods.flyOutEffect(e.target.getAttribute('value'),props.userPack.data.step)
      }
      }
      const trueMethod=(e)=>{
        e.preventDefault()
        let neoQuote = {...props.userPack.newQuote}
        neoQuote[props.name]=true
        window.localStorage.setItem(props.name,true)
        props.userPack.methods.stateHandling('newQuote',neoQuote)
        if(props.action){
          props.action(e,true)
        }else{
        if(props.navigationUrl){
          props.userPack.methods.flyOutEffect(props.navigationUrl,props.userPack.data.step)
        }
        else{
          props.userPack.methods.flyOutEffect(e.target.getAttribute('value'),props.userPack.data.step)
        }
      }
      }
      let blueBox1="blueBox"
      let blueBox2="blueBox"
      let val
      try {
         val=JSON.parse(props.userPack.newQuote[props.name])
        if(!val){
          blueBox2="blueBox blueSelected"
        }
        if(val){
          blueBox1="blueBox blueSelected"
        }
      } catch (error) {
        
      }

      return(
        <>
        <div className="myRow center"  style={{marginTop:"1rem"}}>
        <div value={'/autoquote/'+props.userPack.quoteSteps[props.userPack.data.step+1]} name={props.name}
        className={blueBox2} style={{minWidth:"22vw"}} onClick={falseMethod}>{props.option1?props.option1:"No"}</div>
        <div value={'/autoquote/'+props.userPack.quoteSteps[props.userPack.data.step+1]}
         style={{minWidth:"22vw"}} className={blueBox1}name={props.name} onClick={trueMethod}>{props.option2?props.option2:"Yes"}</div>
        </div>
        {props.children}
        </>
      )
    }
  
  export default YesOrNo;