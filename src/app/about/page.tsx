import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] selection:bg-[#09090B] selection:text-white bg-noise">
      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#09090B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Platform
        </Link>
      </div>

      <main className="max-w-[800px] mx-auto px-6 py-32 md:py-48">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-tight">
          About GigaLink<span className="text-[#0055FF]">.</span>
        </h1>

        <div className="prose prose-lg prose-gray max-w-none text-gray-600 font-medium leading-relaxed">
          <p className="text-2xl text-[#09090B] font-bold mb-8">
            Every year, more than 100,000 Nigerians complete digital skills training. We are
            building the bridge that connects them to their first jobs.
          </p>

          <p className="mb-6">
            The country has built one of the most ambitious training ecosystems on the continent and
            a workforce hungry to plug into it, but the bridge between the two does not exist.
            Talent cannot land first jobs without experience. Employers cannot tell credible
            candidates apart from the noise.
          </p>

          <p className="mb-12">
            GigaLink is the platform built to close that gap. We connect newly-skilled,
            low-experienced, and intern-level digital talent with Nigerian businesses ready to hire
            them, anchored by a verification system no other platform in our market offers.
          </p>

          <h2 className="text-3xl font-black text-[#09090B] mb-6 tracking-tight">The Trust Loop</h2>

          <p className="mb-6">
            When a candidate appears on GigaLink, an employer does not just see a resume, they see
            who trained them, what they were trained in, and proof that the school stands publicly
            behind them. We call this the trust loop, and it is the structural advantage that
            separates GigaLink from every general job board.
          </p>

          <h2 className="text-3xl font-black text-[#09090B] mb-6 tracking-tight mt-12">The Team</h2>

          <p>
            GigaLink is led by Ayobami Rufai and a team of 6 founding partners. Supported by
            partnerships with BeMINT, NitHub, ZenthosLab, and 3MTT Nigeria, we are building the
            definitive trust layer for Africa's digital economy.
          </p>
        </div>
      </main>
    </div>
  )
}
