import React from "react";
import Sidebar from "../components/Sidebar";
function page() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div>
          <h1 className="text-2xl font-bold mb-4">HR Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-2">Total Employees</h2>
              <p className="text-3xl font-bold text-blue-600">120</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-2">Open Positions</h2>
              <p className="text-3xl font-bold text-green-600">5</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-2">On Leave Today</h2>
              <p className="text-3xl font-bold text-red-600">3</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Recent Hires</h2>
            <ul>
              <li className="flex justify-between py-2 border-b">
                <span>Jane Doe</span>
                <span className="text-gray-500">HR Manager</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>John Smith</span>
                <span className="text-gray-500">Software Engineer</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Emily Johnson</span>
                <span className="text-gray-500">Accountant</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Birthdays</h2>
            <ul>
              <li className="flex justify-between py-2 border-b">
                <span>Michael Brown</span>
                <span className="text-gray-500">June 15</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Sarah Lee</span>
                <span className="text-gray-500">June 20</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
