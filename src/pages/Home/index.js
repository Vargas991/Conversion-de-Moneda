import { useState, useEffect } from "react";

import Input from '../../components/Input'
import Spinner from '../../components/Spinner'
import BtnIntercambio from '../../components/BtnIntercambio'
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
      

    const handleSubmit = () =>{
        // e.preventDefault()
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


    

    return(
        <div className="Home">
            
            {(loading1+loading2)? 
            <div className="spinner"> 
                <Spinner/>
            </div>
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
                            <button onClick={handleSubmit} className="boton">Ver Conversión</button>
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
                    <button onClick={handleSubmit} className="boton">Volver</button>
                </div>
            }
           
        </div>
    )
}