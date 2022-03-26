const SubmitButton=(props)=>{
    return(
      <div className="myRow center" style={{marginTop:"12px"}}>
        <input  style={{minWidth:"200px"}} 
        onClick={props.next?props.next:(()=>{})}
        className="blueBox center" type="submit" value="Continue"/>
        </div>
    )
  } 
  export default SubmitButton;