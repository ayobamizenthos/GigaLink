import type { Metadata } from 'next'
import './globals.css'

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
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
