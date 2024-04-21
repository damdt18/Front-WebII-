import React from 'react'
import dayjs from 'dayjs'

export default function TrProduc({index, productora}) {
  return (
    <tr>
            <th scope="row">{index+1}</th>
            <td>{productora.nombre}</td>
            <td>{productora.descripcion}</td>
            <td>{productora.slogan}</td>
            <td> {dayjs(productora.fechaCreacion).format('DD/MM/YYYY')} </td>
            <td> {dayjs(productora.fechaActualizacion).format('DD/MM/YYYY')} </td>
            <td>{productora.estado ? 'Activo' : 'Inactivo'} </td>
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
