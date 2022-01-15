import { useState, useEffect } from "react";

import Input from '../../components/Input'
import Spinner from '../../components/Spinner'
import getOperation from '../../services/getOperation'
import getSymbols from '../../services/getSymbols'
import './Home.css'
import '../../index.css'

export default function Home({value , handleChange ,handleHistorial}){

    const [rate,setRate] = useState(0)
    const [codes , setCodes] = useState([])
    const [loading , setLoading] = useState(false)
    const [convert , setConvert] =useState(true)
    useEffect(() => {
        setLoading(true)
        getOperation({from: value.selectFrom , to:value.selectTo})
        .then(tasa => {
            setLoading(false)
            setRate(tasa)
        })
    },[value.selectFrom , value.selectTo])

    useEffect(()=>{
        getSymbols()
        .then(code=> {
            setCodes(code)
        })
    },[])
      

    const handleSubmit = e =>{
        e.preventDefault()
        const valor = {
            from: value.from,
            to:value.from*rate,
            selectFrom:value.selectFrom,
            selectTo: value.selectTo,
            rate
        } 
        setConvert(!convert)
        if(!convert) return
        handleHistorial(valor)
    }

    if(loading) return<Spinner/>
    return(
        <div className="Home">
           <form onSubmit={handleSubmit}>

            <h5>De:</h5>
            <div className="input-group">
                <Input 
                    className="form-control"
                    type="number"
                    name="from" 
                    value={value.from}
                    onChange={handleChange}/>
                    <select type="select"
                        name="selectFrom"
                        className="form-select"
                        onChange={handleChange}
                        value={value.selectFrom}>
                        {codes.map(sym => <option key={sym} value={sym} >{sym}</option> )}
                     </select >
            </div>
            <h5>A:</h5>
            <div className="input-group">
                <Input 
                    className="form-control"
                    type="number"
                    name="to" 
                    value={value.from*rate}
                    onChange={handleChange}/>
    
                    <select className="form-select"
                        type="select"
                        name="selectTo"
                        onChange={handleChange}
                        value={value.selectTo}>
                        {codes.map(sym => <option key={sym} value={sym} >{sym}</option> )}
                     </select >
          
            </div>

            {convert? 
                <div className="div-boton">
                            <button className="boton">Ver Conversión</button>
                </div>
                :<div className="div-boton">
                    <div className="ver-conversion">
                        <span>Precio: </span>
                        <span>1 {value.selectFrom} = {rate} {value.selectTo} </span>
                    </div>
                    <div className="ver-conversion">
                        <span>Total a Recibir:</span>
                        <span className="total"> {value.from*rate} {value.selectTo} </span>
                    </div>
                    <button className="boton">Volver</button>
                </div>
            }
            </form>
        </div>
    )
}