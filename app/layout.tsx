import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

import { Urbanist } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ToastProvider from '@/providers/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
