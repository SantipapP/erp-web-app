import Sidebar from "@/app/components/Sidebar";
import React from "react";

function page() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 w-full">
          <div className="max-w-7xl mx-auto w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 w-full">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            Employee Registration Form
          </h1>
          <p className="text-blue-100 mt-2">
            ERP System - Human Resources Module
          </p>
              </div>

              <div className="p-8 space-y-8 w-full">
          {/* Personal Information */}
          <div className="bg-gray-50 rounded-xl p-6 w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
                </label>
                <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
                </label>
                <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
                </label>
                <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
                </label>
                <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
                </label>
                <input
            type="date"
            name="dateOfBirth"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            National ID
                </label>
                <input
            type="text"
            name="nationalId"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter national ID"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                name="address"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter full address"
              />
            </div>
          </div>

          {/* Employment Information */}
          <div className="bg-indigo-50 rounded-xl p-6 w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              Employment Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Employee ID *
                </label>
                <input
            type="text"
            name="employeeId"
            placeholder="Enter employee ID"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Department *
                </label>
                <select
            name="department"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                >
            <option value="">-Please select-</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Position *
                </label>
                <input
            type="text"
            name="position"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date *
                </label>
                <input
            type="date"
            name="startDate"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Employment Type *
                </label>
                <select
            name="employmentType"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors "
                >
            <option value="">Select employment type</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Location
                </label>
                <input
            type="text"
            name="workLocation"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Enter work location"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Reporting Manager
                </label>
                <input
            type="text"
            name="reportingManager"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Enter reporting manager name"
                />
              </div>
            </div>
          </div>

          {/* Compensation */}
          <div className="bg-green-50 rounded-xl p-6 w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              Compensation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Base Salary
                </label>
                <input
            type="number"
            name="baseSalary"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="Enter base salary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Currency
                </label>
                <select
            name="currency"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                ></select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Payroll Frequency
                </label>
                <select
            name="payrollFrequency"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                ></select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-orange-50 rounded-xl p-6 w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              Additional Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Emergency Contact Name
                </label>
                <input
            type="text"
            name="emergencyContactName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            placeholder="Enter emergency contact name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Emergency Contact Phone
                </label>
                <input
            type="tel"
            name="emergencyContactPhone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            placeholder="Enter emergency contact phone"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
                </label>
                <textarea
            name="notes"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            placeholder="Enter any additional notes or comments"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 w-full">
            <button
              type="button"
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Employee
            </button>

            <button
              type="button"
              className="flex-1 sm:flex-none bg-gray-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Reset Form
            </button>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
