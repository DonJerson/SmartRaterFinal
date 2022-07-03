
import AutoQuote from '../dashelements/AutoQuote';
import Button from "../buttons/greenButton";
import { Link, navigate,Router } from "@reach/router";
import Modal from "../elements/Modal";
import MaterialInput from '../../elements/inputs/MaterialInput';
import Selector from '../../secondaryelements/Selector';
import './styles.css';
import React from 'react';

function print(tag,data){
    try{
        return(data[tag])
    }catch{
        return("")
    }
}

function EditAutoQuote(props){
    let selectedCar={}
    let quote
    try {
        quote = selectedCar = props.userPack.user.quoteList.filter(
            (quote)=>{
                return quote.id==props.quoteId
            }
        )[0]
        selectedCar = quote.personalAutoQuoteElements.coveredAutos.filter(
            (auto)=>auto.id==window.localStorage.getItem('selectedCar'))[0]  

    } catch (error) {
    }

    console.log("rendered",selectedCar)
    const changeQuoteData=(e)=>{
       
        let neoUser={...props.userPack.user}
        let quoteList = [...props.userPack.user.quoteList]
        let neoQuote
        
        quoteList.forEach((quote)=>{
            if(quote.id==props.quoteId){
                neoQuote=quote
            }})
        neoQuote.personalAutoQuoteElements.coveredAutos.forEach((auto)=>{
            if(auto.id==window.localStorage.getItem('selectedCar')){
                console.log("qloq")
                auto[e.target.name]=e.target.value
            }
        })
        quoteList.forEach((quote)=>{
            if(quote.id==props.quoteId){
                quote=neoQuote
            }})
        neoUser.quoteList=quoteList
        props.userPack.methods.stateHandling('user',neoUser)
    }
    return(
        <>
        <div className="myRow flexStart">
    <Link to="../" className='center link'>
 <img
   src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u8r5dgewyx-I961%3A1293%3B961%3A1033?alt=media&token=191a567f-78e7-4bb5-862a-1e0412cb0bda"
   alt="Not Found"
   className="frame-3"
 />
 </Link>
   <p> Edit quote</p>
   </div>

   <div className='' style={{position:"relative",padding:"10px"}}>
   <div className='center' style={{gap:"8px",display:"flex",flexDirection:"column"}}>

   <div className="carsline flex-col-hstart-vstart" style={{marginBottom:"10px",
marginTop:"6px"}}>
<div className="frame-109 flex-row-vcenter-hstart" >
<p className="txt-290">Cars:</p>
<div className="carcolumn flex-col-hcenter-vstart">

 <div className="carrow flex-row-vcenter-hstart center">
   {props.coveredAutos.slice(0,2).map((auto,index)=>{
       return <CarLine key={index} index={auto.id} carId={props.carId}
       data={props.carData} auto={auto} method={props.handleData}/>
   })}
 </div>
 <div className="carrow-1 flex-row-vcenter-hstart">
 {props.coveredAutos.slice(2,4).map((auto,index)=>{
       return <CarLine key={index} index={index} data={props.carData} auto={auto} method={props.handleData}/>
   })}
 </div>
</div>
<div className="myRow center" style={{width:"auto",marginLeft:"10px"}}>
<svg className="link" onClick={props.editCar} style={{marginRight:"4px"}} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7802 3.37398L16.7556 6.36948C16.8809 6.49568 16.8809 6.70158 16.7556 6.82778L9.55139 14.0808L6.49028 14.4228C6.08125 14.4693 5.7349 14.1206 5.78108 13.7088L6.12083 10.627L13.325 3.37398C13.4503 3.24778 13.6549 3.24778 13.7802 3.37398ZM19.124 2.61348L17.5142 0.992847C17.0128 0.488061 16.1981 0.488061 15.6934 0.992847L14.5257 2.16847C14.4003 2.29466 14.4003 2.50056 14.5257 2.62676L17.501 5.62227C17.6264 5.74846 17.8309 5.74846 17.9563 5.62227L19.124 4.44665C19.6253 3.93854 19.6253 3.11826 19.124 2.61348ZM13.1667 12.1081V15.4888H2.61111V4.86177H10.1913C10.2969 4.86177 10.3958 4.81859 10.4717 4.74553L11.7911 3.41715C12.0418 3.16476 11.8637 2.73635 11.5108 2.73635H2.08333C1.2092 2.73635 0.5 3.45036 0.5 4.33041V16.0202C0.5 16.9003 1.2092 17.6143 2.08333 17.6143H13.6944C14.5686 17.6143 15.2778 16.9003 15.2778 16.0202V10.7797C15.2778 10.4244 14.8523 10.2484 14.6016 10.4974L13.2821 11.8258C13.2095 11.9022 13.1667 12.0018 13.1667 12.1081Z" fill="black"/>
</svg>

<svg className="link" onClick={props.addCar} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 0.114258H6.5C3.191 0.114258 0.5 2.80526 0.5 6.11426V19.1143C0.5 19.3795 0.605357 19.6338 0.792893 19.8214C0.98043 20.0089 1.23478 20.1143 1.5 20.1143H14.5C17.809 20.1143 20.5 17.4233 20.5 14.1143V6.11426C20.5 2.80526 17.809 0.114258 14.5 0.114258ZM15.5 11.1143H11.5V15.1143H9.5V11.1143H5.5V9.11426H9.5V5.11426H11.5V9.11426H15.5V11.1143Z" fill="black"/>
</svg>

</div>
</div>
</div>
       <MaterialInput options={props.drivers} 
       onChange={changeQuoteData} value={props.value}
       onClick={props.newDriver}
        name='Drivers' type='select' label='Driver'/>
       <MaterialInput options={props.drivers} 
       onChange={changeQuoteData} value={props.value}
       onClick={props.newDriver}
        name='secondaryDriver' type='select' label='Secondary Driver'/>
       <MaterialInput  onClick={props.editLimits} onChange={changeQuoteData} 
       value={print('comprehensiveDeductible',selectedCar)}
name='comprehensiveDeductible' type='text' label='Comprehensive' edit={true}/>
       <MaterialInput  onClick={props.editLimits} onChange={changeQuoteData}
        value={print('collisionDeductible',selectedCar)}
name='collisionDeductible' type='text' label='Collision' edit={true}/>
       <MaterialInput options={[{label:"qq",value:props.limits}]}  onClick={props.editLimits}
        onChange={changeQuoteData} value={props.value}
name='limits' type='select' label='Liability Limits' edit={true}/>
   <div style={{padding:"5px"}}>
   <Button text='Get Quotes'/>
   </div>
 
   {/* <AutoQuote quote={quote} /> */}
   </div>
    </div>
    </>
    )
}

