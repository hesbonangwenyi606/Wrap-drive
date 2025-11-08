import type { Metadata } from 'next'
import './globals.css'
import ChatbotFloat from '@/components/ChatbotFloat' // Make sure path is correct

export const metadata: Metadata = {
  title: 'Wrap & Drive',
  description: 'Created by Cullen',
  generator: 'v0.dev',
  icons: {
    icon: "/Fav8.png", 
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        <ChatbotFloat /> {/* ✅ This ensures it's floating over everything */}
      </body>
    </html>
  )
}
