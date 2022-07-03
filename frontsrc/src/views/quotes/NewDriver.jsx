
import AutoQuote from '../dashelements/AutoQuote';
import Button from "../buttons/greenButton";
import { Link, navigate,Router } from "@reach/router";
import Modal from "../elements/Modal";
import MaterialInput from '../../elements/inputs/MaterialInput';
import Selector from '../../secondaryelements/Selector';
import React from 'react';

export default function AutoSelect(props) {
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
    async function saveDriver(){
        setLoading(true)
        let driver={}
        driver.customer={id:props.userPack.user.id}
        props.userPack.methods.axios.defaults.headers.post['Authorization'] = 'JWT '+window.localStorage.getItem('token')
        await props.userPack.methods.axios.post(props.userPack.methods.baseUrl+"api/namedinsured/",driver).then(
            (response)=>{
                console.log("response",response)
                setLoading(false)
            }
        ).catch(
            (error)=>{
                console.log("error",error)
                setLoading(false)
            }
        )
       //navigate('/savedquotes/'+quote.id+'/edit/driver')

    }
    const [loading,setLoading]=React.useState(false)
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
            <p> New Driver</p>
            </div>

            <div className='' style={{position:"relative",padding:"10px"}}>
            <div className='center' style={{width:"250px",gap:"8px",display:"flex",flexDirection:"column"}}>
{loading?
              <div className="myRow center">
              <div className="lds-roller"><div></div><div></div><div></div><div>
              </div><div></div><div></div><div></div><div></div></div>
            </div>
:<>
<MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Name *'/>
 <MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Dob *'/>
 <MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Relationship'/>
 <MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Phone'/>
 <MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Email'/>
 <MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='License'/>
 <MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='SSN'/>
 <MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Passport'/>
</>}

            <div style={{padding:"5px"}}>
            <Button text='Save' onClick={saveDriver}/>
            </div>
          
            {/* <AutoQuote quote={quote} /> */}
            </div>
            </div>
            
        </Modal>
        </>
    )
}