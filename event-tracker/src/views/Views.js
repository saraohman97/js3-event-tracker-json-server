import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Details from './Details'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/create' element={ <Create /> } />
        <Route path='/events/:id' element={ <Details /> } />
    </Routes>
  )
}

export default Views