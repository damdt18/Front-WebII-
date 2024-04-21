import React from 'react'
import TrProduc from './TrProduc'

export default function TablaPro({productoras = []}) {
  return (
    <table className="table">
        <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Slogan</th>
                    <th scope="col">Fecha de Actualización</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productoras.map((productora, index) => {
                        return(
                            <TrProduc productora={productora} key={index+1} index={index}/>
                        )
                    })
                }
            </tbody>
    </table>
  )
}
