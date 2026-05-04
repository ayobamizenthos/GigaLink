'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bell,
  ChevronRight,
  CheckCircle2,
  User,
  MapPin,
  Briefcase,
  FileText,
  Code2,
  Sparkles,
  Building2,
  Search,
  ShieldCheck,
  Award,
} from 'lucide-react'
import Link from 'next/link'

export default function CompanyDashboard() {
  const stats = [
    { value: '45', label: 'Active Roles', color: 'text-[#09090B]' },
    { value: '12', label: 'Hires Made', color: 'text-emerald-600' },
    { value: '842', label: 'Verified Views', color: 'text-[#09090B]' },
    { value: '3d', label: 'Avg Time to Hire', color: 'text-[#09090B]' },
  ]
  const [searchTerm, setSearchTerm] = useState('')
  const candidates = [
    {
      id: 5,
      name: 'Adaobi Eze',
      role: 'Frontend Engineer',
      school: 'AltSchool Africa',
      status: 'Offer Sent',
      img: '/adaobi_eze.png',
      isContacted: true,
      hasBadge: true,
    },
    {
      id: 1,
      name: 'David Okafor',
      role: 'Backend Developer',
      school: 'ALX Africa',
      status: 'High match',
      img: '/nigerian_dev_1.png',
      isContacted: false,
      hasBadge: true,
    },
    {
      id: 2,
      name: 'Sarah Musa',
      role: 'AI Trainer',
      school: 'Be-Mint',
      status: 'Interviewing',
      img: '/nigerian_dev_2.png',
      isContacted: true,
    },
    {
      id: 3,
      name: 'Emmanuel Uche',
      role: 'Data Analyst',
      school: '3MTT Nigeria',
      status: 'High match',
      img: '/nigerian_dev_3.png',
      isContacted: false,
    },
    {
      id: 4,
      name: 'Chinedu Kalu',
      role: 'Mobile Developer',
      school: 'NitHub',
      status: 'New match',
      img: '/nigerian_dev_4.png',
      isContacted: false,
    },
    {
      id: 6,
      name: 'Chioma E.',
      role: 'Virtual Assistant',
      school: 'AltSchool Africa',
      status: 'High match',
      img: '/nigerian_va_talent_1.png',
      isContacted: false,
      hasBadge: true,
    },
  ]

  const filteredCandidates = candidates.filter(
    candidate =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.school.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const activityFeed = [
    {
      id: 1,
      type: 'success',
      text: 'accepted your offer',
      name: 'Adaobi Eze',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'primary',
      text: 'was shortlisted for Backend Dev',
      name: 'David Okafor',
      time: 'Yesterday',
    },
    {
      id: 3,
      type: 'success',
      text: 'completed their assessment',
      name: 'Sarah Musa',
      time: '3 days ago',
    },
    {
      id: 4,
      type: 'primary',
      text: 'new verified matches found',
      name: 'Data Analyst role',
      time: '4 days ago',
    },
    {
      id: 5,
      type: 'success',
      text: 'interview scheduled',
      name: 'Emmanuel Uche',
      time: '1 week ago',
    },
    {
      id: 6,
      type: 'primary',
      text: 'viewed your company profile',
      name: 'Top 5% Talent Pool',
      time: '1 week ago',
    },
    {
      id: 7,
      type: 'success',
      text: 'technical test passed',
      name: 'Chinedu Kalu',
      time: '2 weeks ago',
    },
    {
      id: 8,
      type: 'primary',
      text: 'applied for Mobile Dev',
      name: 'Joy Amadi',
      time: '2 weeks ago',
    },
    {
      id: 9,
      type: 'success',
      text: 'onboarding invitation sent',
      name: 'Nifemi Williams',
      time: '3 weeks ago',
    },
    { id: 10, type: 'primary', text: 'contract signed', name: 'Tunde Bakare', time: '1 month ago' },
  ]

  return (
    <div className="h-screen bg-[#FAFAFA] flex flex-col font-sans text-[#09090B] selection:bg-[#09090B] selection:text-white overflow-hidden">
      <nav className="h-[72px] border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-display font-black text-2xl tracking-tighter">
              GigaLink<span className="text-[#09090B]">.</span>
            </Link>
            <span className="ml-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-500">
              Enterprise Portal
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <button className="text-[#09090B] border-b-2 border-[#09090B] py-6 cursor-pointer">
              Overview
            </button>
            <button className="text-gray-400 hover:text-[#09090B] transition-colors py-6 border-b-2 border-transparent cursor-pointer">
              Talent Pool
            </button>
            <button className="text-gray-400 hover:text-[#09090B] transition-colors py-6 border-b-2 border-transparent cursor-pointer">
              Hires
            </button>
            <button className="text-gray-400 hover:text-[#09090B] transition-colors py-6 border-b-2 border-transparent cursor-pointer">
              Billing
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative text-gray-400 hover:text-[#09090B] transition-colors cursor-pointer">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 border-[1.5px] border-white" />
          </button>
          <div className="flex items-center gap-4 pl-6 border-l border-gray-200 cursor-pointer group">
            <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-gray-100 group-hover:border-[#0055FF] transition-colors bg-white">
              <img
                src="https://www.google.com/s2/favicons?domain=siemens.com&sz=128"
                alt="Siemens"
                className="w-full h-full object-contain p-1.5"
              />
            </div>
            <span className="text-sm font-bold text-[#09090B] hidden sm:block group-hover:text-[#09090B] transition-colors">
              Siemens Africa
            </span>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-[1440px] w-full mx-auto p-6 flex flex-col h-[calc(100vh-72px)] overflow-hidden">
        {/* Header Stats Ribbon - Designer Polish */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-6 shrink-0"
        >
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div className="w-16 h-16 rounded-2xl border-2 border-white shadow-xl overflow-hidden bg-white group-hover:border-[#0055FF] transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center p-2">
                <img
                  src="https://www.google.com/s2/favicons?domain=siemens.com&sz=128"
                  alt="Siemens"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 flex items-center justify-center drop-shadow-xl">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#F5C33B] fill-current">
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-black text-[#09090B] tracking-tighter">
                  Siemens Africa
                </h1>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#09090B]" /> Lagos, Nigeria
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-200" />
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#09090B]" /> Tech & Infrastructure
                </span>
              </div>
            </div>
          </div>

          <div className="flex bg-white/50 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 p-1">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`px-8 py-2.5 flex flex-col justify-center hover:bg-white/80 transition-all rounded-xl cursor-default group ${i !== 0 ? 'border-l border-gray-100' : ''}`}
              >
                <span
                  className={`text-2xl font-black tracking-tighter mb-0.5 group-hover:scale-110 transition-transform ${s.color.includes('emerald') ? 'text-emerald-500' : s.color.includes('primary') ? 'text-[#09090B]' : 'text-[#09090B]'}`}
                >
                  {s.value}
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-600">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
          {/* Left Column (Span 2) - Primary Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-[24px] shadow-sm border border-gray-200 flex flex-col min-h-0 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-100 shrink-0 flex items-center justify-between bg-white/50 backdrop-blur-sm z-10">
              <h2 className="text-xl font-black text-[#09090B] tracking-tighter uppercase">
                Verified Candidates
              </h2>
              <div className="relative group/search max-w-[200px] w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 group-focus-within/search:text-[#09090B] transition-colors" />
                <input
                  type="text"
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg pl-9 pr-4 py-2 text-[11px] font-bold outline-none focus:border-[#0055FF]/30 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div
              className="flex gap-8 px-6 py-2 overflow-x-auto shrink-0 no-scrollbar bg-white border-b border-gray-100"
            >
              {['All Candidates', 'Frontend', 'Backend', 'Data Science', 'Design'].map((tab, i) => (
                <button
                  key={tab}
                  className={`py-3 text-[11px] font-black uppercase tracking-widest transition-all relative whitespace-nowrap ${
                    i === 0
                      ? 'text-[#09090B]'
                      : 'text-gray-400 hover:text-[#09090B]'
                  }`}
                >
                  {tab}
                  {i === 0 && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#09090B]"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F9FAFB]/50 custom-scrollbar">
              {filteredCandidates.length > 0 ? (
                filteredCandidates.map(item => (
                  <Link href="/talent" key={item.id} className="block group">
                    <div
                      className="p-4 rounded-[20px] bg-white border border-gray-100 hover:border-[#0055FF]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all flex items-center justify-between cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0055FF]/0 to-[#0055FF]/0 group-hover:from-[#0055FF]/[0.02] transition-all pointer-events-none" />
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-gray-50 shrink-0 group-hover:border-[#0055FF] transition-all duration-500 shadow-sm">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div>
                          <div className="font-black text-[15px] text-[#09090B] mb-0.5 tracking-tight group-hover:text-[#09090B] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] font-bold text-gray-400 mb-2 flex items-center gap-2">
                            {item.role} <span className="w-1 h-1 rounded-full bg-gray-200" /> Verified
                            by <strong className="text-gray-700">{item.school}</strong>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider border shadow-sm ${
                                item.status === 'High match'
                                  ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                  : item.status === 'Offer Sent'
                                    ? 'bg-blue-50 text-[#0055FF] border-blue-100'
                                    : 'bg-gray-50 text-gray-500 border-gray-100'
                              }`}
                            >
                              {item.status}
                            </span>
                            {item.hasBadge && (
                              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1D9BF0]/5 border border-[#1D9BF0]/10 shadow-sm">
                                <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#1D9BF0] fill-current">
                                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pl-4 border-l border-gray-100 h-12 relative z-10">
                        <button className="px-4 py-2 rounded-xl text-[10px] font-black bg-[#09090B] text-white shadow-xl hover:bg-[#0055FF] hover:shadow-[#0055FF]/25 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95">
                          {item.isContacted ? 'View Profile' : 'Reach Out'}
                          {!item.isContacted && (
                            <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                  <Search className="w-8 h-8 mb-3 opacity-20" />
                  <p className="text-xs font-bold uppercase tracking-widest">No candidates found</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column (Span 1) - Secondary Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6 min-h-0 flex-1"
          >
            {/* Hero Metric Card - Polish */}
            <div className="rounded-[24px] bg-[#09090B] p-6 text-white shadow-2xl relative overflow-hidden shrink-0 group hover:scale-[1.02] transition-transform duration-300 min-h-[220px] flex flex-col justify-center">
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-[#0055FF] rounded-full blur-[60px] opacity-40 transition-opacity duration-500 pointer-events-none" />
              <div className="text-7xl font-black tracking-tighter leading-none mb-3 relative z-10">
                12
              </div>
              <div className="font-black text-xl mb-1 relative z-10 text-white tracking-tight">
                New Matches Today
              </div>
              <div className="text-xs font-bold text-gray-400 leading-relaxed relative z-10 max-w-[200px]">
                Pulled from <strong className="text-white">845</strong> verified talent
                endorsements.
              </div>
            </div>

            {/* Timeline Card */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 p-6 flex-1 overflow-y-auto flex flex-col custom-scrollbar">
              <div className="flex items-center justify-between mb-6 shrink-0">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  Recent Activity
                </h3>
                <button className="text-[10px] font-bold text-[#0055FF] hover:underline uppercase cursor-pointer">
                  View All
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {activityFeed.map((item, i) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative mt-0.5 shrink-0 z-10 bg-white">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 bg-white shadow-sm">
                        {item.type === 'success' ? (
                          <CheckCircle2 className="w-4 h-4 text-[#09090B]" />
                        ) : (
                          <Bell className="w-4 h-4 text-[#09090B]" />
                        )}
                      </div>
                      {i !== activityFeed.length - 1 && (
                        <div className="absolute top-8 bottom-[-20px] left-1/2 -translate-x-1/2 w-px bg-gray-200 -z-10" />
                      )}
                    </div>
                    <div className="pb-2">
                      <div className="text-xs font-medium text-[#09090B] mb-0.5 leading-snug">
                        <strong>{item.name}</strong> {item.text}
                      </div>
                      <div className="text-[10px] font-bold text-gray-400">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
