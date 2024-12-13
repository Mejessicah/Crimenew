import React from 'react';
import { Menu, Bell, Shield, Map, FileText } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">CrimeWatch</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink icon={<Map size={18} />} text="Crime Map" />
          <NavLink icon={<FileText size={18} />} text="Reports" />
          <NavLink icon={<Bell size={18} />} text="Alerts" />
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
      {icon}
      <span>{text}</span>
    </a>
  );
}