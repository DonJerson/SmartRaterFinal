import React from 'react';
  
  function SearchBar(props){
        const changeMethod=(e)=>{
            let newData ={...props.userPack.data}
            let filteredModels=[]
            if(props.name.includes("rand")){
            newData.brands.forEach(element => {
              if(element.toLowerCase().includes(e.target.value.toLowerCase())){
              filteredModels.push(element)
              }
            })}
            else{
              console.log("filtering by model",e.target.value,newData.models)
              props.userPack.models.forEach(element => {
                if(element.toLowerCase().includes(e.target.value.toLowerCase())){
                filteredModels.push(element)
                }
              })}
            
            props.userPack.methods.handleData(props.name,filteredModels)
        }
      return(
        <>
            <div className="outterBar" style={{width:"60vw"}}>
                <input style={{width:"100%"}} autoFocus={true} onChange={changeMethod}
                value={props.value} className="invisibleInput" 
                placeholder="Filter" type="text" data-name="brand" id="brand">
                
                </input>
     
                <input type="text" id="username"  className='hiddenField' />
<input type="password" className='hiddenField' />
                 
            </div>
        {props.children}
        </>
      )
    }
  
  export default SearchBar;