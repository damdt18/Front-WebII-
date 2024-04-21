import React from 'react'
import NavBar from '../componentes/ui/NavBar'
import Generos from '../componentes/generos/Generos'
import Directores from '../componentes/directores/Directores'
import Productoras from '../componentes/productoras/Productoras'
import Tipos from '../componentes/tipos/Tipos'
import Media from '../componentes/medias/Medias'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../componentes/ui/notFound'
import Footer from '../componentes/ui/Footer'

export default function AppRuta() {
  return (
    <>
        <div className='container'>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Generos />}/>
                <Route path='/directores' element={<Directores/>}/>
                <Route path='/productoras' element={<Productoras/>}/>
                <Route path='/tipos' element={<Tipos/>}/>
                <Route path='/series-peliculas' element={<Media/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
        <Footer/>
    </>
  )
}

