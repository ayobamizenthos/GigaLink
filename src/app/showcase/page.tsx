'use client'
import { useState, useEffect } from 'react'
import TalentDashboard from '../dashboard/talent/page'
import PartnerDashboard from '../dashboard/partner/page'
import CompanyDashboard from '../dashboard/company/page'

export default function ShowcasePage() {
  const [view, setView] = useState('talent')

  // Mock the profile data for showcase
  const mockData = {
    user: {
      name: 'Adaobi Eze',
      imageUrl: '/adaobi_headshot.png'
    },
    profile: {
      selectedRole: 'Frontend Engineer',
      trainer: 'AltSchool Africa',
      location: 'Lagos, Nigeria'
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="fixed top-4 right-4 z-[9999] flex gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-gray-100">
        <button 
          onClick={() => setView('talent')}
          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'talent' ? 'bg-[#09090B] text-white shadow-lg' : 'hover:bg-gray-50'}`}
        >
          Talent
        </button>
        <button 
          onClick={() => setView('partner')}
          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'partner' ? 'bg-[#09090B] text-white shadow-lg' : 'hover:bg-gray-50'}`}
        >
          Partner
        </button>
        <button 
          onClick={() => setView('company')}
          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'company' ? 'bg-[#09090B] text-white shadow-lg' : 'hover:bg-gray-50'}`}
        >
          Company
        </button>
      </div>

      {view === 'talent' && <TalentDashboard />}
      {view === 'partner' && <PartnerDashboard />}
      {view === 'company' && <CompanyDashboard />}
    </div>
  )
}
