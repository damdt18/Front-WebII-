import React from 'react'
import dayjs from 'dayjs'

export default function TrTipo({index, tipo}) {
  return (
    <tr>
            <th scope="row">{index+1}</th>
            <td>{tipo.nombre}</td>
            <td> {dayjs(tipo.fechaCreacion).format('DD/MM/YYYY')} </td>
            <td>{tipo.descripcion}</td>
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
