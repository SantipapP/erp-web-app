import React from "react";
import Sidebar from "../components/Sidebar";

function page() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome to the Main Page</h1>
          <p className="mt-2 text-gray-600">
            This is the main content area. You can add more components here.
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
