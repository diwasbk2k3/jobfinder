import React from 'react'
import { Outlet, Navigate  } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function AdminLayout() {
  const isAdminLoggedIn = localStorage.getItem("admin_email") !== null;
    if (!isAdminLoggedIn) {
      return <Navigate to="/admin/login" replace />;
    }
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout