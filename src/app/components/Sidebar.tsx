"use client";
import { useState } from "react";

import { FaSearch, FaAngleDown, FaListUl, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [HRDropdownOpen, setHRDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const Logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        Swal.fire("Logged out!", "You have been logged out.", "success");
        router.push("/");
      }
    });
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-40">
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
      {/* Toggle Button (เฉพาะ Mobile) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <FaListUl />
      </button>

      {/* Overlay (เฉพาะมือถือเมื่อเปิด Sidebar) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-blue-400 dark:bg-gray-800 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* HR Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => setHRDropdownOpen(!HRDropdownOpen)}
                className="flex cursor-pointer bg-gray-800 items-center w-full p-2 text-gray-900 rounded-lg transition duration-75 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 text-left font-bold text-white">
                  Human Resources
                </span>
                <FaAngleDown
                  className={`transform transition-transform ${
                    HRDropdownOpen ? "rotate-180" : ""
                  } text-white`}
                />
              </button>
              {HRDropdownOpen && (
                <ul className="space-y-2 font-medium py-2">
                  <li>
                    <Link href="/HR/Employee" prefetch>
                      <button className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaUser />
                        <span className="ms-3">Employee</span>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/HR/Department" prefetch>
                      <button className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="ms-3">Department</span>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/HR/Attendance" prefetch>
                      <button className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="ms-3">Attendance</span>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/HR/Payroll" prefetch>
                      <button className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="ms-3">Payroll</span>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/HR/Leave" prefetch>
                      <button className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="ms-3">Leave Management</span>
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <ul className="space-y-2 font-medium pt-4 border-t border-gray-300 dark:border-gray-700">
            <li>
              <button
                onClick={() => Logout()}
                className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaSearch />
                <span className="ms-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
