import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Calendar,
  ChevronDown,
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';

const TableRow = ({ name, email, amount, status, date }) => (
  <motion.tr
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="border-b border-white/5 hover:bg-white/[0.02] transition-all cursor-pointer group"
  >
    <td className="py-4 px-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-[10px] text-slate-500">{email}</p>
        </div>
      </div>
    </td>
    <td className="py-4 px-4 text-sm font-medium text-slate-300">{amount}</td>
    <td className="py-4 px-4">
      <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
        }`}>
        {status}
      </span>
    </td>
    <td className="py-4 px-4 text-sm text-slate-500">{date}</td>
    <td className="py-4 px-4 text-right">
      <button className="text-slate-500 hover:text-white transition-colors">
        <MoreHorizontal size={18} />
      </button>
    </td>
  </motion.tr>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex min-h-screen bg-[#0b0e14] text-white">
      <Sidebar />

      <main className="flex-1 ml-64 p-10 overflow-hidden">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Welcome Back, Kyle</h2>
            <p className="text-slate-400 text-sm">Here's what's happening with your projects today.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-slate-900/50 border border-white/5 rounded-2xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all w-64"
              />
            </div>

            <div className="flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 px-4 py-2.5 rounded-2xl text-indigo-300 text-sm font-bold cursor-pointer hover:bg-indigo-600/20 transition-all">
              <Calendar size={16} />
              <span>Oct 20 - Nov 20</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard
            label="Total Revenue"
            value="$128,430"
            change={12.5}
            trend="up"
            icon={DollarSign}
            color="#6366f1"
          />
          <StatCard
            label="Active Users"
            value="2,420"
            change={8.2}
            trend="up"
            icon={Users}
            color="#a855f7"
          />
          <StatCard
            label="Avg. Session"
            value="14m 32s"
            change={-2.4}
            trend="down"
            icon={Activity}
            color="#f43f5e"
          />
          <StatCard
            label="Conversion Rate"
            value="4.2%"
            change={5.1}
            trend="up"
            icon={ArrowUpRight}
            color="#10b981"
          />
        </div>

        {/* Middle Section: Chart and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2 glass rounded-[32px] p-8 min-h-[400px]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Performance Overview</h3>
              <div className="flex gap-2">
                {['Day', 'Week', 'Month'].map(t => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === t ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Simple Mock Chart with SVG */}
            <div className="w-full h-64 relative mt-4">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M0,150 C100,120 200,180 300,100 C400,20 500,140 600,60 C700,-20 800,40 800,40"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  d="M0,150 C100,120 200,180 300,100 C400,20 500,140 600,60 C700,-20 800,40 800,40 L800,200 L0,200 Z"
                  fill="url(#gradient)"
                />
              </svg>

              <div className="flex justify-between mt-6 px-2 text-[10px] font-bold text-slate-500">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-[32px] p-8">
            <h3 className="text-xl font-bold mb-6">Recent Transactions</h3>
            <div className="space-y-6">
              {[
                { name: 'Alex Rivera', time: '2 mins ago', amount: '+$1,290.00', icon: 'AR', color: 'emerald' },
                { name: 'Sarah Chen', time: '15 mins ago', amount: '-$450.00', icon: 'SC', color: 'rose' },
                { name: 'Marcus Wright', time: '1 hour ago', amount: '+$2,800.00', icon: 'MW', color: 'indigo' },
                { name: 'Elena Gomez', time: '3 hours ago', amount: '+$150.00', icon: 'EG', color: 'emerald' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xs font-bold border border-white/5 transition-all group-hover:border-indigo-500/50">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-[10px] text-slate-500">{item.time}</p>
                    </div>
                  </div>
                  <p className={`text-sm font-bold ${item.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-300'}`}>
                    {item.amount}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-sm font-bold transition-all border border-white/5">
              View All Activity
            </button>
          </div>
        </div>

        {/* Bottom Table */}
        <div className="glass rounded-[32px] overflow-hidden">
          <div className="p-8 pb-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Latest Projects</h3>
            <button className="text-indigo-400 text-sm font-bold hover:underline">See Details</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-[10px] font-bold uppercase tracking-widest border-b border-white/5">
                <th className="py-4 px-8">Project Name</th>
                <th className="py-4 px-4">Budget</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Due Date</th>
                <th className="py-4 px-4"></th>
              </tr>
            </thead>
            <tbody>
              <TableRow name="Design System" email="figma-import@nova.io" amount="$4,500" status="Completed" date="Oct 24, 2025" />
              <TableRow name="Mobile App" email="dev-squad@nova.io" amount="$12,000" status="In Progress" date="Nov 12, 2025" />
              <TableRow name="Cloud Infrastructure" email="arch-team@nova.io" amount="$8,200" status="Completed" date="Oct 30, 2025" />
              <TableRow name="AI Integration" email="ml-lab@nova.io" amount="$15,800" status="In Progress" date="Dec 05, 2025" />
            </tbody>
          </table>
        </div>
      </main>

      {/* Tailwind and Global Styles */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
        
        .glass {
          background: rgba(23, 27, 34, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}
