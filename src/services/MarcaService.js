import Estados from "../components/marcas/Marcas"
import { axiosConfig } from "../configuration/axiosConfig"

const obtenerMarcas= (Estados = true) =>{
  return axiosConfig.get('marcas?estado=?'+Estados,{
    headers:{
        'Content-type' : 'application/json'
    }
  })   
}

const createMarcas = (data)=>{
    return axiosConfig.post('marcas',data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const editarMarcasID = (tipoId,data)=>{
    return axiosConfig.Marcasput('marcas/'+tipoId, data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const borrarMarcasID = (tipoId)=>{
    return axiosConfig.delete('marcas/'+tipoId, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const obtenerMarcasID = (tipoId) =>{
    return axiosConfig.get('marcass/'+tipoId,{
      headers:{
          'Content-type' : 'application/json'
      }
    })   
  }
export { 
    obtenerMarcas,
    createMarcas,
    editarMarcasID,
    borrarMarcasID,
    obtenerMarcasID  
}