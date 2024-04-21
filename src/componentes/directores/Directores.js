import React, { useEffect, useState } from 'react'
import { consultarDirectores, crearDirector } from '../../servicios/DirServicios'

import ToogleDir from './ToogleDir'
import Error from './ErrorDir'
import TablaDir from './TablaDir'

export default function Directores() {

  const [directores, setDirectores] = useState([])
  const [estado, setEstado] = useState(false)
  const [error, setError] = useState(false)
  const [director, setDirector] = useState({
    nombre: '', estado: true
  })

  useEffect(() => {
    consultarTodo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estado])


  const consultarTodo = async () => {
    try {
      const { data } = await consultarDirectores(estado)
      setDirectores(data)
      if(error){
        setError(true)
      }
    } catch (e) {
      console.error(e)
      setError(true)
    }
  }

  const changeState = async () => {
    setEstado(!estado)
  }

  const handleChange = e => {
    setDirector({
      ...director,
      [e.target.name]: e.target.value
    })
  }

  const guardado = async () => {
    try {
        const respuesta = await crearDirector(director)
        consultarTodo()
        setDirector({
            nombre: '', estado: true
        })
        setEstado(true)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
            <ToogleDir
                changeState={changeState}
                estado={estado} />

            {error ? <Error /> : <TablaDir directores={directores} />}

            <button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModal" 
                  data-bs-whatever="@fat">Agregar director
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Director</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={guardado}>
                                    <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Nombre:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="recipient-name"
                                            name="nombre"
                                            value={director.nombre}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Cerrar
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={director.nombre.length === 0}
                                    >
                                        Guardar
                                    </button>
                                </form>
                            </div>
                            <div className="modal-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </>
  )
}
