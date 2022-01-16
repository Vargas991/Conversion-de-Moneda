

export default function Table({historial}){

    if(!historial.length)return <h2>Historial Vacio...</h2>
    return (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">De</th>
                <th scope="col">Precio</th>
                <th scope="col">A</th>
                <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
                {historial.map((item,index)=>
                    <tr key={index}>
                        <th  scope="row">{index+1}</th>
                        <td >{item.selectFrom}</td>
                        <td >{item.from}</td>
                        <td >{item.selectTo}</td>
                        <td >{item.to}</td>
                    </tr> )}
            </tbody>
        </table>
    )
 }