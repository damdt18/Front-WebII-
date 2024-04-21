import { axiosConfig } from "../configuracion/axiosConfig";

const consultarDirectores = (estado= true) => {
    return axiosConfig.get('directores?estado='+estado, {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

const crearDirector = (datos= {}) =>{
    return axiosConfig.post('directores', datos,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarDirector = (id, datos= {}) =>{
    return axiosConfig.put('directores/'+id, datos,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const borrarDirector = id =>{
    return axiosConfig.delete('directores/'+id, {},{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    consultarDirectores,
    crearDirector,
    editarDirector,
    borrarDirector
}