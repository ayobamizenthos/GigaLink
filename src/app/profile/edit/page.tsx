'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Save, MapPin, Briefcase, GraduationCap, Building2, User, Globe, Mail, Phone, Camera } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ProfileEdit() {
  const [formData, setFormData] = useState({
    name: 'Adaobi Eze',
    role: 'Frontend Engineer',
    trainer: 'AltSchool Africa',
    degree: 'B.Sc. Mass Communication',
    location: 'Lagos, Nigeria',
    experience: '1 Year',
    email: 'adaobi.eze@example.com',
    bio: 'I am a product-focused engineer driven by the challenge of turning complex Nigerian business workflows into intuitive, high-performance digital experiences.'
  })

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans selection:bg-[#09090B] selection:text-white">
      {/* Simple Header */}
      <nav className="h-20 border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-8">
        <div className="flex items-center gap-6">
          <Link href="/dashboard/talent" className="p-2 hover:bg-gray-100 rounded-full transition-all group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-[#09090B]" />
          </Link>
          <h1 className="text-xl font-black tracking-tighter uppercase">Edit Profile</h1>
        </div>
        <button className="bg-[#09090B] hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-black transition-all shadow-xl flex items-center gap-2 active:scale-95">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </nav>

      <main className="max-w-4xl mx-auto p-8 md:p-12">
        <div className="bg-white rounded-[40px] border border-gray-200 shadow-sm overflow-hidden">
          {/* Cover / Profile Header */}
          <div className="h-32 bg-gray-50 border-b border-gray-100 relative">
             <div className="absolute -bottom-12 left-10">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
                    <img src="/adaobi_headshot.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute inset-0 bg-[#09090B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-3xl backdrop-blur-[2px]">
                    <Camera className="w-6 h-6 text-white" />
                  </button>
                </div>
             </div>
          </div>

          <div className="pt-20 px-10 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Basic Info */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Basic Identity</h3>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-[#09090B]/60 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-bold outline-none focus:bg-white focus:border-[#09090B]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-[#09090B]/60 ml-1">Professional Role</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-bold outline-none focus:bg-white focus:border-[#09090B]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option>Frontend Engineer</option>
                      <option>Virtual Assistant</option>
                      <option>Digital Marketer</option>
                      <option>AI Trainer</option>
                      <option>Data Analyst</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-[#09090B]/60 ml-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-bold outline-none focus:bg-white focus:border-[#09090B]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Education & Verification */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Education & Verification</h3>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-[#09090B]/60 ml-1">Verified Trainer</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select 
                      value={formData.trainer}
                      onChange={(e) => setFormData({...formData, trainer: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-bold outline-none focus:bg-white focus:border-[#09090B]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option>AltSchool Africa</option>
                      <option>BeMINT Academy</option>
                      <option>NitHub</option>
                      <option>ALX Africa</option>
                      <option>3MTT Nigeria</option>
                      <option>ZenthosLab</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-[#09090B]/60 ml-1">Undergraduate Degree (Optional)</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. B.Sc. Mass Communication"
                      value={formData.degree}
                      onChange={(e) => setFormData({...formData, degree: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-bold outline-none focus:bg-white focus:border-[#09090B]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-[#09090B]/60 ml-1">Contact Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-bold outline-none focus:bg-white focus:border-[#09090B]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Bio / About */}
              <div className="md:col-span-2 space-y-2 pt-4">
                <label className="text-[11px] font-black uppercase tracking-wider text-[#09090B]/60 ml-1">Professional Bio</label>
                <textarea 
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-100 rounded-3xl px-6 py-4 text-sm font-medium outline-none focus:bg-white focus:border-[#09090B]/20 transition-all leading-relaxed resize-none"
                />
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3 text-gray-400">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Public profile: gigalink.io/adaobi-eze</span>
              </div>
              <button className="text-red-500 text-xs font-black uppercase tracking-widest hover:text-red-600 transition-all">
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
