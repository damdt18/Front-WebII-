import React from 'react'
import TrDirector from './TrDirector'

export default function TablaDir({directores = []}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Fecha de Actualzación</th>
                    <th scope="col">Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    directores.map((director, index) => {
                        return(
                            <TrDirector director={director} key={index+1} index={index}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
