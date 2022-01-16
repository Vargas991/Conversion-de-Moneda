import Table from "../../components/Table";


export default function Historial({historial}){
    
    if(!historial.length)return <h2>Historial Vacio...</h2>
    return(
        <Table historial={historial}/>
    )
}