'use client'
import Link from 'next/link'
import { Hexagon, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans text-[#09090B] selection:bg-[#09090B] selection:text-white">
      {/* Navbar */}
      <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Hexagon className="w-8 h-8 text-[#0055FF] fill-[#0055FF]/20" />
          <span className="font-display font-black text-2xl tracking-tighter">
            GigaLink<span className="text-[#0055FF]">.</span>
          </span>
        </Link>
        <Link
          href="/login"
          className="hidden md:flex items-center justify-center h-12 px-8 rounded-full bg-[#09090B] text-white font-bold hover:bg-gray-800 transition-colors shadow-sm"
        >
          Return to Platform
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-6">
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              Let's talk about the future<span className="text-[#0055FF]">.</span>
            </h1>
            <p className="text-gray-500 font-medium text-lg mb-12">
              Whether you're looking to hire top-tier talent, partner with us to train the next
              generation, or have a general inquiry, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Mail className="w-6 h-6 text-[#0055FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Us</h3>
                  <p className="text-gray-500 font-medium">ayobamizenthos@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-500 font-medium">
                    Lagos, Nigeria
                    <br />
                    Remote-First Operations
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Call Us</h3>
                  <p className="text-gray-500 font-medium">+234 (0) 800 GIGALINK</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-black mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 font-medium focus:outline-none focus:border-[#09090B] focus:bg-white transition-all"
                  placeholder="Adaobi Eze"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 font-medium focus:outline-none focus:border-[#09090B] focus:bg-white transition-all"
                  placeholder="ayobamizenthos@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Inquiry Type</label>
                <select className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 font-medium focus:outline-none focus:border-[#09090B] focus:bg-white transition-all appearance-none">
                  <option>I want to hire talent</option>
                  <option>I want to become a training partner</option>
                  <option>I am a talent looking for support</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full h-32 bg-gray-50 border border-gray-200 rounded-xl p-4 font-medium focus:outline-none focus:border-[#09090B] focus:bg-white transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full h-14 bg-[#09090B] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-sm"
              >
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6 text-center shrink-0">
        <p className="text-gray-500 font-bold text-sm">© 2026 GigaLink. All rights reserved.</p>
      </footer>
    </div>
  )
}
