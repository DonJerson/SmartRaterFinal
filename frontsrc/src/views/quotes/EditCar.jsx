
import AutoQuote from '../dashelements/AutoQuote';
import Button from "../buttons/greenButton";
import { Link, navigate,Router } from "@reach/router";
import Modal from "../elements/Modal";
import MaterialInput from '../../elements/inputs/MaterialInput';
import Selector from '../../secondaryelements/Selector';

export default function EditCar(props) {
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
<p> Edit Car</p>
</div>

<div className='' style={{position:"relative",padding:"10px"}}>
<div className='center' style={{width:"250px",gap:"8px",display:"flex",flexDirection:"column"}}>

<MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='VIN *'/>
<MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Year *'/>
<MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Make'/>
<MaterialInput  onChange={props.onChange} value={props.value}name='Name' label='Model'/>
<div style={{padding:"5px"}}>
<Button text='Save'/>
</div>

{/* <AutoQuote quote={quote} /> */}
</div>
</div>

</Modal>
        </>
    )
}