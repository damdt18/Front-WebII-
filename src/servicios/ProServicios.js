import { axiosConfig } from "../configuracion/axiosConfig";

const consultarProduct = (estado= true) => {
    return axiosConfig.get('productoras?estado='+estado, {
        Headers: {
            'Content-Type' : 'application/json'
        }
    })
}

const crearProduct = (datos= {}) =>{
    return axiosConfig.post('productoras', datos,{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarProduct = (id, datos= {}) =>{
    return axiosConfig.put('productoras/'+id, datos,{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

const borrarProduct = id =>{
    return axiosConfig.delete('productoras/'+id, {},{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    consultarProduct,
    crearProduct,
    editarProduct, 
    borrarProduct
}