'use client'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  MapPin,
  Briefcase,
  ChevronRight,
  FileText,
  ExternalLink,
  Hexagon,
  ShieldCheck,
  Download,
  GraduationCap,
  Code2,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
export default function TalentProfile() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#09090B] selection:bg-[#0055FF] selection:text-white overflow-x-hidden">
      <nav className="h-[72px] border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-display font-black text-2xl tracking-tighter">
              GigaLink<span className="text-[#0055FF]">.</span>
            </Link>
            <span className="ml-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-500">Public Profile</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <button className="text-[#09090B] border-b-2 border-[#09090B] py-6 cursor-pointer">Profile</button>
            <button className="text-gray-400 hover:text-[#09090B] transition-colors py-6 border-b-2 border-transparent cursor-pointer">Portfolio</button>
            <button className="text-gray-400 hover:text-[#09090B] transition-colors py-6 border-b-2 border-transparent cursor-pointer">Recommendations</button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="px-5 py-2 rounded-xl text-xs font-black bg-[#0055FF] text-white shadow-lg hover:bg-blue-600 transition-all active:scale-95">
            Hire Adaobi
          </button>
        </div>
      </nav>
      <main className="flex-1 max-w-[1440px] w-full mx-auto p-6 flex flex-col h-[calc(100vh-72px)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 flex flex-col gap-6 min-h-0"
          >
          <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#0055FF] rounded-full blur-[100px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
              <div className="relative shrink-0">
                <div className="w-[140px] h-[140px] rounded-[32px] border-4 border-white shadow-2xl overflow-hidden bg-gray-50">
                  <Image src="/adaobi_eze.png" alt="Adaobi Eze" width={140} height={140} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-9 h-9 flex items-center justify-center drop-shadow-xl">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-[#1D9BF0] fill-current">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#09090B] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for hire
                  </span>
                  <div className="h-3 w-px bg-gray-200 mx-1" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Verified by AltSchool</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-4xl font-black text-[#09090B] tracking-tighter">Adaobi Eze</h1>
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#1D9BF0] fill-current">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-500 mb-6 tracking-tight">Frontend Engineer</h2>
                <div className="flex items-center gap-6 text-sm font-bold text-gray-400 mb-8">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#0055FF]" /> Lagos, Nigeria</span>
                  <span className="flex items-center gap-2 text-[#09090B]"><Briefcase className="w-4 h-4 text-[#0055FF]" /> 1 Year Experience</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#09090B] hover:bg-gray-800 text-white px-8 py-3 rounded-xl text-sm font-black transition-all shadow-xl hover:-translate-y-0.5 active:scale-95">Send Job Offer</button>
                  <button className="bg-white hover:bg-gray-50 text-[#09090B] px-8 py-3 rounded-xl text-sm font-black border border-gray-200 transition-all flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95">
                    <Download className="w-4 h-4" />
                    Resume.pdf
                  </button>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-10 pt-8 border-t border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Core Philosophy</h3>
              <p className="text-base text-[#09090B]/80 leading-relaxed max-w-3xl font-medium">
                "I am a product-focused engineer driven by the challenge of turning complex Nigerian business workflows into intuitive, high-performance digital experiences. My training at AltSchool Africa focused heavily on scalable backend architecture and high-fidelity frontend systems. I build for scale, speed, and cultural relevance."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Technical Stack</h3>
              <div className="flex flex-col gap-6">
                {[
                  { name: "React & Next.js", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 95 },
                  { name: "Framer Motion", level: 85 },
                  { name: "State Management", level: 80 }
                ].map((skill) => (
                   <div key={skill.name}>
                    <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-wider">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-[#09090B] rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm flex flex-col min-h-0">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Educational History</h3>
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                <div className="flex flex-col gap-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl border-2 border-gray-50 bg-white flex items-center justify-center shrink-0 overflow-hidden p-1 shadow-sm group-hover:border-[#0055FF] transition-colors relative">
                      <Image src="/altschool_logo.png" alt="AltSchool" width={40} height={40} className="object-contain" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center drop-shadow-md">
                        <svg viewBox="0 0 24 24" className="w-full h-full text-[#71767B] fill-current">
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-black text-[#09090B] tracking-tight">AltSchool Africa</div>
                      <div className="text-xs font-bold text-[#09090B] mb-1 uppercase tracking-tighter">Software Engineering (Frontend)</div>
                      <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Graduated May 2025 · Verified</div>
                    </div>
                  </div>
                  <div className="flex gap-5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                    <div className="w-12 h-12 rounded-2xl border-2 border-gray-50 bg-gray-50 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-base font-black text-[#09090B] tracking-tight">University of Lagos</div>
                      <div className="text-xs font-bold text-gray-400 mb-1">B.Sc. Mass Communication</div>
                      <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">2018 — 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6 min-h-0 flex-1"
        >
          <div className="bg-[#09090B] rounded-[32px] p-1 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0055FF] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="p-6 pb-2 relative z-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Project</h3>
            </div>
            <div className="p-3 relative z-10">
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] border border-white/5">
                <Image src="/konga_ui.png" alt="Merchant Dashboard Interface" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#09090B] text-white">Frontend Development</span>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">Merchant Order Tracking</h4>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">Developed a responsive, high-performance dashboard for tracking marketplace orders and inventory. Built with Next.js and Tailwind CSS.</p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-3 relative z-10 border-t border-white/5 mt-2">
              <button className="w-full py-3 flex items-center justify-center gap-3 text-xs font-black text-white hover:text-[#0055FF] transition-all uppercase tracking-widest active:scale-95">
                Explore Repository <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
        </div>
      </main>
    </div>
  )
}
