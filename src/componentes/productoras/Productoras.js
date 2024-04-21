import React, { useEffect, useState } from 'react'
import { consultarProduct, crearProduct } from '../../servicios/ProServicios'

import TooglePro from './TooglePro'
import ErrorPro from './ErrorPro'
import TablaPro from './TablaPro'

export default function Productoras() {

  const [productoras, setProductoras] = useState([])
  const [estado, setEstado] = useState()
  const [error, setError] = useState(false)
  const [productora, setProductora] = useState({
    nombre: '', slogan:'', descripcion: '', estado: true
  })

  useEffect(() => {
    consultarTodo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estado])


  const consultarTodo = async () => {
    try {
      const { data } = await consultarProduct(estado)
      setProductoras(data)
      if (error) {
        setError(false)
      }
    } catch (e) {
      console.error(e)
      setError(true)
    }
  }

  const changeState = () => {
    setEstado(!estado)
  }

  const handleChange = e => {
    setProductora({
      ...productora, [e.target.name]: e.target.value
    })
  }

  const guardado = async () => {
    try {
      const respuesta = await crearProduct(productora)
      consultarTodo()
      setProductoras({
        nombre: '',
        slogan: '',
        descripcion: '',
        estado: true
      })
      setEstado(true)
      console.log(respuesta)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <TooglePro
                changeState={changeState}
                estado={estado} />

            {error ? <ErrorPro /> : <TablaPro productoras={productoras} />}

            <button>
                <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                data-bs-whatever="@fat">Agregar productora</button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva productora</h1>
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
                                            value={productora.nombre}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Slogan:</label>
                                        <textarea
                                            className="form-control"
                                            id="message-text"
                                            name="descripcion"
                                            value={productora.descripcion}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Descripción:</label>
                                        <textarea
                                            className="form-control"
                                            id="message-text"
                                            name="descripcion"
                                            value={productora.descripcion}
                                            onChange={handleChange}
                                        >
                                        </textarea>
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
                                        disabled={productora.nombre.length === 0}
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
