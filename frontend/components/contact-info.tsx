"use client";

import { X, Phone, Video, Search, ChevronRight, Bell, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface ContactInfoProps {
  user: any;
  isOpen: boolean;
  onClose: () => void;
}

export function ContactInfo({ user, isOpen, onClose }: ContactInfoProps) {
  if (!user) return null;

  return (
    <div
      className={`absolute top-0 right-0 h-full w-full md:w-[400px] bg-white z-20 transition-transform duration-300 ease-in-out border-l border-gray-200 flex flex-col overflow-y-auto ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="h-16 bg-gray-50 flex items-center px-4 gap-4 border-b border-gray-200 shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="hover:bg-gray-200 p-1 rounded-full">
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <h2 className="text-base font-medium text-gray-800">Contact info</h2>
        {/* Edit Button (Placeholder) */}
        {/* <div className="ml-auto">
          <Pencil className="w-5 h-5 text-gray-600" />
        </div> */}
      </div>

      <div className="flex flex-col pb-8">
        {/* Profile Section */}
        <div className="bg-white p-8 flex flex-col items-center border-b border-gray-100 shadow-sm mb-2">
          <Avatar className="w-40 h-40 mb-4 cursor-pointer hover:opacity-90 transition-opacity">
            <AvatarImage src={user.profilePic} alt={user.username} />
            <AvatarFallback className="bg-emerald-500 text-white text-4xl">
              {user.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-medium text-gray-900 mb-1">
            {user.username}
          </h2>
          <p className="text-gray-500 text-lg">{user.phone || "+92 300 0000000"}</p>
        </div>

        {/* Actions Grid */}
        <div className="bg-white p-4 mb-2 shadow-sm border-b border-gray-100">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                        <Search className="w-5 h-5 text-whatsapp-green" />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Search</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                     {/* Video Call logic would go here */}
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                        <Video className="w-5 h-5 text-whatsapp-green" />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Video</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                     {/* Voice Call logic would go here */}
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                        <Phone className="w-5 h-5 text-whatsapp-green" />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Voice</span>
                </div>
            </div>
        </div>


        {/* About Section */}
        <div className="bg-white px-4 py-4 mb-2 shadow-sm border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-1">About</h3>
          <p className="text-gray-900">{user.bio || "Available"}</p>
        </div>

        {/* Media (Placeholder) */}
        <button className="bg-white px-4 py-4 mb-2 shadow-sm border-b border-gray-100 flex items-center justify-between w-full hover:bg-gray-50">
            <span className="text-gray-900 font-medium">Media, links and docs</span>
             <div className="flex items-center gap-1 text-gray-500">
                <span className="text-sm">0</span>
                <ChevronRight className="w-5 h-5" />
             </div>
        </button>


        {/* Settings List */}
        <div className="bg-white shadow-sm border-b border-gray-100">
             <button className="w-full px-4 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                <Star className="w-5 h-5 text-gray-500" />
                <div className="flex-1 text-left text-gray-900 font-medium">Starred messages</div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
             </button>
             <div className="w-full px-4 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <Bell className="w-5 h-5 text-gray-500" />
                <div className="flex-1 text-left text-gray-900 font-medium">Mute notifications</div>
                <Switch />
             </div>
        </div>

      </div>
    </div>
  );
}
