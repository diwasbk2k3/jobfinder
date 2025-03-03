import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import EmployerNavbar from './EmployerNavbar'

function EmployerLayout() {
  const isEmployerLoggedIn = localStorage.getItem("employer_id") !== null;
  if (!isEmployerLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <EmployerNavbar/>
      <Outlet/>
    </div>
  )
}

export default EmployerLayout