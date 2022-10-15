import Estados from "../components/estados/Estados"
import { axiosConfig } from "../configuration/axiosConfig"

const obtenerEstados= (Estados = true) =>{
  return axiosConfig.get('estados?estado=?'+Estados,{
    headers:{
        'Content-type' : 'application/json'
    }
  })   
}

const createEstados = (data)=>{
    return axiosConfig.post('estados',data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const editarEstadosID = (tipoId,data)=>{
    return axiosConfig.Estadosput('estados/'+tipoId, data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const borrarEstadosID = (tipoId)=>{
    return axiosConfig.delete('estados/'+tipoId, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const obtenerEstadosID = (tipoId) =>{
    return axiosConfig.get('estados/'+tipoId,{
      headers:{
          'Content-type' : 'application/json'
      }
    })   
  }
export { 
    obtenerEstados,
    createEstados,
    editarEstadosID,
    borrarEstadosID,
    obtenerEstadosID  
}