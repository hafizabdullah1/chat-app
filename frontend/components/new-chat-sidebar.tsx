"use client";

import { X, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useGetAllUsersQuery } from "@/lib/redux/api/apiSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSelectedUser } from "@/lib/redux/slices/userSlice";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

interface NewChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewChatSidebar({ isOpen, onClose }: NewChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useGetAllUsersQuery({});
  const dispatch = useAppDispatch();
  
  const users = data?.users || [];

  const handleUserSelect = (user: any) => {
    dispatch(setSelectedUser(user));
    onClose();
  };

  const filteredUsers = users.filter((user: any) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`absolute top-0 left-0 h-full w-full md:w-[400px] bg-white z-20 transition-transform duration-300 ease-in-out border-r border-gray-200 flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="h-16 bg-whatsapp-green flex items-center px-4 gap-4 text-white shrink-0">
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-medium">New Chat</h2>
      </div>

      {/* Search */}
      <div className="p-3 bg-white border-b border-gray-100 shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search contacts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-9 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-1 focus:ring-whatsapp-green"
          />
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Spinner className="w-6 h-6 text-whatsapp-green" />
          </div>
        ) : error ? (
          <div className="p-4 text-center text-red-500 text-sm">
            Failed to load contacts
          </div>
        ) : (
          <div>
            <div className="px-4 py-3 text-whatsapp-green text-sm font-medium">
              ALL CONTACTS
            </div>
            {filteredUsers?.map((user: any) => (
              <div
                key={user._id}
                onClick={() => handleUserSelect(user)}
                className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <Avatar className="w-12 h-12">
                  <AvatarImage src={user.profilePic} alt={user.username} />
                  <AvatarFallback className="bg-emerald-500 text-white">
                    {user.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">
                    {user.username}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">{user.bio || "Available"}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
