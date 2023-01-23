
export default function(props){
 
  const onChange=(e)=>{
    let neoLead = {...props.lead}
    console.log("changed",!neoLead[props.name])
   
    neoLead[props.name] = !neoLead[props.name]
    props.function(neoLead)
  }
    return(
      <>
           <div className="switch__container"  > 
           <input id={props.name+"checked"} onChange={onChange} defaultChecked={props.lead[props.name]} className="switch switch--shadow" type="checkbox" readOnly={true} />
           <label htmlFor={props.name+"checked"}></label>
         </div>

  </>
    )
  }