import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';
import Error from './Error';
import { consultarMedias, crearMedias } from '../../servicios/MedServicios';

export default function Medias() {
    const [medias, setMedias] = useState([]);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newMedia, setNewMedia] = useState({
        serial: '',
        titulo: '',
        sinopsis: '',
        url: '',
        imagen: '',
        fechaEstreno: '',
        genero: '',
        director: '',
        productora: '',
        tipo: '',
        estado: true
    });


    useEffect(() => {
        obtenerTodos();
    }, []);

    const obtenerTodos = async () => {
        try {
            const { data } = await consultarMedias();
            setMedias(data);
            setError(false);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMedia(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await crearMedias(newMedia);
            obtenerTodos();
            setShowModal(false);
            setNewMedia({
                serial: '',
                titulo: '',
                sinopsis: '',
                url: '',
                imagen: '',
                fechaEstreno: '',
                genero: '',
                director: '',
                productora: '',
                tipo: '',
                estado: true
            });
        } catch (error) {
            console.error(error);
        }
    };

    
    return (
        <>
            {error ? <Error /> : (
                <div className="card-container">
                    {medias.map(media => (
                        <MediaCard key={media._id} media={media} />
                    ))}
                </div>
            )}

            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Agregar Medias
            </button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Agregar Nueva Media</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="serial">Serial:</label>
                                <input type="text" name="serial" id="serial" value={newMedia.serial} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="titulo">Título:</label>
                                <input type="text" name="titulo" id="titulo" value={newMedia.titulo} onChange={handleChange} required />
                            </div>
                            {}
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}