
import AutoQuote from '../dashelements/AutoQuote';
import Button from "../buttons/greenButton";
import { Link, navigate,Router } from "@reach/router";
import Modal from "../elements/Modal";
import MaterialInput from '../../elements/inputs/MaterialInput';
import Selector from '../../secondaryelements/Selector';
import React from 'react';

export default function NewCar(props) {
    const [localCar,setLocalCar]=React.useState({vin:"",year:"",make:"",model:"",})
    const newAutoQuote=()=>{
        navigate('/autoquote/select-vehicle-vin')
    }
    const pullUpQuote=()=>{
        navigate('/savedquotes/1')
    }
    const quote =  props.userPack.user.quoteList[0]
    const newDriver=()=>{
        navigate('/savedquotes/'+quote.id+'/edit/driver')
    }
    const updateCar=(e)=>{
        let neoLocalCar={...localCar}
        neoLocalCar[e.target.name]=e.target.value
        setLocalCar(neoLocalCar)
    }
    const saveNewCar=()=>{
        props.userPack.methods.axios.defaults.headers.post['Authorization'] = 'JWT '+window.localStorage.getItem('token')
        props.userPack.methods.axios.post(props.userPack.methods.baseUrl+'api/coveredauto/',localCar).then(res=>{
            console.log("res",res)
            const neoCar = res.data
            props.userPack.methods.refreshUser()
            props.setStep(1)
        })
    }
    return(
        <>
        <Modal>


            <div className="myRow flexStart">
            <Link to="../" className='center link'>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u8r5dgewyx-I961%3A1293%3B961%3A1033?alt=media&token=191a567f-78e7-4bb5-862a-1e0412cb0bda"
            alt="Not Found"
            className="frame-3"
          />
          </Link>
            <p> New Car</p>
            </div>

            <div className='' style={{position:"relative",padding:"10px"}}>
            <div className='center' style={{width:"250px",gap:"8px",display:"flex",flexDirection:"column"}}>

 <MaterialInput  onChange={updateCar} value={localCar.vin}name='vin' label='VIN *'/>
 <MaterialInput  onChange={updateCar} value={localCar.year}name='year' label='Year *'/>
 <MaterialInput  onChange={updateCar} value={localCar.make}name='make' label='Make'/>
 <MaterialInput  onChange={updateCar} value={localCar.model}name='model' label='Model'/>
            <div style={{padding:"5px"}}>
            <Button onClick={saveNewCar} text='Save'/>
            </div>
          
            {/* <AutoQuote quote={quote} /> */}
            </div>
            </div>
            
        </Modal>
        </>
    )
}