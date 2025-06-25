'use client'
import React from 'react';
import { BarChart, Bar, YAxis, ResponsiveContainer } from 'recharts';

const data = [
    { name: '', uv: 300 },
    { name: '', uv: 180 },
    { name: '', uv: 100 },
    { name: '', uv: 350 },
    { name: '', uv: 600 },
    { name: '', uv: 500 },
    { name: '', uv: 200 },
];

export default function DashboardStats() {
    return (
        <div className="p-4 pb-[32px] rounded-2xl shadow-lg text-white bg-[linear-gradient(126.97deg,_rgba(6,11,40,0.74)_28.26%,_rgba(10,14,35,0.71)_91.2%)]">
            <div className="bg-transparent border-none">
                <div>
                    <div className="h-64 rounded-2xl py-6 bg-[linear-gradient(126.97deg,_#060C29_28.26%,_rgba(4,12,48,0.5)_91.2%)]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <YAxis stroke="#ccc" axisLine={false} tickLine={false} domain={[0, 'dataMax']} tickCount={7} interval={0} tick={{ fontSize: 12 }} />
                                <Bar dataKey="uv" fill="#FFFF" radius={[10, 10, 10, 10]} barSize={8} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-6 ">
                        <p className="text-sm text-green-400">Active Users (+23) than last week</p>
                        <div className="grid grid-cols-4 gap-6 mt-4">
                            {/* Users */}
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-[#1976d2] rounded-lg w-[25px] h-[25px] flex items-center justify-center">
                                        {/* Users icon (replace with your preferred icon) */}
                                        <img className='w-4' src={'./wallet.png'}></img>
                                    
                                    </div>
                                    <span className="text-sm text-gray-400">Users</span>
                                </div>
                                <div className="text-lg font-bold text-white">32,984</div>
                                <div className="w-12 h-1 rounded bg-gradient-to-r from-[#1976d2] to-[#42a5f5] mt-2"></div>
                            </div>
                            {/* Clicks */}
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-[#1976d2] rounded-lg w-[25px] h-[25px] flex items-center justify-center">
                                        {/* Clicks icon */}
                                        <img className='w-4' src={'./wallet.png'}></img>
                                   
                                    </div>
                                    <span className="text-sm text-gray-400">Clicks</span>
                                </div>
                                <div className="text-lg	 font-bold text-white">2.42m</div>
                                <div className="w-12 h-1 rounded bg-gradient-to-r from-[#1976d2] to-[#42a5f5] mt-2"></div>
                            </div>
                            {/* Sales */}
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-[#1976d2] rounded-lg w-[25px] h-[25px] flex items-center justify-center">
                                        {/* Sales icon */}
                                        <img className='w-4' src={'./document.png'}></img>
                                    
                                    </div>
                                    <span className="text-sm text-gray-400">Sales</span>
                                </div>
                                <div className="text-lg	 font-bold text-white">$2,400</div>
                                <div className="w-12 h-1 rounded bg-gradient-to-r from-[#1976d2] to-[#42a5f5] mt-2"></div>
                            </div>
                            {/* Items */}
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-[#1976d2] rounded-lg w-[25px] h-[25px] flex items-center justify-center">
                                        {/* Items icon */}
                                        <img className='w-4' src={'./wallet.png'}></img>
                                    </div>
                                    <span className="text-sm text-gray-400">Items</span>
                                </div>
                                <div className="text-lg	 font-bold text-white">320</div>
                                <div className="w-12 h-1 rounded bg-gradient-to-r from-[#1976d2] to-[#42a5f5] mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
