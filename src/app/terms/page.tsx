import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#09090B] selection:bg-[#09090B] selection:text-white">
      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#09090B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </div>

      <main className="max-w-[800px] mx-auto px-6 py-32 md:py-40">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Terms of Service</h1>
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-16 border-b border-gray-100 pb-8">
          Last Updated: April 2026
        </p>

        <div className="space-y-12 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the GigaLink platform (web or mobile), you agree to be bound by
              these Terms of Service. If you are accepting on behalf of a company or training
              institution, you represent that you have the authority to bind that entity to these
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4">
              2. The "Trust Loop" Enforcement
            </h2>
            <p className="mb-2">
              GigaLink operates on the principle of verified credentials. By participating in this
              platform:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Training Partners</strong> agree that any endorsement issued on the platform
                is true and verifiable against their internal records.
              </li>
              <li>
                <strong>Talents</strong> agree that any portfolio links or project claims are their
                original work.
              </li>
              <li>
                <strong>Companies</strong> agree to utilize the platform's hiring tools and not
                attempt to bypass the platform fee structure for any talent discovered via GigaLink.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4">3. Fees & Commissions</h2>
            <p>
              Talent profiles are perpetually free. Companies agree to the fee structure outlined in
              our pricing model (e.g., job postings, featured placements). Upon successfully hiring
              a candidate discovered on GigaLink, the company is obligated to pay the successful
              hire commission (5% of first-month salary for full-time, 3% for contract roles).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4">4. Platform Integrity</h2>
            <p>
              Any attempt to falsify endorsements, bypass hire commissions, or engage in
              discriminatory hiring practices will result in immediate termination of platform
              access and potential legal action under Nigerian law.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
