'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, ChevronLeft, CheckCircle2, Building2, Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Onboarding() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    role: '',
    trainer: '',
    degree: '',
    location: '',
    bio: ''
  })

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const handleComplete = async () => {
    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        window.location.href = '/dashboard/talent'
      }
    } catch (error) {
      console.error('Onboarding failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans selection:bg-[#09090B] selection:text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-[440px] w-full">
        {/* Progress Indicator */}
        <div className="flex gap-2 mb-8 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-500 ${i <= step ? 'w-10 bg-[#09090B]' : 'w-3 bg-gray-200'}`} 
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="text-2xl font-black tracking-tighter uppercase mb-2">Define Your Role</h1>
                <p className="text-gray-500 font-bold text-[13px]">Select the professional path you are embarking on.</p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {[
                  'Frontend Engineer', 
                  'Virtual Assistant', 
                  'Digital Marketer', 
                  'AI Trainer', 
                  'Data Analyst',
                  'Product Management',
                  'Social Media Marketing',
                  'Project Management',
                  'Content Writing',
                  'Video Editing',
                  'Logo Design'
                ].map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setFormData({...formData, role: r})
                      nextStep()
                    }}
                    className={`flex items-center justify-between px-6 py-4 rounded-xl border transition-all group ${formData.role === r ? 'border-[#09090B] bg-[#09090B] text-white shadow-xl' : 'border-gray-100 hover:border-gray-300 bg-white'}`}
                  >
                    <span className="font-bold text-xs uppercase tracking-widest">{r}</span>
                    <ChevronRight className={`w-4 h-4 transition-all ${formData.role === r ? 'text-white translate-x-1' : 'text-gray-300'}`} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="text-2xl font-black tracking-tighter uppercase mb-2">Your Trainer</h1>
                <p className="text-gray-500 font-bold text-[13px]">Select the institution that verified your core skills.</p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {['AltSchool Africa', 'BeMINT Academy', 'NitHub', 'ALX Africa', '3MTT Nigeria'].map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setFormData({...formData, trainer: t})
                      nextStep()
                    }}
                    className={`flex items-center justify-between px-6 py-4 rounded-xl border transition-all group ${formData.trainer === t ? 'border-[#09090B] bg-[#09090B] text-white shadow-xl' : 'border-gray-100 hover:border-gray-300 bg-white'}`}
                  >
                    <span className="font-bold text-xs uppercase tracking-widest">{t}</span>
                    <CheckCircle2 className={`w-4 h-4 transition-all ${formData.trainer === t ? 'text-white scale-110' : 'text-gray-200'}`} />
                  </button>
                ))}
              </div>

              <button onClick={prevStep} className="w-full text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#09090B] transition-all">
                Go Back
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="text-4xl font-black tracking-tighter uppercase mb-3">Background</h1>
                <p className="text-gray-500 font-bold text-sm">Help employers understand your academic journey.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Undergraduate Degree (Optional)</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. B.Sc. Computer Science"
                      value={formData.degree}
                      onChange={(e) => setFormData({...formData, degree: e.target.value})}
                      className="w-full bg-white border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm font-bold outline-none focus:border-[#09090B]/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">Current Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. Lagos, Nigeria"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full bg-white border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm font-bold outline-none focus:border-[#09090B]/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  disabled={!formData.location}
                  className="w-full bg-[#09090B] text-white py-4 rounded-xl text-sm font-black uppercase tracking-widest shadow-xl hover:bg-gray-800 transition-all active:scale-95 disabled:opacity-50"
                >
                  Continue
                </button>
              </div>

              <button onClick={prevStep} className="w-full text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#09090B] transition-all">
                Go Back
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8 text-center"
            >
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-[24px] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div>
                <h1 className="text-4xl font-black tracking-tighter uppercase mb-3">You're Ready</h1>
                <p className="text-gray-500 font-bold text-sm leading-relaxed">
                  Your profile has been created with institutional verification. You are now visible to global hirers.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-[24px] p-6 text-left shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#09090B]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Verified By</div>
                    <div className="text-sm font-black uppercase tracking-tighter">{formData.trainer}</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-gray-500">
                  Profile Status: <span className="text-emerald-500">Active & Verified</span>
                </div>
              </div>

              <button 
                onClick={handleComplete}
                className="w-full bg-[#09090B] text-white py-5 rounded-xl text-sm font-black uppercase tracking-widest shadow-2xl hover:bg-gray-800 transition-all active:scale-95"
              >
                Access My Profile
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
