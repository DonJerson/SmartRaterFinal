import './css/green.css';
export default function Button(props){
    props.size = props.size || 'large';
    return(
        <div  className="frame-2 flex-col-hcenter-vcenter">
        <p className="txt-1085 flex-hcenter">{props.text}</p>
        </div>
    )
}