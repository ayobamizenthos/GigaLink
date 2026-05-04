import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white selection:bg-white selection:text-[#09090B] bg-noise">
      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Platform
        </Link>
      </div>

      <main className="max-w-[1440px] mx-auto px-6 py-32 md:py-48 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-green-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />

        <div className="mb-32">
          <h1 className="font-display font-black text-6xl md:text-[120px] tracking-tighter leading-[0.9] mb-12 uppercase">
            Build The <br /> Bridge.
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-gray-400 max-w-3xl leading-relaxed">
            We are looking for exceptional engineers, operators, and designers to help us build the
            definitive trust layer for Africa's digital economy.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
            <h2 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-white/50">
              OPEN POSITIONS
            </h2>
            <div className="px-3 py-1 border border-green-500/30 bg-green-500/10 text-green-500 text-[10px] font-mono tracking-widest uppercase rounded">
              2 OPENINGS
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 rounded-[32px] overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative z-10 mb-6 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 group-hover:text-green-400 transition-colors">
                  Frontend Engineer
                </h3>
                <p className="text-sm font-mono tracking-widest uppercase text-white/50">
                  LAGOS / REMOTE • FULL TIME
                </p>
              </div>
              <div className="relative z-10 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </Link>

            <Link
              href="#"
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 rounded-[32px] overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative z-10 mb-6 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                  Partnerships Manager
                </h3>
                <p className="text-sm font-mono tracking-widest uppercase text-white/50">
                  LAGOS • FULL TIME
                </p>
              </div>
              <div className="relative z-10 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
