"use client";
import Sidebar from "@/app/components/Sidebar";
import { useParams } from "next/navigation";

function Page() {
  const { EMP_ID } = useParams();
  return (
    <>
    <Sidebar />
      <div className="p-4 sm:ml-64 bg-gray-100 min-h-screen">
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
            {/* Profile Sidebar */}
            <div className="md:w-1/3 flex flex-col items-center md:items-end md:pr-8 mb-8 md:mb-0">
                <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center text-4xl font-bold text-gray-500 mb-4">
                    {/* Placeholder for profile image */}
                    <span>{EMP_ID?.toString().slice(0, 2) || "EM"}</span>
                </div>
                <div className="text-center md:text-right">
                    <h2 className="text-3xl font-semibold text-gray-800">Employee Name</h2>
                    <p className="text-gray-500">
                        Employee ID: <span className="font-mono">{EMP_ID}</span>
                    </p>
                    <p className="text-gray-500">
                        Position: <span className="font-medium">Software Engineer</span>
                    </p>
                    <p className="text-gray-500">
                        Department: <span className="font-medium">IT</span>
                    </p>
                    <p className="text-gray-500">
                        Location: <span className="font-medium">Head Office</span>
                    </p>
                    <p className="text-gray-500">
                        Employment Type: <span className="font-medium">Full-Time</span>
                    </p>
                    <p className="text-gray-500">
                        Reporting To: <span className="font-medium">John Doe</span>
                    </p>
                </div>
            </div>
            {/* Details Categories */}
            <div className="md:w-2/3 flex flex-col gap-8">
                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Contact Information</h3>
                    <div className="text-gray-600 space-y-1">
                        <p>Email: employee@example.com</p>
                        <p>Phone: +1 234 567 8901</p>
                        <p>Address: 123 Main St, City, Country</p>
                        <p>Emergency Contact: Jane Smith (+1 987 654 3210)</p>
                    </div>
                </div>
                {/* Employment Details */}
                <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Employment Details</h3>
                    <div className="text-gray-600 space-y-1">
                        <p>Date of Joining: 2022-01-01</p>
                        <p>
                            Status: <span className="text-green-600 font-semibold">Active</span>
                        </p>
                        <p>Probation End: 2022-07-01</p>
                        <p>Contract End: 2025-01-01</p>
                        <p>Employee Grade: G5</p>
                    </div>
                </div>
                {/* Personal Information */}
                <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Personal Information</h3>
                    <div className="text-gray-600 space-y-1">
                        <p>Date of Birth: 1990-05-15</p>
                        <p>Gender: Male</p>
                        <p>Marital Status: Single</p>
                        <p>Nationality: Country</p>
                        <p>Blood Group: O+</p>
                    </div>
                </div>
                {/* Bank Details */}
                <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Bank Details</h3>
                    <div className="text-gray-600 space-y-1">
                        <p>Bank Name: ABC Bank</p>
                        <p>Account Number: 1234567890</p>
                        <p>IFSC Code: ABCD0123456</p>
                        <p>PAN: ABCDE1234F</p>
                    </div>
                </div>
                {/* Skills & Qualifications */}
                <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Skills & Qualifications</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Bachelor of Technology in Computer Science</li>
                        <li>Certified Scrum Master</li>
                        <li>React, Node.js, TypeScript</li>
                        <li>5+ years of experience in software development</li>
                    </ul>
                </div>
                {/* Documents */}
                <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Documents</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Resume.pdf</li>
                        <li>OfferLetter.pdf</li>
                        <li>ID Proof.pdf</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Page;
