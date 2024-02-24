import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Import from './components/Import'
import About from './components/About'

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}  >  </Route>
      <Route exact path='/Features' element={<Features/>}  >  </Route>
      <Route exact path='/Pricing'  element={<Pricing/>}  >  </Route>
      <Route exact path='/Import'   element={<Import/>}  >  </Route>
      <Route exact path='/About'    element={<About/>}  >  </Route>
     
    </Routes>
    </>
  )
}

export default App