import React, { useState } from "react";
import { Search, Send, ArrowLeft } from "lucide-react";
const conversations = [{
  id: 1,
  name: "Dr. Sarah Johnson",
  lastMessage: "Schedule update for tomorrow",
  time: "2m ago",
  unread: true,
  avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop"
}, {
  id: 2,
  name: "Nurse Team B",
  lastMessage: "Shift change confirmation",
  time: "1h ago",
  unread: false,
  avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop"
}, {
  id: 3,
  name: "HR Department",
  lastMessage: "New policy updates",
  time: "3h ago",
  unread: true,
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
}];
export const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [showChat, setShowChat] = useState(false);
  return <div className="p-4 sm:p-6 h-screen flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Messages
      </h2>
      <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className={`w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${showChat ? "hidden lg:block" : "block"}`}>
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input type="text" placeholder="Search messages..." className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
            </div>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[calc(100vh-200px)] overflow-y-auto">
            {conversations.map(chat => <div key={chat.id} onClick={() => {
            setSelectedChat(chat);
            setShowChat(true);
          }} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <img src={chat.avatar} alt="" className="w-10 h-10 rounded-full" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {chat.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {chat.time}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                  {chat.unread && <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full"></div>}
                </div>
              </div>)}
          </div>
        </div>
        <div className={`flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 flex flex-col ${showChat ? "block" : "hidden lg:flex"}`}>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <div className="flex items-center space-x-3">
              <button onClick={() => setShowChat(false)} className="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <img src={selectedChat.avatar} alt="" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {selectedChat.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Online
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 py-4">
            {/* Message content would go here */}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-center space-x-2">
              <input type="text" placeholder="Type a message..." className="flex-1 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
              <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};