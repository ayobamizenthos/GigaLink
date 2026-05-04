import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
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
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-16 border-b border-gray-100 pb-8">
          Last Updated: April 2026
        </p>

        <div className="space-y-12 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4">1. Introduction</h2>
            <p>
              GigaLink operates in strict compliance with the Nigeria Data Protection Regulation
              (NDPR) 2019. This policy explains how we collect, use, and protect your data across
              our talent, enterprise, and training partner ecosystems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4">2. Data Collection</h2>
            <p className="mb-2">We collect information that you provide directly to us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Talent:</strong> Resumes, portfolios, GitHub commits, training certificates,
                and verification requests.
              </li>
              <li>
                <strong>Companies:</strong> Business registration details, job post contents, and
                hiring history.
              </li>
              <li>
                <strong>Partners:</strong> Official CAC documentation, admin user details, and
                alumni lists for endorsement.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4">3. Data Usage</h2>
            <p>
              Your data is used strictly to facilitate the "Trust Loop." Talent profiles are visible
              to verified enterprise users. Endorsement data is securely shared between the training
              institution and the talent profile. We do not sell user data to third-party brokers
              under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4">4. Data Protection Officer</h2>
            <p>
              For any inquiries regarding your data, or to request data deletion, please contact our
              Data Protection Officer at privacy@gigalink.ng.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
