import inventarios from "../components/inventarios/Inventarios"
import { axiosConfig } from "../configuration/axiosConfig"

const obtenerInventario= (inventarios = true) =>{
  return axiosConfig.get('inventarios?inventarios=?'+inventarios,{
    headers:{
        'Content-type' : 'application/json'
    }
  })   
}

const createInventario= (data)=>{
    return axiosConfig.post('inventarios',data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const editarInventarioID = (tipoId,data)=>{
    return axiosConfig.Inventariosput('inventarios/'+tipoId, data, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const borrarInventarioID = (tipoId)=>{
    return axiosConfig.delete('inventarios/'+tipoId, {
    headers:{
        'Content-type' : 'application/json'
    }
})
}

const obtenerInventarioID = (tipoId) =>{
    return axiosConfig.get('inventarios/'+tipoId,{
      headers:{
          'Content-type' : 'application/json'
      }
    })   
  }
export { 
    obtenerInventario,
    createInventario,
    editarInventarioID,
    borrarInventarioID,
    obtenerInventarioID  
}