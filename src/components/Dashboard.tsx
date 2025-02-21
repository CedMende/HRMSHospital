import React from "react";
import { Users, Clock, Calendar, AlertCircle } from "lucide-react";
const StatCard = ({
  icon,
  label,
  value,
  change
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: string;
}) => <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        <p className="text-2xl font-semibold mt-1 dark:text-white">{value}</p>
        {change && <p className="text-sm text-green-600 dark:text-green-400 mt-1">
            {change}
          </p>}
      </div>
      <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
        {icon}
      </div>
    </div>
  </div>;
const ActivityItem = ({
  title,
  time,
  status
}: {
  title: string;
  time: string;
  status: "pending" | "approved" | "rejected";
}) => <div className="flex items-center justify-between py-3">
    <div>
      <p className="text-sm font-medium dark:text-white">{title}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
    </div>
    <span className={`px-2 py-1 rounded-full text-xs ${status === "pending" ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-400" : status === "approved" ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400" : "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-400"}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  </div>;
export const Dashboard = () => {
  return <div className="h-full">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: Just now
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<Users className="w-6 h-6 text-blue-600" />} label="Total Employees" value="248" change="+12 this month" />
          <StatCard icon={<Clock className="w-6 h-6 text-green-600" />} label="Present Today" value="212" change="85% attendance" />
          <StatCard icon={<Calendar className="w-6 h-6 text-purple-600" />} label="On Leave" value="15" />
          <StatCard icon={<AlertCircle className="w-6 h-6 text-orange-600" />} label="Pending Requests" value="8" />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Recent Activities
          </h3>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <ActivityItem title="Leave Request - Dr. Sarah Johnson" time="2 hours ago" status="pending" />
            <ActivityItem title="Shift Change - Nurse Team B" time="4 hours ago" status="approved" />
            <ActivityItem title="Overtime Request - Medical Lab" time="Yesterday" status="rejected" />
            <ActivityItem title="New Employee Onboarding" time="Yesterday" status="approved" />
          </div>
        </div>
      </div>
    </div>;
};