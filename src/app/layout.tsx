import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GigaLink | Elite Tech Talent',
  description: 'The definitive platform for verified digital talent.',
}

import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${jakarta.variable} ${space.variable} scroll-smooth`} suppressHydrationWarning>
        <body 
          className="font-sans bg-[#FAFAFA] text-[#09090B] antialiased min-h-screen flex flex-col selection:bg-[#09090B] selection:text-[#FAFAFA]"
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
