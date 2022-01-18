import './style.css';
export function CaixaColorida (props){
    return(
        <div className="preview" style={{ backgroundColor:props.backgroundColor}}></div>
    )
}