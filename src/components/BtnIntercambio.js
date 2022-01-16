
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faExchangeAlt} from '@fortawesome/free-solid-svg-icons';

export default function BtnIntercambio({intercambiarSelect}){
    return <div className="contenedor-btn">
            
            <button className="intercambioBtn" onClick={intercambiarSelect} >
                 <FontAwesomeIcon icon={faExchangeAlt}/>
            </button>
</div>
}