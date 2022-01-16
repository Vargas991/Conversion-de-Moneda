export default function ReporteConversion({value , rate}){

    return(<>
        <div className="ver-conversion">
        <span>Precio: </span>
        <span>1 {value.selectFrom} = {rate} {value.selectTo} </span>
        </div>
        <div className="ver-conversion">
        <span>Precio Inverso: </span>
        <span>1 {value.selectTo} = {1/rate} {value.selectFrom} </span>
        </div>
        <div className="ver-conversion">
            <span>Total a Recibir:</span>
            <span className="total"> {value.from*rate} {value.selectTo} </span>
        </div>
    </>

    )

}