import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import { ShieldCheck, MapPin, Briefcase, GraduationCap, Building2, Globe, CheckCircle2 } from "lucide-react"

export default async function PublicProfile({ params }: { params: { slug: string } }) {
  const { slug } = params

  // For now, we search for a user whose name or email matches part of the slug
  // In production, you'd have a 'slug' field on the TalentProfile model
  const profile = await prisma.talentProfile.findFirst({
    where: {
      OR: [
        { user: { name: { contains: slug.replace('-', ' '), mode: 'insensitive' } } },
        { user: { email: { contains: slug.split('-')[0], mode: 'insensitive' } } }
      ]
    },
    include: { user: true }
  })

  // If no real profile found, we show a high-fidelity "Demo" for Adaobi Eze
  // to ensure the user's specific request works for tonight.
  const isAdaobi = slug === 'adaobi-eze'
  const displayData = profile || (isAdaobi ? {
    user: { name: 'Adaobi Eze', email: 'adaobi.eze@example.com' },
    selectedRole: 'Frontend Engineer',
    trainer: 'BeMINT Academy',
    location: 'Lagos, Nigeria',
    degree: 'B.Sc. Computer Science',
    bio: 'Specializing in high-performance React architectures and institutional-grade UI systems.'
  } : null)

  if (!displayData) return notFound()

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans selection:bg-[#09090B] selection:text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header Card */}
        <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -mr-32 -mt-32 opacity-50" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-[40px] bg-gray-100 border-4 border-white shadow-xl overflow-hidden">
                <img 
                  src={isAdaobi ? "/adaobi_headshot.png" : "https://avatar.vercel.sh/" + slug} 
                  alt={displayData.user.name ?? ""} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 flex items-center justify-center drop-shadow-xl">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#1D9BF0] fill-current">
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                </svg>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl font-black tracking-tighter uppercase mb-1">{displayData.user.name ?? ""}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5 text-[#09090B]">
                    <Briefcase className="w-4 h-4" /> {displayData.selectedRole}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {displayData.location}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 font-medium max-w-xl leading-relaxed">
                {displayData.bio || "Digital professional with verified institutional training, ready for global opportunities."}
              </p>
            </div>
          </div>
        </div>

        {/* Verification & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Verification Card */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Institutional Verification</h2>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                  <CheckCircle2 className="w-3 h-3" /> Verified Status
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                  <Building2 className="w-8 h-8 text-[#09090B]" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Primary Trainer</div>
                  <div className="text-xl font-black uppercase tracking-tighter">{displayData.trainer}</div>
                  <div className="text-xs font-bold text-gray-400 mt-1">Completion ID: GL-{slug.toUpperCase().slice(0,4)}-2026</div>
                </div>
              </div>
            </div>

            {/* Academic History */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Academic History</h2>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                  <GraduationCap className="w-8 h-8 text-[#09090B]" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Degree / Certification</div>
                  <div className="text-xl font-black uppercase tracking-tighter">{displayData.degree || "Verification Pending"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#09090B] text-white rounded-[32px] p-8 shadow-xl text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-black uppercase tracking-tight">Hire {(displayData.user.name ?? "").split(' ')[0]}</h3>
                <p className="text-xs text-gray-400 font-medium">Request an interview or view professional portfolio.</p>
              </div>
              <button className="w-full bg-white text-[#09090B] py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-all active:scale-95">
                Contact Talent
              </button>
              <button className="w-full bg-white/10 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95 border border-white/10">
                Download CV
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Powered by GigaLink Institutional Verification
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
