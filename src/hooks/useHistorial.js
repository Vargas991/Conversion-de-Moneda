import { useState } from "react";

export default function useFormulario(inicial){
    const [historial,setHistorial] = useState(inicial)
   
    const handleHistorial = value=>{
        setHistorial(
            [
                ...historial,
                value
            ]
        )
    }
    return {historial,handleHistorial}

}