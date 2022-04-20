import React from 'react';
  
  function SearchBar(props){
        const changeMethod=(e)=>{
            let newData ={...props.userPack.data}
            let filteredModels=[]
            if(props.name.includes("rand")){
            newData.brands.forEach(element => {
              if(element.toLowerCase().includes(e.target.value)){
              filteredModels.push(element)
              }
            })}
            else{
              newData.models.forEach(element => {
                if(element.toLowerCase().includes(e.target.value)){
                filteredModels.push(element)
                }
              })}
            
            props.userPack.methods.handleData(props.name,filteredModels)
        }
      return(
        <>
            <div className="outterBar" style={{width:"60vw"}}>
                <input style={{width:"100%"}} autoFocus={true} onChange={changeMethod} 
                defaultValue={props.value} className="invisibleInput" placeholder="Filtrar por nombre..." type="text" name="" id="">
                
                </input>


                
                
                 
            </div>
        {props.children}
        </>
      )
    }
  
  export default SearchBar;