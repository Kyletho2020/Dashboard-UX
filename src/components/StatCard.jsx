import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ label, value, change, trend, icon: Icon, color }) {
    const isPositive = trend === 'up';

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-3xl card-hover relative overflow-hidden group"
            style={{ minWidth: '240px' }}
        >
            <div
                className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 transition-all group-hover:opacity-40"
                style={{ backgroundColor: color }}
            />

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div
                    className="p-3 rounded-2xl bg-slate-800/50 border border-white/5"
                    style={{ color: color }}
                >
                    <Icon size={24} />
                </div>

                <div className={`flex items-center gap-1 text-sm font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {change}%
                </div>
            </div>

            <div className="relative z-10">
                <p className="text-sm font-medium text-slate-400 mb-1">{label}</p>
                <h3 className="text-3xl font-extrabold tracking-tight">{value}</h3>
            </div>
        </motion.div>
    );
}
