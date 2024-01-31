import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProjectPage from '../pages/ProjectPage'
function Router() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projectpage/:id' element={<ProjectPage/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Router