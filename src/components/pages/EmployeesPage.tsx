import React from "react";
import { Search, Filter, Plus } from "lucide-react";
const employeeData = [{
  id: 1,
  name: "Dr. Sarah Johnson",
  role: "Senior Physician",
  department: "Cardiology",
  status: "Active",
  email: "sarah.j@hospital.com",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop"
}, {
  id: 2,
  name: "Nurse Emma Wilson",
  role: "Head Nurse",
  department: "Emergency",
  status: "Active",
  email: "emma.w@hospital.com",
  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop"
}, {
  id: 3,
  name: "Dr. Michael Chen",
  role: "Surgeon",
  department: "Neurology",
  status: "On Leave",
  email: "michael.c@hospital.com",
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop"
}, {
  id: 4,
  name: "Nurse Lisa Anderson",
  role: "Senior Nurse",
  department: "ICU",
  status: "Active",
  email: "lisa.a@hospital.com",
  image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=300&h=300&fit=crop"
}, {
  id: 5,
  name: "Nurse Mark Thompson",
  role: "Registered Nurse",
  department: "Pediatrics",
  status: "Active",
  email: "mark.t@hospital.com",
  image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop"
}, {
  id: 6,
  name: "Dr. Rachel Martinez",
  role: "Pediatrician",
  department: "Pediatrics",
  status: "Active",
  email: "rachel.m@hospital.com",
  image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop"
}];
export const EmployeesPage = () => {
  return <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Employees
        </h2>
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Add Employee</span>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input type="text" placeholder="Search employees..." className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" />
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-200">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {employeeData.map(employee => <tr key={employee.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src={employee.image} alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {employee.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {employee.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {employee.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {employee.email}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="sm:hidden divide-y divide-gray-200 dark:divide-gray-700">
          {employeeData.map(employee => <div key={employee.id} className="p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <img className="h-10 w-10 rounded-full" src={employee.image} alt="" />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {employee.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {employee.role}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Department
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {employee.department}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Status
                  </span>
                  <span className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full 
                    ${employee.status === "Active" ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400" : "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-400"}`}>
                    {employee.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {employee.email}
                  </span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};