function EditCarView(props){
    const car = props.userPack.user.quoteList[0].personalAutoQuoteElements.coveredAutos.filter(
        (auto)=>{
            return auto.id==props.carData.selectedCar
        }
    )[0]
    console.log("car",car)
    const [coveredAuto,setCoveredAuto]=React.useState(car)
    const [localCar,setLocalCar]=React.useState(car)
    const editCar=(e)=>{
        let newCar={...localCar}
        newCar[e.target.name]=e.target.value
        console.log("newCar",newCar,e.target.name,e.target.value)
        setLocalCar(newCar)
    }
    const saveCar=()=>{
        let neoCar = {...coveredAuto}
        neoCar.car=localCar
        setCoveredAuto(neoCar)
        props.userPack.methods.axios.defaults.headers.put['Authorization'] = 'JWT '+window.localStorage.getItem('token')
        props.userPack.methods.axios.put(props.userPack.methods.baseUrl+'api/coveredauto/'+localCar.id+'/',localCar).then(res=>{
            console.log("res",res)
            props.userPack.methods.refreshUser()
            props.setStep(1)
        }
        ).catch(err=>{
            console.log("err",err)
        }
        )
    }
       
    
    return(
        <>
        <div className="myRow flexStart">
 <img onClick={()=>props.setStep(1)}
   src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u8r5dgewyx-I961%3A1293%3B961%3A1033?alt=media&token=191a567f-78e7-4bb5-862a-1e0412cb0bda"
   alt="Not Found"
   className="frame-3 link"
 />
   <p> Edit Car</p>
   </div>

   <div className='' style={{position:"relative",padding:"10px"}}>
   <div className='center' style={{gap:"8px",display:"flex",flexDirection:"column"}}>

   <div className="carsline flex-col-hstart-vstart" style={{marginBottom:"10px",
marginTop:"6px"}}>
<div className="frame-109 flex-row-vcenter-hstart" >
<div className="carcolumn flex-col-hcenter-vstart">

 <div className="carrow flex-row-vcenter-hstart center">
        <CarLine  index={props.car.id} carId={props.car.id}
       data={props.carData} auto={car} method={props.handleData}/>
 </div>
</div>
</div>
</div>
<MaterialInput  onChange={editCar} value={localCar.vin} name='vin' label='VIN *'/>
<MaterialInput  onChange={editCar} value={localCar.year} name='year' label='Year *'/>
<MaterialInput  onChange={editCar} value={localCar.make} name='make' label='Make'/>
<MaterialInput  onChange={editCar} value={localCar.model} name='model' label='Model'/>
   <div style={{padding:"5px"}}>
   <Button onClick={saveCar} text='Save'/>
   </div>
 
   {/* <AutoQuote quote={quote} /> */}
   </div>
    </div>
    </>
    )
}


