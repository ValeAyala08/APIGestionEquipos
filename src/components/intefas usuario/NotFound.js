import React from 'react'
import notFound from './notFound.png'

export default function NotFound() {
  return (
    <div>
         <h2>Pàgina no encontrada</h2>
    <img 
    className='figure img img-fluid d-block' 
    alt=''
    src={notFound}
    />
    </div>
  )
}
