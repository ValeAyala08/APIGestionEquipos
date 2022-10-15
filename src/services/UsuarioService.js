import usuarios from "../components/usuarios/Usuarios"
import { axiosConfig } from "../configuration/axiosConfig"

const obtenerUsuarios= (usuarios= true) =>{
  return axiosConfig.get('Usuarios?usuario=?'+usuarios,{
    headers:{
        'Content-type' : 'application/json'
    }
  })   
}

const createUsuarios = (data)=>{
    return axiosConfig.post('usuarios',data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const editarUsuariosID = (tipoId,data)=>{
    return axiosConfig.put('usuarios/'+tipoId, data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const borrarEstadosID = (tipoId)=>{
    return axiosConfig.delete('usuario/'+tipoId, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const obtenerUsuarioID = (tipoId) =>{
    return axiosConfig.get('usuario/'+tipoId,{
      headers:{
          'Content-type' : 'application/json'
      }
    })   
  }
export { 
    obtenerUsuarios,
    createUsuarios,
    editarUsuariosID,
    borrarUsuariosID,
    obtenerUsuariosID  
}