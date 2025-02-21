import React from "react";
import { Calendar, Plus, Clock } from "lucide-react";
const leaveRequests = [{
  id: 1,
  employee: "Dr. Sarah Johnson",
  type: "Vacation",
  startDate: "2024-02-15",
  endDate: "2024-02-20",
  status: "Pending",
  reason: "Annual family vacation"
}, {
  id: 2,
  employee: "Nurse Emma Wilson",
  type: "Sick Leave",
  startDate: "2024-02-10",
  endDate: "2024-02-12",
  status: "Approved",
  reason: "Medical appointment"
}, {
  id: 3,
  employee: "Dr. Michael Chen",
  type: "Personal",
  startDate: "2024-02-25",
  endDate: "2024-02-26",
  status: "Rejected",
  reason: "Family event"
}];
export const LeavePage = () => {
  return <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Leave Management
        </h2>
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Request Leave</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Leave Balance
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Annual Leave
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                15 days
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Sick Leave
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                7 days
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Personal Leave
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                3 days
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Upcoming Leaves
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Feb 15 - Feb 20
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Dr. Sarah Johnson
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Feb 25 - Feb 26
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Dr. Michael Chen
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Department Coverage
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Cardiology
              </span>
              <span className="font-semibold text-green-600 dark:text-green-400">
                90%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Emergency
              </span>
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                75%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Neurology
              </span>
              <span className="font-semibold text-green-600 dark:text-green-400">
                95%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Leave Requests
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    Reason
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {leaveRequests.map(request => <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {request.employee}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {request.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {request.startDate} to {request.endDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {request.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === "Approved" ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400" : request.status === "Pending" ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-400" : "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-400"}`}>
                        {request.status}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
};