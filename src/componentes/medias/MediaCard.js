
import React from 'react';

const MediaCard = ({ media }) => {
    const fechaEstreno = new Date(media.fechaEstreno);
    const year = fechaEstreno.getFullYear();

    return (
        <div className="card">
            <img src={media.imagen} className="card-img-top" alt={media.titulo} />
            <div className="card-body">
                <h5 className="card-title">{media.titulo}</h5>
                <p className="card-text">Año de estreno: {year}</p>
                <p className="card-text">{media.sinopsis}</p>
            </div>
        </div>
    );
};

export default MediaCard;
