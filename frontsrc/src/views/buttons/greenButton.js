export default function Button(props) {
    return(
        <>
                <div className="callbutton flex-col-hcenter-vcenter link" onClick={props.onClick?
                props.onClick:
                ()=>{}
                }>
        <p className="txt-937 flex-hcenter">{props.text}</p>
      </div>  
      </>
    )
}