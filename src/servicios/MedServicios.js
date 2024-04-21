import { axiosConfig } from "../configuracion/axiosConfig";

const consultarMedias = (estado = true) => {
    return axiosConfig.get('medias?estado=' + estado);
};

const crearMedias = (datos = {}) => {
    return axiosConfig.post('medias', datos, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const editarMedia = (id, datos = {}) => {
    return axiosConfig.put('medias/' + id, datos, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const borrarMedia = (id) => {
    return axiosConfig.delete('medias/' + id);
};

export {
    consultarMedias,
    crearMedias,
    editarMedia,
    borrarMedia
};
