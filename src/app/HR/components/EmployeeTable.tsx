import React from "react";
import Link from "next/link";
function EmployeeTable() {
  return (
    <>
      <div className="shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-end p-4 bg-white">
          <Link href="/HR/Employee/EmployeeRegister" prefetch>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mr-4 hover:bg-blue-700 transition">
              Register Employee
            </button>
          </Link>
          <input
            type="text"
            placeholder="Search employees..."
            className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Example row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">001</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Engineering</td>
              <td className="px-6 py-4 whitespace-nowrap">Software Engineer</td>
              <td className="px-6 py-4 whitespace-nowrap">Active</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-900">
                  View
                </button>
                <button className="text-green-600 hover:text-green-900 ms-4">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-900 ms-4">
                  Delete
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeTable;
