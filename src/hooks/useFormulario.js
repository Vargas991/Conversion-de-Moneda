import { useState } from "react";

export default function useFormulario(inicial){
    const [value, setValue] = useState(inicial)
    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    
    return {value,handleChange}

}