function CarLine(props) {
    let line = "carline flex-col-hcenter-vstart ";
    if(props.data.selectedCar==props.index){
      
        line= line+'selectedCar'
    }
    const selectCar=()=>{
        props.method('selectedCar',props.index)
    
        window.localStorage.setItem('selectedCar',props.index)
        console.log("selectedCar",window.localStorage.getItem('selectedCar'))
    }
    return(
        <>
                    <div className={line} onClick={selectCar}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0fjrjeq84lno-1102%3A1863?alt=media&token=129264d1-8798-4323-bc7e-6a90941f2766"
                alt="Not Found"
                className="gis-car"
              />
              <div className="inputtext flex-row-vcenter-hcenter">
                <p className="txt-996">{props.auto.year} {props.auto.make} {props.auto.model}</p>
              </div>
              <div className="inputtext flex-row-vcenter-hcenter">
                <p className="txt-996">{props.auto.driver.first_name} {props.auto.driver.last_name}</p>
              </div>
              <div className="inputtext flex-row-vcenter-hcenter">
                <p className="txt-996">Full Coverage</p>
              </div>
            </div>
            </>
    )
}

export default function AutoSelect(props) {
    const newAutoQuote=()=>{
        navigate('/autoquote/select-vehicle-vin')
    }
    const pullUpQuote=()=>{
        navigate('/savedquotes/1')
    }


    const quote =  props.userPack.user.quoteList[0]
    let autoEls={coveredAutos:[]}
    try {
        autoEls= quote.personalAutoQuoteElements
    } catch (error) {
        
    }
    const newDriver=()=>{
        navigate('/savedquotes/'+quote.id+'/edit/driver')
    }
    const newCar=()=>{
        navigate('/savedquotes/'+quote.id+'/edit/car')
    }
    const editLimits=()=>{
        navigate('/savedquotes/'+quote.id+'/edit/limit')
    }
    const handleData=(key,value)=>{
        setCarData({...carData,[key]:value})
    }
    const editCar=()=>{
        // navigate('/savedquotes/'+quote.id+'/edit/editcar')
        setStep(2)
    }
    const editCarData=(e)=>{
        // navigate('/savedquotes/'+quote.id+'/edit/editcar')
        console.log(e.target.value)
        setCarData({...carData,[e.target.name]:e.target.value})
    }
    const addCar=()=>{
        navigate('/savedquotes/'+quote.id+'/edit/newcar')
    }

    let drivers = []
    let cars = []
    let limits = ''
    try {
        autoEls.coveredAutos.forEach(auto => {
            const middle_name = auto.driver.middle_name || ''
            cars.push({value:auto.year+' '+auto.make+' '+auto.model,key:auto.id})
            drivers.push({value:auto.driver.first_name+' '+
            middle_name+' '+auto.driver.last_name,key:auto.driver.id})
        });
        quote.owner.namedInsureds.forEach(insured => {
            const name = insured.first_name+' '+insured.last_name
            
            //if driver is not in the list, add it
            if(!drivers.find(driver=>driver.key===insured.id)){
                drivers.push({value:name,label:name,key:insured.id})
            }
        });
    } catch (error) {
        
    }
    try {
        limits = autoEls.pipCoverage+' PIP '+autoEls.pipDeductible+' deductible'
    } catch (error) {
        
    }
    const coveredAutos = autoEls.coveredAutos
  
    let carId =  window.localStorage.getItem('selectedCar')?window.localStorage.getItem('selectedCar'):0
    try {
       
        carId=coveredAutos[0].id
        let neoData = {...carData}.selectedCar=carId
        setCarData(neoData)
    } catch (error) {
        // console.log(error)
    }
    const [carData,setCarData]=React.useState({selectedCar:carId})
    

    let selectedCar = {}
    try {
        selectedCar = coveredAutos.filter(
        auto => auto.id === carId
        )[0]
        
    } catch (error) {
        
    }
    const [step,setStep]=React.useState(1)

    return(
        <>

        <Modal>
       
            {step==1?
            <EditAutoQuote coveredAutos={coveredAutos} carId={carId} drivers={drivers} userPack={props.userPack}
            handleData={handleData} carData={carData} editCar={editCar} limits={limits}
            addCar={addCar} newDriver={newDriver} editLimits={editLimits} quoteId={props.quoteId}
            selectedCar={selectedCar} />

        :
        <>
        </>}

        {step==2?
        <EditCarView userPack={props.userPack}
         setStep={setStep} car={selectedCar} carData={carData} handleData={handleData}/>
        :
        <>
        </>}
            
        </Modal>
        </>
    )
}