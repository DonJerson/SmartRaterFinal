import React from 'react';
import SearchBar from './SearchBar';
//filteredBrands.slice(0,18)
//props.userPack.data.selectedBrand

function Selector(props){
  const changeMethod=(e)=>{
   
    let newData ={...props.userPack.data}
    
    newData.filteredBrands=newData.brands
    props.selector(e)
    newData.brand=e.target.getAttribute('value')
    props.userPack.methods.stateHandling("data",newData)
  }
    return(
      <>
      {props.searchBar?
      <>
      <div className="myRow center">
      <SearchBar name={props.filterName} value={props.filterValue} userPack={props.userPack}/>
      </div>
      <div className="flexWrap center" style={{marginTop:"25px"}}>
      {props.options.map((option,i)=>(
        <div key={'outterBrand'+i} name={props.name} value={'/autoquote/'+props.userPack.quoteSteps[props.userPack.data.step+1]}>
        <div key={'innerBrand'+i} className={props.userPack.data[props.name]==option?"blueBox center blueSelected":"blueBox center"} 
        onClick={changeMethod} value={option}>{option}</div>
        </div>
        ))}
        </div>
        </>
      :<>
              <div className="flexWrap center" style={{marginTop:"15px"}}>
      {props.options.map((option,i)=>(
        <div key={'outterBrand'+i} name={props.name} value={'/autoquote/'+props.userPack.quoteSteps[props.userPack.data.step+1]}>
        <div key={'innerBrand'+i} className={props.userPack.data[props.name]==option?"blueBox center blueSelected":"blueBox center"} 
        onClick={props.selector} value={option}>{option}</div>
        </div>
        ))}
        </div>
      {props.children}
      </>}
      </>
    )
  }
  
export default Selector;