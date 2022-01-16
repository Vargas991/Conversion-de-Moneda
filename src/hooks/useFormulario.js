import { useState } from "react";

export default function useFormulario(inicial){
    const [value, setValue] = useState(inicial)
    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    

    const intercambiarSelect= ()=>{
        let tmp= value.selectFrom
        setValue({...value , selectFrom: value.selectTo ,selectTo: tmp })
        // setValue({...value, })
    }
    return {value,handleChange,intercambiarSelect}

}