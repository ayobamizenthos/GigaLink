'use client'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

export default function DashboardRoot() {
  const { user, isLoaded } = useUser()

  useEffect(() => {
    if (!isLoaded) return

    const checkRedirect = async () => {
      try {
        const res = await fetch('/api/user/profile')
        const data = await res.json()
        
        if (!data.profile) {
          // If no profile yet, go to onboarding
          window.location.href = '/onboarding'
        } else {
          // If profile exists, go to talent dashboard
          window.location.href = '/dashboard/talent'
        }
      } catch (err) {
        console.error('Redirect check failed', err)
        // Fallback to onboarding if something goes wrong
        window.location.href = '/onboarding'
      }
    }

    checkRedirect()
  }, [isLoaded])

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="animate-spin w-10 h-10 border-4 border-[#09090B] border-t-transparent rounded-full mb-4" />
      <p className="text-[11px] font-black uppercase tracking-widest text-gray-400">
        Authenticating Secure Portal...
      </p>
    </div>
  )
}
