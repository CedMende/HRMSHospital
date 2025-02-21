import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Clock, Calendar, FileText, MessageSquare, Settings, Menu } from "lucide-react";
interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}
const navItems: NavItem[] = [{
  icon: <LayoutDashboard className="w-5 h-5" />,
  label: "Dashboard",
  href: "/"
}, {
  icon: <Users className="w-5 h-5" />,
  label: "Employees",
  href: "/employees"
}, {
  icon: <Clock className="w-5 h-5" />,
  label: "Attendance",
  href: "/attendance"
}, {
  icon: <Calendar className="w-5 h-5" />,
  label: "Leave",
  href: "/leave"
}, {
  icon: <FileText className="w-5 h-5" />,
  label: "Payroll",
  href: "/payroll"
}, {
  icon: <div className="w-5 h-5" />,
  label: "Performance",
  href: "/performance"
}, {
  icon: <MessageSquare className="w-5 h-5" />,
  label: "Messages",
  href: "/messages"
}, {
  icon: <Settings className="w-5 h-5" />,
  label: "Settings",
  href: "/settings"
}];
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <>
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-md shadow-md">
        <Menu className="w-6 h-6 dark:text-gray-200" />
      </button>
      <aside className={`
        fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300
        w-64 lg:translate-x-0 z-40 border-r border-gray-200 dark:border-gray-700
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Hospital HRMS
          </h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map(item => <li key={item.label}>
                <Link to={item.href} onClick={() => setIsOpen(false)} className={`flex items-center space-x-3 p-3 rounded-lg transition-colors
                    ${location.pathname === item.href ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100"}`}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>)}
          </ul>
        </nav>
      </aside>
    </>;
};