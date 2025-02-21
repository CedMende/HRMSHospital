import React from "react";
import { Clock, Calendar, ArrowRight } from "lucide-react";
const attendanceData = [{
  id: 1,
  name: "Dr. Sarah Johnson",
  checkIn: "08:00 AM",
  checkOut: "05:00 PM",
  status: "Present",
  department: "Cardiology"
}, {
  id: 2,
  name: "Nurse Emma Wilson",
  checkIn: "07:45 AM",
  checkOut: "06:30 PM",
  status: "Present",
  department: "Emergency"
}, {
  id: 3,
  name: "Nurse Mark Thompson",
  checkIn: "07:30 AM",
  checkOut: "04:30 PM",
  status: "Present",
  department: "Pediatrics"
}, {
  id: 4,
  name: "Dr. Michael Chen",
  checkIn: "--:--",
  checkOut: "--:--",
  status: "Absent",
  department: "Neurology"
}, {
  id: 5,
  name: "Nurse Lisa Anderson",
  checkIn: "08:15 AM",
  checkOut: "--:--",
  status: "Present",
  department: "ICU"
}];
export const AttendancePage = () => {
  return <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Attendance
        </h2>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4">
          <button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
            <Clock className="w-5 h-5" />
            <span>Clock In</span>
          </button>
          <button className="flex-1 sm:flex-none border dark:border-gray-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Calendar className="w-5 h-5" />
            <span>Select Date</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Today's Overview
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Present</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                45
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Absent</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                3
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Late</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                2
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Department Overview
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Cardiology
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                12/12
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Emergency
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                8/10
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Neurology
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                15/15
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Working Hours
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Regular</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                8h
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Overtime</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                2h
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Total</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                10h
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Today's Attendance Log
          </h3>
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Check In
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Check Out
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {attendanceData.map(record => <tr key={record.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {record.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {record.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {record.checkIn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {record.checkOut}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${record.status === "Present" ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400" : "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-400"}`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="sm:hidden divide-y divide-gray-200 dark:divide-gray-700">
            {attendanceData.map(record => <div key={record.id} className="py-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {record.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {record.department}
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full 
                    ${record.status === "Present" ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400" : "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-400"}`}>
                    {record.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Check In
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white">
                      {record.checkIn}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Check Out
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white">
                      {record.checkOut}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};