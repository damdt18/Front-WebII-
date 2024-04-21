import { axiosConfig } from "../configuracion/axiosConfig";

const consultarTipos = (estado= true) => {
    return axiosConfig.get('tipos?estado='+estado, {
        Headers: {
            'Content-Type' : 'application/json'
        }
    })
}

const crearTipo = (datos= {}) =>{
    return axiosConfig.post('tipos', datos,{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarTipo = (id, datos= {}) =>{
    return axiosConfig.put('tipos/'+id, datos,{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

const borrarTipo = id =>{
    return axiosConfig.delete('tipos/'+id, {},{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    consultarTipos, 
    crearTipo, 
    editarTipo,
    borrarTipo
}