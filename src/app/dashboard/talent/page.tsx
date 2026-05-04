'use client'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bell,
  ChevronRight,
  CheckCircle2,
  User,
  MapPin,
  Briefcase,
  FileText,
  Code,
  Code2,
  Sparkles,
  Building2,
  X,
  ShieldCheck,
  GraduationCap,
  Award,
  Search,
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function TalentDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/user/profile')
        if (res.status === 401) return; // Skip if unauthorized
        const data = await res.json()
        if (data.profile) {
          setUserData(data)
        } else if (data.user) {
          setUserData(data)
        }
      } catch (err) {
        console.error('Failed to fetch profile', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()

    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Nuclear option: Periodically remove dev indicators that might be injected
    const interval = setInterval(() => {
      const selectors = ['nextjs-portal', '#nextjs-portal', '#__next-build-watcher', '[data-nextjs-toast-wrapper]']
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.remove())
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center bg-[#FAFAFA]">
      <div className="animate-spin w-8 h-8 border-4 border-[#09090B] border-t-transparent rounded-full" />
    </div>
  )

  // Use real data or fallback to Adaobi for presentation consistency
  let displayName = userData?.user?.name || 'Adaobi Eze'
  if (displayName === 'null null') displayName = 'Adaobi Eze'
  
  const displayRole = userData?.profile?.selectedRole || 'Frontend Engineer'
  const displayTrainer = userData?.profile?.trainer || 'AltSchool Africa'
  const displayLocation = userData?.profile?.location || 'Lagos, Nigeria'

  const stats = [
    { value: '342', label: 'Profile views', color: 'text-[#09090B]' },
    { value: '18', label: 'Saved jobs', color: 'text-emerald-600' },
    { value: '12', label: 'Active applications', color: 'text-[#09090B]' },
    { value: '3', label: 'Interviews', color: 'text-[#0055FF]' },
  ]
  
  // ... rest of the code ...
  const jobMatches = [
    {
      id: 1,
      name: 'Frontend Engineer',
      company: 'Paystack',
      logo: 'https://www.google.com/s2/favicons?domain=paystack.com&sz=128',
      salary: '₦200k - ₦400k',
      status: 'High match',
      isApplied: false,
    },
    {
      id: 2,
      name: 'Virtual Assistant',
      company: 'Konga',
      logo: 'https://www.google.com/s2/favicons?domain=konga.com&sz=128',
      salary: '₦120k - ₦180k',
      status: 'New match',
      isApplied: false,
    },
    {
      id: 3,
      name: 'Data Analyst',
      company: 'Siemens Africa',
      logo: 'https://www.google.com/s2/favicons?domain=siemens.com&sz=128',
      salary: '₦250k - ₦450k',
      status: 'High match',
      isApplied: false,
    },
    {
      id: 4,
      name: 'Digital Marketer',
      company: 'Jumia',
      logo: 'https://www.google.com/s2/favicons?domain=jumia.com.ng&sz=128',
      salary: '₦150k - ₦250k',
      status: 'New match',
      isApplied: false,
    },
    {
      id: 5,
      name: 'AI Trainer',
      company: 'ZenthosLab',
      logo: '/zenthoslab_logo_fit.png',
      invertLogo: true,
      salary: '₦200k - ₦350k',
      status: 'High match',
      isApplied: false,
    },
    {
      id: 6,
      name: 'Frontend Engineer',
      company: 'Flutterwave',
      logo: 'https://www.google.com/s2/favicons?domain=flutterwave.com&sz=128',
      salary: '₦180k - ₦300k',
      status: 'New match',
      isApplied: false,
    },
    {
      id: 7,
      name: 'Data Analyst',
      company: 'Stears',
      logo: 'https://www.google.com/s2/favicons?domain=stears.co&sz=128',
      salary: '₦150k - ₦250k',
      status: 'Applied',
      isApplied: true,
    },
    {
      id: 8,
      name: 'Virtual Assistant',
      company: 'Chowdeck',
      logo: 'https://www.google.com/s2/favicons?domain=chowdeck.com&sz=128',
      salary: '₦100k - ₦150k',
      status: 'Interviewing',
      isApplied: true,
    },
  ]

  const filteredJobs = jobMatches.filter(
    job =>
      job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const activityFeed = [
    {
      id: 1,
      type: 'success',
      text: 'moved to Interview stage',
      name: 'PiggyVest',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'primary',
      text: 'was viewed by Interswitch',
      name: 'Your profile',
      time: 'Yesterday',
    },
    {
      id: 3,
      type: 'success',
      text: 'endorsed your skills',
      name: 'BeMINT Academy',
      time: '3 days ago',
    },
    {
      id: 4,
      type: 'primary',
      text: 'was viewed by Paystack',
      name: 'Your profile',
      time: '4 days ago',
    },
    {
      id: 5,
      type: 'primary',
      text: 'application submitted',
      name: 'Flutterwave',
      time: '1 week ago',
    },
    {
      id: 6,
      type: 'success',
      text: 'assessment high score (98%)',
      name: 'Frontend Skills',
      time: '1 week ago',
    },
    {
      id: 7,
      type: 'primary',
      text: 'was viewed by Chowdeck',
      name: 'Your profile',
      time: '2 weeks ago',
    },
    {
      id: 8,
      type: 'success',
      text: 'completed onboarding',
      name: 'GigaLink Portal',
      time: '2 weeks ago',
    },
    {
      id: 9,
      type: 'primary',
      text: 'was viewed by Stears',
      name: 'Your profile',
      time: '3 weeks ago',
    },
    {
      id: 10,
      type: 'success',
      text: 'talent badge awarded',
      name: 'Top 10% React',
      time: '1 month ago',
    },
  ]

  return (
    <div className="h-screen bg-[#FAFAFA] flex flex-col font-sans text-[#09090B] selection:bg-[#0055FF] selection:text-white overflow-hidden">
      <nav className="h-[72px] border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-display font-black text-2xl tracking-tighter">
              GigaLink<span className="text-[#0055FF]">.</span>
            </Link>
            <span className="ml-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-500">
              Talent Portal
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <button className="text-[#09090B] border-b-2 border-[#09090B] py-6 cursor-pointer">
              Overview
            </button>
            <button className="text-gray-400 hover:text-[#09090B] transition-colors py-6 border-b-2 border-transparent cursor-pointer">
              Jobs
            </button>
            <button className="text-gray-400 hover:text-[#09090B] transition-colors py-6 border-b-2 border-transparent cursor-pointer">
              Messages
            </button>
            <button className="text-gray-400 hover:text-[#09090B] transition-colors py-6 border-b-2 border-transparent cursor-pointer">
              Assessments
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative text-gray-400 hover:text-[#09090B] transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 border-[1.5px] border-white" />
          </button>
          <Link href="/profile/edit" className="flex items-center gap-4 pl-6 border-l border-gray-200 cursor-pointer group">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#09090B] transition-colors">
              <img
                src={userData?.user?.imageUrl || "/adaobi_headshot.png"}
                alt={displayName}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <span className="text-sm font-bold text-[#09090B] hidden sm:block group-hover:text-gray-500 transition-colors">
              {displayName}
            </span>
          </Link>
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
              <div className="w-16 h-16 rounded-2xl border-2 border-white shadow-xl overflow-hidden bg-white group-hover:border-[#0055FF] transition-all duration-300 transform group-hover:scale-105">
                <img
                  src="/adaobi_headshot.png"
                  alt="Adaobi"
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 flex items-center justify-center drop-shadow-xl">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#1D9BF0] fill-current">
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-black text-[#09090B] tracking-tighter">
                  {displayName}
                </h1>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1D9BF0]/5 border border-[#1D9BF0]/10 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#1D9BF0] fill-current">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#09090B]" /> {displayLocation}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-200" />
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#09090B]" /> {displayRole}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-200" />
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#09090B]" /> {displayTrainer}
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
                  className={`text-2xl font-black tracking-tighter mb-0.5 group-hover:scale-110 transition-transform ${s.color.includes('emerald') ? 'text-emerald-500' : s.color.includes('primary') ? 'text-[#0055FF]' : 'text-[#09090B]'}`}
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
                Recommended Jobs
              </h2>
              <div className="relative group/search max-w-[200px] w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 group-focus-within/search:text-[#0055FF] transition-colors" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg pl-9 pr-4 py-2 text-[11px] font-bold outline-none focus:border-[#0055FF]/30 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="flex gap-2 px-6 py-2 overflow-x-auto shrink-0 no-scrollbar">
              {['All Matches', 'Remote', 'Enterprise', 'Startups'].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap transition-all ${
                    i === 0
                      ? 'bg-[#09090B] text-white shadow-md'
                      : 'bg-white text-gray-500 hover:text-[#09090B] border border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F9FAFB]/50 custom-scrollbar">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(item => (
                  <div
                    key={item.id}
                    className="p-4 rounded-[20px] bg-white border border-gray-100 hover:border-[#0055FF]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group flex items-center justify-between cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0055FF]/0 to-[#0055FF]/0 group-hover:from-[#0055FF]/[0.02] transition-all pointer-events-none" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-11 h-11 shrink-0 p-2 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center transition-all group-hover:bg-white group-hover:shadow-sm">
                        <img
                          src={item.logo}
                          alt={item.company}
                          className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 ${item.invertLogo ? 'invert' : ''}`}
                        />
                      </div>
                      <div>
                        <div className="font-black text-[15px] text-[#09090B] mb-0.5 tracking-tight group-hover:text-[#0055FF] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] font-bold text-gray-400 mb-2 flex items-center gap-2">
                          {item.company} <span className="w-1 h-1 rounded-full bg-gray-200" />{' '}
                          {item.salary}
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider border shadow-sm ${
                              item.status === 'New match'
                                ? 'bg-blue-50 text-[#0055FF] border-blue-100'
                                : item.status === 'High match'
                                  ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                  : 'bg-gray-50 text-gray-500 border-gray-100'
                            }`}
                          >
                            {item.status}
                          </span>
                          {item.isApplied && (
                            <span className="text-[9px] font-bold text-gray-400">Applied</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pl-4 border-l border-gray-100 h-12 relative z-10">
                      <button className="px-4 py-2 rounded-xl text-[10px] font-black bg-[#09090B] text-white shadow-xl hover:bg-[#0055FF] hover:shadow-[#0055FF]/25 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95">
                        {item.isApplied ? 'View Status' : 'Quick Apply'}
                        <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                  <Search className="w-8 h-8 mb-3 opacity-20" />
                  <p className="text-xs font-bold uppercase tracking-widest">No jobs found</p>
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
            {/* Hero Metric Slider */}
            <div className="rounded-[24px] bg-[#09090B] text-white shadow-2xl relative overflow-hidden shrink-0 min-h-[220px] flex items-center justify-center group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0055FF] rounded-full blur-[60px] opacity-40 transition-opacity duration-500 pointer-events-none" />

              <AnimatePresence mode="wait">
                {activeSlide === 0 && (
                  <motion.div
                    key="slide1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 w-full absolute inset-0 flex flex-col justify-center"
                  >
                    <div className="text-6xl font-black tracking-tighter leading-none mb-3 relative z-10">
                      8
                    </div>
                    <div className="font-bold text-lg mb-1 relative z-10 text-white">
                      Interviews Scheduled
                    </div>
                    <div className="text-xs font-medium text-gray-400 leading-relaxed relative z-10 pr-4">
                      You are in the top <strong className="text-white">5%</strong> of talent this
                      week. Keep up the momentum!
                    </div>
                  </motion.div>
                )}
                {activeSlide === 1 && (
                  <motion.div
                    key="slide2"
                    onClick={() => setIsModalOpen(true)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 w-full absolute inset-0 flex flex-col justify-center cursor-pointer group-hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 relative z-10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden shrink-0">
                      <img
                        src="https://www.google.com/s2/favicons?domain=altschoolafrica.com&sz=128"
                        alt="AltSchool"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-bold text-lg mb-1 relative z-10 text-white">
                      Trainer Recommended
                    </div>
                    <div className="text-xs font-medium text-gray-400 leading-relaxed relative z-10 pr-4">
                      You earned a badge of recommendation from{' '}
                      <strong className="text-white">AltSchool Africa</strong> trainers.
                    </div>
                  </motion.div>
                )}
                {activeSlide === 2 && (
                  <motion.div
                    key="slide3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 w-full absolute inset-0 flex flex-col justify-center"
                  >
                    <div className="text-6xl font-black tracking-tighter leading-none mb-3 relative z-10 text-emerald-400">
                      100%
                    </div>
                    <div className="font-bold text-lg mb-1 relative z-10 text-white">
                      Profile Strength
                    </div>
                    <div className="text-xs font-medium text-gray-400 leading-relaxed relative z-10 pr-4">
                      Your profile is fully optimized and ready to attract top enterprise
                      recruiters.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Simple Dots Indicator */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 z-20">
                {[0, 1, 2].map(i => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${activeSlide === i ? 'w-4 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#09090B]/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white w-full max-w-[420px] rounded-[32px] shadow-2xl overflow-hidden relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-2 text-[#09090B]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Institutional Recommendation</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center p-2 bg-white shadow-sm">
                    <img src="/altschool_logo.png" alt="AltSchool" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="flex items-center gap-5 mb-10">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-gray-50">
                      <img src="/adaobi_headshot.png" alt="Adaobi" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#09090B] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#09090B] tracking-tighter leading-none mb-1">ADAOBI EZE</h3>
                    <p className="text-[10px] font-black text-[#09090B] uppercase tracking-widest">{displayRole}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Issuing Institution</p>
                    <p className="text-sm font-bold text-[#09090B]">{displayTrainer}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Program Excellence</p>
                    <p className="text-sm font-bold text-[#09090B]">Frontend Engineering & Systems</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-[#09090B] text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-[0.98]"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
