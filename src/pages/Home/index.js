import { useState, useEffect } from "react";

import Input from '../../components/Input'
import Spinner from '../../components/Spinner'
import BtnIntercambio from '../../components/BtnIntercambio'
import ReporteConversion from '../../components/ReporteConversion'
import getOperation from '../../services/getOperation'
import getSymbols from '../../services/getSymbols'
import './Home.css'
import '../../index.css'


export default function Home({value , handleChange ,handleHistorial,intercambiarSelect}){

    const [rate,setRate] = useState(0)
    const [codes , setCodes] = useState([])
    const [codesCountry , setCodesCountry] = useState([])
    const [loading1 , setLoading1] = useState(false)
    const [loading2 , setLoading2] = useState(false)
    const [convert , setConvert] =useState(true)
    
    useEffect(() => {
        setLoading1(true)
        getOperation({from: value.selectFrom , to:value.selectTo})
        .then(tasa => {
            setLoading1(false)
            setRate(tasa)
        })
    },[value.selectFrom , value.selectTo])

    useEffect(()=>{
        setLoading2(true)
        getSymbols()
        .then(code=> {
            setLoading2(false)
            setCodes(Object.keys(code))
            setCodesCountry(Object.values(code))
        })
    },[])
      

    const handleVerConversion = () =>{
       
        setConvert(!convert)
        if(!convert) return
        handleAddHistorial()
    }

    const handleAddHistorial =()=>{
        const valor = {
            from: value.from,
            to:value.from*rate,
            selectFrom:value.selectFrom,
            selectTo: value.selectTo,
            rate
        } 
        handleHistorial(valor)
    }

    return(
        <div className="Home">
            
            {(loading1+loading2)? 
            <Spinner/>
            : null}

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
                        {codes.map((code ,index) => <option key={code} value={code} >{code} - {codesCountry[index]}</option> )}
                    </select >
            </div>

            <BtnIntercambio intercambiarSelect={intercambiarSelect}/>

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
                        {codes.map((code ,index) => <option key={code} value={code} >{code} - {codesCountry[index]}</option> )}
                     </select >
            </div>

            {convert? 
                <div className="div-boton">
                    <button onClick={handleVerConversion} className="boton">Ver Conversión</button>
                </div>
                :<div className="div-boton">
                    <ReporteConversion value={value} rate={rate}/>
                    <button onClick={handleVerConversion} className="boton">Volver</button>
                    <button onClick={handleAddHistorial} className="boton">Agregar al Historial</button>
                </div>
            }
        </div>
    )
}