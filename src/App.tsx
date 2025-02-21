import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { EmployeesPage } from "./components/pages/EmployeesPage";
import { AttendancePage } from "./components/pages/AttendancePage";
import { LeavePage } from "./components/pages/LeavePage";
import { PayrollPage } from "./components/pages/PayrollPage";
import { PerformancePage } from "./components/pages/PerformancePage";
import { MessagesPage } from "./components/pages/MessagesPage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { ThemeProvider } from "./context/ThemeContext";
export function App() {
  return <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeesPage />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/leave" element={<LeavePage />} />
              <Route path="/payroll" element={<PayrollPage />} />
              <Route path="/performance" element={<PerformancePage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>;
}