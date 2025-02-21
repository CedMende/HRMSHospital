import React from "react";
import { TrendingUp, Award, Target, Users } from "lucide-react";
const performanceData = [{
  id: 1,
  employee: "Nurse Emma Wilson",
  department: "Emergency",
  rating: 4.9,
  status: "Excellent",
  goals: "14/15",
  lastReview: "2024-01-15"
}, {
  id: 2,
  employee: "Dr. Sarah Johnson",
  department: "Cardiology",
  rating: 4.8,
  status: "Excellent",
  goals: "12/15",
  lastReview: "2024-01-18"
}, {
  id: 3,
  employee: "Nurse Mark Thompson",
  department: "Pediatrics",
  rating: 4.7,
  status: "Excellent",
  goals: "11/12",
  lastReview: "2024-01-20"
}, {
  id: 4,
  employee: "Dr. Michael Chen",
  department: "Neurology",
  rating: 4.6,
  status: "Good",
  goals: "10/12",
  lastReview: "2024-01-22"
}, {
  id: 5,
  employee: "Nurse Lisa Anderson",
  department: "ICU",
  rating: 4.5,
  status: "Good",
  goals: "9/10",
  lastReview: "2024-01-25"
}];
export const PerformancePage = () => {
  return <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Performance Management
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Target className="w-5 h-5" />
          <span>Set Goals</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Average Performance
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                4.5/5.0
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Goals Completed
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                85%
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
              <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Top Performers
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                12
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Department Performance
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Cardiology
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  95%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{
                width: "95%"
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Emergency
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  88%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{
                width: "88%"
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Neurology
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  92%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{
                width: "92%"
              }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Top Performers
          </h3>
          <div className="space-y-4">
            {performanceData.map(performer => <div key={performer.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {performer.employee}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {performer.department}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {performer.rating}/5.0
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {performer.goals} Goals
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};