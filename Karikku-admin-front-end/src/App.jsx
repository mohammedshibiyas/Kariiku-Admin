import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Component/HomePage/HomePage'
import Login from './Component/Login/Login'
import Sidebar from './Component/Common/SideBar/Sidebar'
import AddnewProduct from './Component/AddNewProduct/AddnewProduct'
import AddStokes from './Component/AddStocks/AddStokes'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Sidebar' element={<Sidebar />} />
          <Route path='/Add-product' element={<AddnewProduct />} />
          <Route path='/Add-Stokes' element={<AddStokes/>} />


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
