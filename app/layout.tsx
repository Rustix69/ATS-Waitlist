import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ResumeAI',
  description: 'ResumeAI - Smart Resume Analysis',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        {/* Fallback favicon for browsers that don't support SVG */}
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Custom file icon as favicon with extra metadata */}
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
