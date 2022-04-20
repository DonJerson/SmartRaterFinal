import GeneralField from "../secondaryelements/GeneralField";
import SubmitButton from "../secondaryelements/SubmitButton";

function PhoneNumber(props){
    return(<>
  <form className="generalForm" onSubmit={props.userPack.methods.next} name="phoneNumber">
  <GeneralField required={true} placeholder='Phone Number' value={props.data.phoneNumber} onChange={props.userPack.methods.eventStateHandling}
  type="text" className="generalField" name="phoneNumber"/>
  <SubmitButton/>
  </form>
  </>
)
}

export default PhoneNumber;