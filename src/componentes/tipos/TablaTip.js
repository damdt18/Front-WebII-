import React from 'react'
import TrTipo from './TrTipo'

export default function TablaTip({tipos = []}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    tipos.map((tipo, index) => {
                        return(
                            <TrTipo tipo={tipo} key={index+1} index={index}/>
                        )
                    })   
                }
            </tbody>
        </table>
    )
}
