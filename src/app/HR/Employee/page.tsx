import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import EmployeeTable from '../components/EmployeeTable'

function page() {
  return (
    <>
    <Sidebar />
    <div className="p-4 sm:ml-64 bg-gray-100 min-h-screen">
        <EmployeeTable />
    </div>
    </>
  )
}

export default page