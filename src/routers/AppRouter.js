import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Estados from '../components/estados/Estados'
import NavBar from '../components/intefas usuario/NavBar'
import NotFound from '../components/intefas usuario/NotFound'
import Inventarios from '../components/inventarios/Inventarios'
import Marcas from '../components/marcas/Marcas'
import TipoEquipos from '../components/tipoequipo/TipoEquipos'
import Usuarios from '../components/usuarios/Usuarios'

export default function AppRouter() {
  return (
    <div>
      < NavBar title={'IUD'} />
      <main className='container'>
      <Routes>
        <Route path='/' element={<TipoEquipos/>} />
        <Route path='/estados' element={<Estados/>} />
        <Route path='/marcas' element={<Marcas/>} />
        <Route path='/inventarios' element={<Inventarios/>} />
        <Route path='/usuarios' element={<Usuarios/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </main>
    </div>
  )
}
