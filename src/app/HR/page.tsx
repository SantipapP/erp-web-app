import React from "react";
import Sidebar from "../components/Sidebar";
function page() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome to the HR Page</h1>
          <p className="mt-2 text-gray-600">
            This is the HR content area. You can add more components here.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">HR Features</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Employee Management</li>
            <li>Payroll Processing</li>
            <li>Recruitment Tracking</li>
            <li>Performance Reviews</li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Upcoming HR Events</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Annual Employee Training - March 15</li>
            <li>Quarterly Performance Reviews - April 10</li>
            <li>Recruitment Fair - May 20</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default page;
