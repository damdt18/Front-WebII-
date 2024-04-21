import React from 'react'
import TrGenero from './TrGenero'

export default function Tabla({ generos = [] }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    generos.map((genero, index) => {
                        return(
                            <TrGenero genero={genero} key={index+1} index={index}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}