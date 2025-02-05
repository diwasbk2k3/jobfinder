import React from 'react'
import { Outlet } from 'react-router-dom'
import EmployerNavbar from './EmployerNavbar'

function EmployerLayout() {
  return (
    <div>
      <EmployerNavbar/>
      <Outlet/>
    </div>
  )
}

export default EmployerLayout