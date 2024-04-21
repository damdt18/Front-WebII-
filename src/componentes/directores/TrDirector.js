import dayjs from 'dayjs'
import React from 'react'

export default function TrDirector({index, director}) {
  return (
    <tr>
    <th scope="row">{index+1}</th>
    <td>{director.nombre}</td>
    <td>{dayjs(director.fechaActualzacion).format('DD-MM-YYYY')}</td>
    <td> {dayjs(director.fechaCreacion).format('DD/MM/YYYY')} </td>
    <td>{director.estado ? 'Activo' : 'Inactivo'} </td>
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
