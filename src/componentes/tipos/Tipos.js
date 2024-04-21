/* import React, { useEffect, useState } from 'react'
import { consultarTipos, crearTipo } from '../../servicios/TipServicios'

import TablaTip from './TablaTip'
import ErrorTip from './ErrorTip'
//import ToggleTip from './ToggleTipos'

export default function Tipos() {

  const [tipos, setTipos] = useState([])
  const [estado, setEstado] = useState(false)
  const [error, setError] = useState(false)
  const [tipo, setTipo] = useState({
    nombre: '', descripcion: ''
  })

  useEffect(() => {
    consultarTodo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const consultarTodo = async () => {
    try {
      const { data } = await consultarTipos()
      setTipo(data)
      if (error) {
        setError(false)
      }
    } catch (e) {
      console.error(e)
      setError(true)
    }
  }

/*   const changeState = async () => {
    setEstado(!estado)
  } 

  const handleChange = e => {
    setTipo({
        ...tipo, [e.target.name]: e.target.value
    })
}

const guardado = async () => {
    try {
        const respuesta = await crearTipo(tipo)
        consultarTodo()
        setTipos({
            nombre: '', descripcion: ''
        })
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}
  return (
    <>
{          <ToggleTip
                changeState={changeState}
                estado={estado} />

            {error ? <ErrorTip /> : <TablaTip tipos={tipos} />} }

      {error ? <ErrorTip/> : <TablaTip tipos={tipos} />}

            <button>
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" 
                    data-bs-whatever="@fat">Agregar Tipo</button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Tipo</h1>
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
                                            value={tipo.nombre}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Descripción:</label>
                                        <textarea
                                            className="form-control"
                                            id="message-text"
                                            name="descripcion"
                                            value={tipo.descripcion}
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
                                        disabled={tipo.nombre.length === 0}
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
 */

import React, { useEffect, useState } from 'react';
import { consultarTipos, crearTipo } from '../../servicios/TipServicios';
import TablaTip from './TablaTip';
import ErrorTip from './ErrorTip';

export default function Tipos() {
  const [tipos, setTipos] = useState([]);
  const [error, setError] = useState(false);
  const [tipo, setTipo] = useState({ nombre: '', descripcion: '' });

  useEffect(() => {
    consultarTodo();
  }, []);

  const consultarTodo = async () => {
    try {
      const { data } = await consultarTipos();
      setTipos(data);
      setError(false); // Aseguramos que no haya error al cargar los tipos
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  const handleChange = e => {
    setTipo({ ...tipo, [e.target.name]: e.target.value });
  };

  const guardado = async () => {
    try {
      const respuesta = await crearTipo(tipo);
      consultarTodo();
      setTipo({ nombre: '', descripcion: '' }); // Limpiamos el formulario
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {error ? <ErrorTip /> : <TablaTip tipos={tipos} />}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
      >
        Agregar Tipo
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Tipo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={guardado}>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="nombre"
                    value={tipo.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Descripción:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="descripcion"
                    value={tipo.descripcion}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>
                <button type="submit" className="btn btn-primary" disabled={tipo.nombre.length === 0}>
                  Guardar
                </button>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
