export default function Modal(props) {
    return(
        <>
             <div className="center outterModal" style={{position:'fixed',width: '100%'
      ,marginTop: "0px", zIndex:1000,top:"0px",
       height:'100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
       display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
  
  <div className=" flex-col-hstart-vstart" style={{ width:"auto", maxHeight:"70%"
  ,background:"white",padding:"20px",borderRadius:"10px",
  }}>
{props.children}
  </div>
  </div>
        
        </>
    )
}