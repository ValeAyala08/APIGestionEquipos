import Estados from "../components/estados/Estados"
import { axiosConfig } from "../configuration/axiosConfig"

const obtenerUsuarios= (Estados = true) =>{
  return axiosConfig.get('tipoequipos?estado=?'+Estados,{
    headers:{
        'Content-type' : 'application/json'
    }
  })   
}

const createUsuarios = (data)=>{
    return axiosConfig.post('tipoequipos',data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const editarUsuariosID = (tipoId,data)=>{
    return axiosConfig.put('tipoequipos/'+tipoId, data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const borrarUsuariosID = (tipoId)=>{
    return axiosConfig.delete('tipoequipos/'+tipoId, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const obtenerUsuariosID = (tipoId) =>{
    return axiosConfig.get('tipoequipos/'+tipoId,{
      headers:{
          'Content-type' : 'application/json'
      }
    })   
  }
export { 
    obtenerTipoEquipos,
    createTipoEquipos,
    editarTipoEquiposID,
    borrarTipoEquiposID,
    obtenerTipoEquiposID  
}