import React, { useEffect, useState } from 'react'
import { consultarGeneros, crearGenero } from '../../servicios/GenServicios'

import Tabla from './Tabla'
import Toogle from './Toogle'
import Error from './Error'

export default function Generos() {

    const [generos, setGeneros] = useState([])
    const [estado, setEstado] = useState(false)
    const [error, setError] = useState(false)
    const [genero, setGenero] = useState({
        nombre: '', descripcion: '', estado: true
    })

    useEffect(() => {
        consultarTodo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [estado])

    const consultarTodo = async ()=>{
        try {
            const {data} = await consultarGeneros(estado)
            setGeneros(data)
            if(error){
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
        setGenero({
            ...genero, [e.target.name]: e.target.value
        })
    }

    const guardado = async () => {
        try {
            const respuesta = await crearGenero(genero)
            consultarTodo()
            setGeneros({
                nombre: '', descripcion: '', estado: true
            })
            setEstado(true)
            console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Toogle
                changeState={changeState}
                estado={estado} />

            {error ? <Error /> : <Tabla generos={generos} />}

            <button>
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" 
                    data-bs-whatever="@fat">Agregar Género</button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Género</h1>
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
                                            value={genero.nombre}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Descripción:</label>
                                        <textarea
                                            className="form-control"
                                            id="message-text"
                                            name="descripcion"
                                            value={genero.descripcion}
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
                                        disabled={genero.nombre.length === 0}
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
