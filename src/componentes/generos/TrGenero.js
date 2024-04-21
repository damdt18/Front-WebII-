import React from 'react'
import dayjs from 'dayjs'

export default function TrGenero({ index, genero }) {
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{genero.nombre}</td>
            <td>{genero.descripcion}</td>
            <td> {dayjs(genero.fechaCreacion).format('DD/MM/YYYY')} </td>
            <td>{genero.estado ? 'Activo' : 'Inactivo'} </td>
            <td>
                <button
                type="button"
                className="btn btn-outline-success">
                    EDITAR
                </button>
                <button
                type="button"
                className="btn btn-outline-danger">
                    BORRAR
                </button>
            </td>
        </tr>
    )
}
