'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Zap,
  Globe,
  Code2,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const TypewriterText = () => {
  const words = ['Developers', 'Designers', 'Data Analysts', 'Innovators']
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[index]
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setIndex((index + 1) % words.length)
          }
        } else {
          setText(currentWord.substring(0, text.length + 1))
          if (text.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        }
      },
      isDeleting ? 50 : 150
    )
    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return (
    <span className="inline-block min-w-[280px] text-[#0055FF]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
const TalentCarousel = () => {
  const talents = [
    {
      name: 'Ayobami Rufai',
      role: 'Software Developer',
      img: '/zenthos.png',
      verified: true,
      school: 'ZenthosLab',
    },
    {
      name: 'David O.',
      role: 'Backend Developer',
      img: '/nigerian_dev_1.png',
      verified: true,
      school: 'ALX Africa',
    },
    {
      name: 'Sarah M.',
      role: 'UI/UX Designer',
      img: '/nigerian_dev_2.png',
      verified: true,
      school: '3MTT Nigeria',
    },
    {
      name: 'Emmanuel U.',
      role: 'Data Analyst',
      img: '/nigerian_dev_3.png',
      verified: true,
      school: 'BeMINT',
    },
    {
      name: 'Chioma E.',
      role: 'Virtual Assistant',
      img: '/nigerian_va_talent_1.png',
      verified: true,
      school: 'AltSchool',
    },
    {
      name: 'Faith A.',
      role: 'AI Trainer',
      img: '/nigerian_dev_2.png',
      verified: true,
      school: 'NitHub',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % talents.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [talents.length])

  const getPosition = (index: number) => {
    const total = talents.length
    let diff = (index - activeIndex + total) % total
    
    // Normalize diff to be between -floor(total/2) and floor(total/2)
    if (diff > Math.floor(total / 2)) diff -= total
    
    if (diff === 0) return { x: '0%', scale: 1.1, zIndex: 40, opacity: 1, filter: 'brightness(1)' }
    if (diff === 1) return { x: '75%', scale: 0.9, zIndex: 30, opacity: 0.8, filter: 'brightness(0.6)' }
    if (diff === -1) return { x: '-75%', scale: 0.9, zIndex: 30, opacity: 0.8, filter: 'brightness(0.6)' }
    if (diff === 2) return { x: '140%', scale: 0.7, zIndex: 20, opacity: 0.4, filter: 'brightness(0.3)' }
    if (diff === -2) return { x: '-140%', scale: 0.7, zIndex: 20, opacity: 0.4, filter: 'brightness(0.3)' }
    
    return { x: diff > 0 ? '200%' : '-200%', scale: 0.5, zIndex: 10, opacity: 0, filter: 'brightness(0)' }
  }

  return (
    <div className="w-full lg:w-[600px] h-[300px] md:h-[400px] relative flex justify-center items-center">
      <AnimatePresence>
        {talents.map((talent, index) => {
          const pos = getPosition(index)
          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                x: pos.x,
                scale: pos.scale,
                zIndex: pos.zIndex,
                opacity: pos.opacity,
                filter: pos.filter,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[140px] h-[210px] md:w-[180px] md:h-[250px] bg-[#09090B] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10"
            >
              <img src={talent.img} className="w-full h-full object-cover" alt={talent.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-5">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-white font-black text-xs md:text-sm">{talent.name}</p>
                  {talent.verified && (
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#1D9BF0] fill-current">
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                    </svg>
                  )}
                </div>
                {talent.verified && (
                  <p className="text-emerald-400 text-[8px] font-black uppercase tracking-[0.2em] mb-1">
                    Verified by {talent.school}
                  </p>
                )}
                <p className="text-gray-300 text-[10px] font-medium">{talent.role}</p>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

const PopularServices = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const services = [
    { title: 'Virtual Assistant', img: '/mobile_app_skill.png' },
    { title: 'Digital Marketer', img: '/ui_ux_skill.png' },
    { title: 'AI Trainer', img: '/data_science_skill.png' },
    { title: 'Data Analyst', img: '/frontend_skill.png' },
    {
      title: 'Product Management',
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop',
    },
    {
      title: 'Social Media Marketing',
      img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop',
    },
    {
      title: 'Project Management',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
    },
    {
      title: 'Data Analysis',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    },
    {
      title: 'Content Writing',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop',
    },
    {
      title: 'Video Editing',
      img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop',
    },
    {
      title: 'Logo Design',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    },
  ]

  const getPosition = (index: number) => {
    const total = services.length
    let diff = index - activeIndex
    if (diff > Math.floor(total / 2)) diff -= total
    if (diff < -Math.floor(total / 2)) diff += total

    if (diff === 0)
      return { x: '0%', scale: 1, zIndex: 30, opacity: 1, filter: 'brightness(1)', rotateY: 0 }
    if (diff === 1)
      return {
        x: '60%',
        scale: 0.85,
        zIndex: 20,
        opacity: 0.8,
        filter: 'brightness(0.5)',
        rotateY: -15,
      }
    if (diff === -1)
      return {
        x: '-60%',
        scale: 0.85,
        zIndex: 20,
        opacity: 0.8,
        filter: 'brightness(0.5)',
        rotateY: 15,
      }
    if (diff === 2)
      return {
        x: '110%',
        scale: 0.7,
        zIndex: 10,
        opacity: 0.4,
        filter: 'brightness(0.3)',
        rotateY: -25,
      }
    if (diff === -2)
      return {
        x: '-110%',
        scale: 0.7,
        zIndex: 10,
        opacity: 0.4,
        filter: 'brightness(0.3)',
        rotateY: 25,
      }

    return {
      x: diff > 0 ? '200%' : '-200%',
      scale: 0.5,
      zIndex: 0,
      opacity: 0,
      filter: 'brightness(0)',
      rotateY: 0,
    }
  }

  const nextSlide = () => setActiveIndex(prev => (prev + 1) % services.length)
  const prevSlide = () => setActiveIndex(prev => (prev - 1 + services.length) % services.length)

  const lastScrollTime = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastScrollTime.current < 600) return

      // Only respond to horizontal swipes (deltaX) to prevent cards from moving
      // during normal vertical page scrolling.
      if (Math.abs(e.deltaX) > 5 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX > 0) nextSlide()
        else prevSlide()
        lastScrollTime.current = now
      }
    }

    el.addEventListener('wheel', handleWheel, { passive: true })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [activeIndex])

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 max-w-[1440px] mx-auto overflow-hidden relative group"
    >
      <div className="flex items-center justify-between mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-[#09090B] tracking-tighter">
          Popular Skills<span className="text-[#0055FF]">.</span>
        </h2>
        <div className="hidden md:flex gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#09090B] flex items-center justify-center hover:bg-[#0055FF] transition-all shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#09090B] flex items-center justify-center hover:bg-[#0055FF] transition-all shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="relative h-[320px] md:h-[400px] w-full flex items-center justify-center perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          {services.map((service, index) => {
            const pos = getPosition(index)
            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x: pos.x,
                  scale: pos.scale,
                  zIndex: pos.zIndex,
                  opacity: pos.opacity,
                  filter: pos.filter,
                  rotateY: pos.rotateY,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[240px] md:w-[280px] h-[320px] md:h-[380px] rounded-[24px] overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing bg-[#09090B]"
                onClick={() => setActiveIndex(index)}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 50) prevSlide()
                  else if (info.offset.x < -50) nextSlide()
                }}
              >
                <img
                  src={service.img}
                  className="w-full h-full object-cover pointer-events-none"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent pointer-events-none"></div>
                <h3 className="absolute bottom-8 left-8 right-8 text-white font-bold text-xl md:text-2xl leading-tight pointer-events-none">
                  {service.title}
                </h3>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const partners = [
    { name: '3MTT Nigeria', type: 'text' },
    { name: 'ZenthosLab', type: 'text' },
    { name: 'NitHub', type: 'text' },
    { name: 'BeMINT', type: 'text' },
    { name: 'ALTSCHOOL', type: 'text' },
    { name: 'SIEMENS', type: 'text' },
    { name: 'BMZ', type: 'text' },
    { name: '3MTT Nigeria', type: 'text' },
    { name: 'ZenthosLab', type: 'text' },
    { name: 'NitHub', type: 'text' },
    { name: 'BeMINT', type: 'text' },
    { name: 'ALTSCHOOL', type: 'text' },
    { name: 'SIEMENS', type: 'text' },
    { name: 'BMZ', type: 'text' },
  ]

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#09090B] font-sans selection:bg-[#09090B] selection:text-white bg-noise overflow-x-hidden">
      {/* Ultra Minimalist Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-2xl border-b border-gray-200/50"
      >
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="font-display font-extrabold text-2xl tracking-tighter">
              GigaLink<span className="text-[#0055FF]">.</span>
            </span>
            <div className="hidden md:flex gap-8">
              {['Platform', 'Enterprise', 'Universities', 'Pricing'].map(item => (
                <a
                  key={item}
                  href="#"
                  className="text-[14px] font-semibold text-gray-500 hover:text-[#09090B] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
                <Link
                  href="/sign-in"
                  className="px-8 py-3 rounded-xl font-bold text-sm text-[#09090B] hover:text-[#0055FF] transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest text-black bg-white hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                >
                  Get Started
                </Link>
          </div>
        </div>
      </motion.nav>

      <main>
        {/* God Mode Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-20 px-6 min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-emerald-100/40 blur-[100px] rounded-[100%] pointer-events-none -z-10" />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-5xl mx-auto text-center relative z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[72px] leading-[0.95] font-extrabold tracking-tighter mb-6 text-gradient"
            >
              Hire Africa's top <br className="hidden md:block" />
              <TypewriterText />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-gray-500 font-medium mb-10 max-w-xl mx-auto leading-relaxed"
            >
              The platform connecting verified tech talent with forward thinking employers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
            >
              <div className="relative w-full sm:w-[400px]">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking to build?"
                  className="w-full h-[60px] pl-14 pr-6 rounded-full bg-white border border-gray-200 shadow-sm focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] outline-none font-medium text-base transition-all"
                />
              </div>
              <Link href="/dashboard/company" className="w-full sm:w-auto">
                <button className="h-[60px] px-8 bg-[#09090B] hover:bg-gray-800 text-white rounded-full font-bold text-base transition-all shadow-elite hover:shadow-hover whitespace-nowrap w-full">
                  Explore Talent
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Immersive Scroll Reveal Mockup - Nigerian/African Tech Team */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mx-auto mt-20 relative px-4"
          >
            <div className="rounded-[40px] border border-gray-200/60 bg-white/50 backdrop-blur-3xl p-3 shadow-2xl relative z-20">
              <img
                src="/adaobi_hero_hq.png"
                alt="Adaobi Eze - Frontend Engineer"
                className="w-full h-[350px] md:h-[600px] object-cover rounded-[32px] transition-all duration-1000"
              />

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -left-2 md:-left-12 top-10 md:top-20 bg-white rounded-[24px] p-3.5 shadow-elite border border-gray-100 flex items-center gap-3 z-30"
              >
                <div className="w-10 h-10 flex items-center justify-center drop-shadow-md">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-[#1D9BF0] fill-current">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                  </svg>
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-0.5">Verified by BeMINT</p>
                  <p className="text-lg font-black text-[#09090B] tracking-tight">Frontend Engineer</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -right-2 md:-right-12 bottom-10 md:bottom-20 bg-[#09090B] text-white rounded-3xl p-5 shadow-elite border border-gray-800 flex items-center gap-4 z-30"
              >
                <img
                  src="/adaobi_eze.png"
                  alt="Adaobi Eze"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                />
                <div className="hidden sm:block">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-sm font-bold">Adaobi Eze</p>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#1D9BF0] fill-current">
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.98-.2-4.02.81s-1.27 2.62-.81 4.01c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.98.81 4.02s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.98.2 4.02-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z"></path>
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-gray-400">Hired by Siemens</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Global Partners Marquee (Moving) */}
        <section className="py-20 bg-white border-y border-gray-100 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 text-center">
              Powering the digital economy alongside
            </p>
          </div>

          <div className="flex whitespace-nowrap overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
              className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  {partner.name === 'BeMINT' ? (
                    <span className="font-display text-3xl font-extrabold flex items-center gap-2 tracking-tight text-[#09090B]">
                      <Globe className="w-8 h-8" /> BeMINT
                    </span>
                  ) : partner.name === '3MTT Nigeria' ? (
                    <span className="font-display text-3xl font-black tracking-tighter text-[#0A7A43]">
                      3MTT Nigeria
                    </span>
                  ) : partner.name === 'ZenthosLab' ? (
                    <span className="font-display text-3xl font-black tracking-tighter text-[#0055FF]">
                      ZenthosLab
                    </span>
                  ) : partner.name === 'NitHub' ? (
                    <span className="font-display text-3xl font-extrabold tracking-tight text-[#8A1538]">
                      NitHub
                    </span>
                  ) : (
                    <span className="font-display text-3xl font-black tracking-tighter text-[#09090B]">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Verified Talent Era Section (Fiverr-style Carousel) */}
        <section className="py-20 px-6 max-w-[1440px] mx-auto">
          <div className="bg-[#09090B] rounded-[40px] w-full overflow-hidden relative flex flex-col xl:flex-row items-center p-8 md:p-14 shadow-elite border border-gray-800 gap-12">
            {/* Left Content */}
            <div className="w-full xl:w-1/2 z-20 flex flex-col items-start text-left">
              <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                The Verified Talent era has arrived<span className="text-[#0055FF]">.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 font-normal mb-10 max-w-lg leading-relaxed">
                From training to final hire, work with the most highly skilled and verified
                professionals in Africa to build products that drive real impact.
              </p>
              <Link href="/dashboard/company">
                <button className="bg-white text-[#09090B] px-8 py-3.5 rounded-full text-base font-bold hover:bg-gray-100 transition-colors shadow-elite flex items-center gap-2">
                  Find Verified Talent <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* Right Carousel */}
            <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
              <TalentCarousel />
            </div>
          </div>
        </section>

        {/* Popular Skills Section */}
        <PopularServices />

        {/* Comprehensive Asymmetrical Elite Grid */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-12 max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-[#09090B] leading-[1.1]">
              One platform.
              <br />
              Four ecosystems.
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              We connect training centers, universities, talents, and global enterprises in one
              seamless platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-[auto]">
            {/* Box 1: Companies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 rounded-[32px] bg-[#09090B] p-8 md:p-10 relative overflow-hidden group border border-gray-800 shadow-elite min-h-[280px]"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md mb-6">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">For Companies</h3>
                  <p className="text-base text-gray-400 max-w-md font-medium leading-relaxed">
                    Access a verified pool of digital talent ready to work. No recruiters. No
                    delays.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Talents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 rounded-[32px] bg-blue-50 p-8 md:p-10 relative overflow-hidden group border border-blue-100 min-h-[280px]"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Code2 className="w-3.5 h-3.5 text-[#0055FF]" /> Frontend Engineer
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#09090B] mb-2">For Talents</h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                    Your skills are verified. Get hired based on your actual work.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 3: Training Centers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 rounded-[32px] bg-white border border-gray-200 p-8 md:p-10 relative overflow-hidden shadow-sm min-h-[280px]"
            >
              <div className="h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                  <Zap className="w-6 h-6 text-[#09090B]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#09090B] mb-2">
                    Training Partners
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                    Endorse your students and track their success rates in real-time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 4: Universities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-8 rounded-[32px] bg-emerald-50 border border-emerald-100 p-8 md:p-10 relative overflow-hidden flex items-end group min-h-[280px]"
            >
              <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-emerald-200/50 blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              <div className="relative z-10 max-w-xl">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#09090B] mb-2">
                  University Outreach
                </h3>
                <p className="text-base text-emerald-900/70 font-medium mb-4 leading-relaxed">
                  We work directly with universities to help graduates find real opportunities
                  instantly.
                </p>
                <Link
                  href="/dashboard/partner"
                  className="inline-flex items-center gap-2 text-emerald-700 font-bold text-lg hover:gap-4 transition-all mt-4"
                >
                  Partner with us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Trust Loop Section (Upwork Style) */}
        <section className="py-32 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#09090B] mb-6">
                Built on the Trust Loop.
              </h2>
              <p className="text-xl text-gray-500 font-medium">
                Employers don't just see a resume. They see who trained the candidate, what they
                were trained in, and proof that the school stands behind them.
              </p>
            </div>

            <div className="space-y-32">
              {/* Feature 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-bold mb-6 text-[#09090B]">
                    1. Talent completes top-tier training.
                  </h3>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                    Every year, thousands of Nigerians complete rigorous digital skills training
                    through bootcamps like AltSchool and BeMINT. GigaLink is the exclusive bridge
                    that connects these newly-skilled graduates directly to their first
                    opportunities.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 font-semibold text-[#09090B]">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5" /> Free profile creation
                      for talent
                    </li>
                    <li className="flex items-center gap-3 font-semibold text-[#09090B]">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5" /> Portfolio and
                      certificate showcase
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="/nigerian_tech_training_1.png"
                    className="rounded-[40px] shadow-2xl w-full h-[400px] object-cover"
                    alt="Built on trust"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <img
                    src="/nigerian_endorsement_2.png"
                    className="rounded-[40px] shadow-2xl w-full h-[400px] object-cover"
                    alt="Verification"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#09090B]">
                    2. Training partners endorse them.
                  </h3>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                    When a candidate joins GigaLink, their training institution directly verifies
                    their completion. A verified badge is placed on their profile, providing
                    undeniable proof of their skills and readiness.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 font-semibold text-[#09090B]">
                      <CheckCircle2 className="text-blue-500 w-5 h-5" /> Official endorsements from
                      schools
                    </li>
                    <li className="flex items-center gap-3 font-semibold text-[#09090B]">
                      <CheckCircle2 className="text-blue-500 w-5 h-5" /> Zero friction verification
                      process
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-bold mb-6 text-[#09090B]">
                    3. Employers hire with confidence.
                  </h3>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                    Companies no longer have to guess. You can filter by verified skills, see public
                   Software Engineer candidates directly without paying expensive recruiter
                    fees. You only pay a small commission on successful hires.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 font-semibold text-[#09090B]">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5" /> Direct hiring access
                    </li>
                    <li className="flex items-center gap-3 font-semibold text-[#09090B]">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5" /> No hidden middleman fees
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="/nigerian_hired_3.png"
                    className="rounded-[40px] shadow-2xl w-full h-[400px] object-cover"
                    alt="Successful hire"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clean, Simple CTA Section */}
        <section className="py-32 px-6 bg-[#FAFAFA] border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black text-[#09090B] tracking-tighter mb-8 leading-tight">
              From Skilled to Hired.
            </h2>
            <p className="text-xl text-gray-500 font-medium mb-12">
              Because every expert was once a beginner who needed a first opportunity. Join the
              platform today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard/company" className="w-full sm:w-auto">
                <button className="bg-[#09090B] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#0055FF] transition-colors shadow-elite w-full">
                  Find Talent
                </button>
              </Link>
              <Link href="/sign-up" className="w-full sm:w-auto">
                <button className="bg-white border border-gray-200 text-[#09090B] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-colors shadow-sm w-full">
                  Find Work
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Zenthora Style Footer */}
      <footer className="relative bg-black text-white px-6 md:px-12 pt-32 pb-[300px] mt-24 rounded-t-[60px] md:rounded-t-[120px] overflow-hidden -mx-[1px] min-h-[calc(100vh-80px)] flex flex-col justify-between">
        {/* Massive Watermark */}
        <div className="absolute bottom-[-0.15em] left-1/2 -translate-x-1/2 font-black italic uppercase tracking-tighter text-white/10 pointer-events-none whitespace-nowrap leading-none z-10 text-[18vw] md:text-[clamp(15vw,25vw,400px)]">
          GIGALINK
        </div>

        <div className="max-w-[1800px] mx-auto w-full relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 text-left">
          <div className="md:col-span-2 lg:col-span-2 space-y-12 text-left">
            <span className="font-display font-extrabold text-2xl tracking-tighter block">
              GigaLink<span className="text-[#0055FF]">.</span>
            </span>
            <p className="text-[13px] text-white uppercase tracking-[0.4em] leading-[2] max-w-sm text-left">
              WE CONNECT THE WORLD'S MOST ADVANCED DIGITAL TALENT. EMPOWERING BUSINESSES, TRAINING
              INSTITUTIONS, AND GLOBAL TECH INTERESTS.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 bg-transparent border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-transparent border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-transparent border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-transparent border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full text-left">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.7em] text-white/50 border-b border-white/5 pb-4 mb-6 italic text-left">
              PLATFORM
            </h4>
            <div className="flex flex-col gap-6 text-[14px] font-black uppercase tracking-widest text-white text-left">
              <Link href="/dashboard/company" className="hover:text-gray-300 transition-all">
                FIND TALENT
              </Link>
              <Link href="/dashboard/company" className="hover:text-gray-300 transition-all">
                POST A JOB
              </Link>
              <Link href="/dashboard/company" className="hover:text-gray-300 transition-all">
                ENTERPRISE
              </Link>
            </div>
          </div>

          <div className="w-full text-left">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.7em] text-white/50 border-b border-white/5 pb-4 mb-6 italic text-left">
              ECOSYSTEM
            </h4>
            <div className="flex flex-col gap-6 text-[14px] font-black uppercase tracking-widest text-white text-left">
              <Link href="/dashboard/partner" className="hover:text-gray-300 transition-all">
                UNIVERSITIES
              </Link>
              <Link href="/dashboard/partner" className="hover:text-gray-300 transition-all">
                TRAINING CENTERS
              </Link>
              <Link href="/dashboard/partner" className="hover:text-gray-300 transition-all">
                BEMINT PROGRAM
              </Link>
            </div>
          </div>

          <div className="w-full text-left">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.7em] text-white/50 border-b border-white/5 pb-4 mb-6 italic text-left">
              LEGAL
            </h4>
            <div className="flex flex-col gap-6 text-[14px] font-black uppercase tracking-widest text-white text-left">
              <Link href="/privacy" className="hover:text-gray-300 transition-all">
                PRIVACY POLICY
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-all">
                TERMS OF SERVICE
              </Link>
            </div>
          </div>

          <div className="w-full text-left flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.7em] text-white/50 border-b border-white/5 pb-4 mb-6 italic text-left">
                COMPANY
              </h4>
              <div className="flex flex-col gap-6 text-[14px] font-black uppercase tracking-widest text-white text-left">
                <Link href="/about" className="hover:text-gray-300 transition-all">
                  ABOUT US
                </Link>
                <Link
                  href="/careers"
                  className="text-green-500 hover:text-green-400 transition-all"
                >
                  CAREERS
                </Link>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.7em] text-white/50 border-b border-white/5 pb-4 mb-6 italic text-left">
                MOBILE APP
              </h4>
              <div className="flex flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <svg viewBox="0 0 384 512" fill="white" className="w-5 h-5">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <span className="text-xs font-bold text-white">App Store</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <svg viewBox="0 0 512 512" fill="white" className="w-5 h-5">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <span className="text-xs font-bold text-white">Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
