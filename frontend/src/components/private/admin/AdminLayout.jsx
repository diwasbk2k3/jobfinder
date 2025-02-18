import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNabvar from './AdminNabvar'

function AdminLayout() {
  return (
    <div>
      <AdminNabvar/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout