import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  HelpCircle,
  LogOut,
  Zap
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <motion.div
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active 
        ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/20' 
        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
    }`}
    style={{
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '12px',
      cursor: 'pointer'
    }}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </motion.div>
);

export default function Sidebar() {
  return (
    <div className="glass h-screen w-64 p-6 flex flex-col fixed left-0 top-0">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <Zap className="text-white fill-white" size={24} />
        </div>
        <h1 className="text-xl font-extrabold tracking-tight">NovaUX</h1>
      </div>

      <nav className="flex-1">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Main Menu</div>
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
        <SidebarItem icon={BarChart3} label="Analytics" />
        <SidebarItem icon={Users} label="Customers" />
        <SidebarItem icon={Bell} label="Notifications" />
        
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-8 mb-4 px-2">System</div>
        <SidebarItem icon={Settings} label="Settings" />
        <SidebarItem icon={HelpCircle} label="Support" />
      </nav>

      <div className="mt-auto">
        <div className="p-4 bg-indigo-600/10 rounded-2xl border border-indigo-500/20 mb-6 transition-all hover:bg-indigo-600/20">
          <p className="text-xs text-indigo-300 font-bold mb-1">PRO PLAN</p>
          <p className="text-xs text-slate-400 mb-3">Get advanced insights & more.</p>
          <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all shadow-lg shadow-indigo-600/20">
            Upgrade Now
          </button>
        </div>
        <SidebarItem icon={LogOut} label="Logout" />
      </div>

      <style jsx>{`
        .glass {
          background: rgba(15, 18, 24, 0.6);
          backdrop-filter: blur(16px);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}
