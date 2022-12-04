
export default function(props){
 
  const onChange=()=>{
    let neoLead = {...props.lead}
    neoLead[props.name] = !neoLead[props.name]
    props.function(neoLead)}
    return(
      <>
           <div className="switch__container" onClick={onChange}>
           <input id={props.name} defaultChecked={props.lead[props.name]} className="switch switch--shadow" type="checkbox"/>
           <label htmlFor={props.name}></label>
         </div>
    
      

  </>
    )
  }