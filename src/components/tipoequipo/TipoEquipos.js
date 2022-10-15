import React, { useEffect } from 'react'
import { obtenerTipoEquipos } from '../../services/TipoEquipoService'

export default function TipoEquipos() {

   const listTipoEquipos = async () => {
    const res = await obtenerTipoEquipos(true)
     console.log(res)
   }

   useEffect (()=> {
     listTipoEquipos()
      }, [])
      
  return (
    <div>TipoEquipos</div>
  )
}
