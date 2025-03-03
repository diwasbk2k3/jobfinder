import React from 'react'
<<<<<<< HEAD
import { Outlet } from 'react-router-dom'
import AdminNabvar from './AdminNabvar'
=======
import { Outlet, Navigate  } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
>>>>>>> origin/backendDev

function AdminLayout() {
  const isAdminLoggedIn = localStorage.getItem("admin_email") !== null;
    if (!isAdminLoggedIn) {
      return <Navigate to="/admin/login" replace />;
    }
  return (
    <div>
      <AdminNabvar/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout