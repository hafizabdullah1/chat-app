"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MessageSquarePlus, MoreVertical, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { useGetAllUsersQuery, useLogoutMutation } from "@/lib/redux/api/apiSlice";
import { logout } from "@/lib/redux/slices/authSlice";
import { setSelectedUser } from "@/lib/redux/slices/userSlice";
import { Spinner } from "@/components/ui/spinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ContactsPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user: currentUser } = useAppSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [logoutMutation] = useLogoutMutation();

  // Fetch all users
  const { data, isLoading, error } = useGetAllUsersQuery(undefined, {
    skip: !isAuthenticated,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const handleLogout = async () => {
    try {
      await logoutMutation().unwrap();
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      dispatch(logout());
      router.push("/login");
    }
  };

  const handleUserClick = (user: any) => {
    dispatch(setSelectedUser(user));
    router.push("/chat");
  };

  if (!isAuthenticated) {
    return null;
  }

  const filteredUsers = data?.users?.filter((user: any) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-chat-header px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={currentUser?.profilePic} alt={currentUser?.username} />
                <AvatarFallback className="bg-emerald-500 text-white">
                  {currentUser?.username?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-gray-900">{currentUser?.username}</h2>
                <p className="text-xs text-gray-500">{currentUser?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquarePlus
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={() => router.push("/chat")}
              />
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                  <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => router.push("/settings")}>
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-1 focus:ring-whatsapp-green"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="overflow-y-auto max-h-[600px]">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Spinner className="w-8 h-8 text-whatsapp-green" />
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">
              Failed to load contacts. Please try again.
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {searchQuery ? "No contacts found" : "No contacts available"}
            </div>
          ) : (
            <div>
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700">
                  All Contacts ({filteredUsers.length})
                </h3>
              </div>
              {filteredUsers.map((user: any) => (
                <div
                  key={user.id}
                  onClick={() => handleUserClick(user)}
                  className="flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors"
                >
                  <div className="relative flex-shrink-0">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={user.profilePic} alt={user.username} />
                      <AvatarFallback className="bg-emerald-500 text-white">
                        {user.username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {user.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{user.username}</h3>
                    <p className="text-sm text-gray-500 truncate">
                      {user.bio || user.email}
                    </p>
                  </div>

                  <div className="text-xs text-gray-400">
                    {user.isOnline ? (
                      <span className="text-emerald-500 font-medium">Online</span>
                    ) : (
                      <span>Offline</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
