import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
import Pagenotfound from './PagenotFound'
import Form from './Form'

const Allroutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/form' element={<Form />} />
        <Route path='*' element={<Pagenotfound />} />

      </Routes>
    </div>
  )
}

export default Allroutes