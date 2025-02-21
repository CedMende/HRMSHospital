import React from "react";
import { Download, FileText, DollarSign, Printer } from "lucide-react";
const payrollData = [{
  id: 1,
  employee: "Dr. Sarah Johnson",
  position: "Senior Physician",
  salary: "$12,000",
  overtime: "$800",
  deductions: "$1,500",
  netPay: "$11,300"
}, {
  id: 2,
  employee: "Dr. Michael Chen",
  position: "Surgeon",
  salary: "$15,000",
  overtime: "$1,200",
  deductions: "$2,000",
  netPay: "$14,200"
}, {
  id: 3,
  employee: "Nurse Emma Wilson",
  position: "Head Nurse",
  salary: "$7,000",
  overtime: "$500",
  deductions: "$900",
  netPay: "$6,600"
}];
export const PayrollPage = () => {
  return <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Payroll Management
        </h2>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4">
          <button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </button>
          <button className="flex-1 sm:flex-none border dark:border-gray-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200">
            <Printer className="w-5 h-5" />
            <span>Print</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Total Payroll
          </h3>
          <div className="mt-4">
            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              $145,300
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              February 2024
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Deductions
          </h3>
          <div className="space-y-4">
            {[{
            label: "Tax",
            value: "$25,000"
          }, {
            label: "Insurance",
            value: "$12,000"
          }, {
            label: "Other",
            value: "$5,000"
          }].map(item => <div key={item.label} className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">
                  {item.label}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </span>
              </div>)}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Department Budget
          </h3>
          <div className="space-y-4">
            {[{
            label: "Cardiology",
            value: "$45,000"
          }, {
            label: "Emergency",
            value: "$35,000"
          }, {
            label: "Neurology",
            value: "$55,000"
          }].map(item => <div key={item.label} className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">
                  {item.label}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </span>
              </div>)}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Payroll Details
          </h3>
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  {["Employee", "Position", "Base Salary", "Overtime", "Deductions", "Net Pay", "Actions"].map(header => <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {header}
                    </th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {payrollData.map(item => <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {item.employee}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {item.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {item.salary}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {item.overtime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {item.deductions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {item.netPay}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        <FileText className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="sm:hidden divide-y divide-gray-200 dark:divide-gray-700">
            {payrollData.map(item => <div key={item.id} className="py-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.employee}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.position}
                    </div>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400">
                    <FileText className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Base Salary
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white">
                      {item.salary}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Overtime
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white">
                      {item.overtime}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Deductions
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white">
                      {item.deductions}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Net Pay
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.netPay}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};