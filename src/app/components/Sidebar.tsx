'use client';
import { useState } from 'react';

import { FaSearch, FaClipboardCheck, FaTruck, FaAngleDown, FaListUl, FaUser } from "react-icons/fa";
import { TbDatabaseSearch } from "react-icons/tb";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Swal from 'sweetalert2';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [HRDropdownOpen, setHRDropdownOpen] = useState(true);
    const [UserManagementDropdownOpen, setUserManagementDropdownOpen] = useState(true);
    const [GoodsControlNo, setGoodsControlNo] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const Logout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            setLoading(true);
            if (result.isConfirmed) {
                Swal.fire(
                    'Logged out!',
                    'You have been logged out.',
                    'success'
                )
                router.push('/');
            }
        })
    }

    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-40">
                    <div className="flex-col gap-4 w-full flex items-center justify-center">
                        <div
                            className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                        >
                            <div
                                className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                            ></div>
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
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-blue-400 dark:bg-gray-800 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {/* Dropdown Menu */}
                        <li>
                            <button
                                type="button"
                                onClick={() => setHRDropdownOpen(!HRDropdownOpen)}
                                className="flex cursor-pointer bg-gray-800 items-center w-full p-2 text-gray-900 rounded-lg transition duration-75 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
                            >
                                <span className="flex-1 ms-3 text-left font-bold text-white">Function E-Export</span>
                                <FaAngleDown className={`transform transition-transform ${HRDropdownOpen ? 'rotate-180' : ''} text-white`} />
                            </button>
                            {/* Dropdown Submenu */}
                            {HRDropdownOpen && (
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <TbDatabaseSearch />
                                            <span className="ms-3">Quick Search</span>
                                        </div>
                                        <div className='mx-2'>
                                            <input type="text" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                                                value={GoodsControlNo}
                                                onChange={(e) => setGoodsControlNo(e.target.value)}
                                            />
                                        </div>
                                        <div className='m-2'>
                                            <Link href={`/ExportCustomsPermit/${GoodsControlNo}`} prefetch>
                                            </Link>
                                            <button
                                                className='w-full cursor-pointer group relative flex items-center justify-center gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-gray-400 font-bold'
                                                disabled={!GoodsControlNo}
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="/ExportCustomsPermit" prefetch>
                                            <button
                                                className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                            >
                                                <FaTruck />
                                                <span className="ms-3">Export Customs Permit</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/ContainerCompleted" prefetch>
                                            <button
                                                className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                            >
                                                <FaClipboardCheck />
                                                <span className="ms-3">Container Completed</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/ExportDirectSearch" prefetch>
                                            <button
                                                className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                            >
                                                <FaSearch />
                                                <span className="ms-3">Direct Search</span>
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        
                        <li>
                            <button
                                type="button"
                                onClick={() => setUserManagementDropdownOpen(!UserManagementDropdownOpen)}
                                className="flex cursor-pointer bg-gray-800 items-center w-full p-2 text-gray-900 rounded-lg transition duration-75 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
                            >
                                <span className="flex-1 ms-3 text-left font-bold text-white">Settings</span>
                                <FaAngleDown className={`transform transition-transform ${UserManagementDropdownOpen ? 'rotate-180' : ''} text-white`} />
                            </button>
                            {UserManagementDropdownOpen && (
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <Link href="/User" prefetch>
                                            <button
                                                className="flex w-full items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                            >
                                                <FaUser />
                                                <span className="ms-3">Users</span>
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
    )
}

export default Sidebar