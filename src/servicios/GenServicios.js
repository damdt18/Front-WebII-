import { axiosConfig } from "../configuracion/axiosConfig";

const consultarGeneros = (estado = true) => {
    return axiosConfig.get('generos?estado='+estado, {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

const crearGenero = (datos= {}) =>{
    return axiosConfig.post('generos', datos,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarGenero = (id, datos= {}) =>{
    return axiosConfig.put('generos/'+id, datos,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const borrarGenero = id =>{
    return axiosConfig.delete('generos/'+id, {},{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    consultarGeneros,
    crearGenero,
    editarGenero,
    borrarGenero
}