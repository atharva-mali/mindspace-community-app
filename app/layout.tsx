import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import { SocketProvider } from '@/components/providers/socket-provider'
import { QueryProvider } from '@/components/providers/query-provider'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mindspace | Comunity of likeminded people',
  description: 'Mindspace - Your Online Hub for Connecting with Like-Minded Individuals | Welcome to Mindspace, the ultimate online community where you can easily connect with people who share your interests and passions. With features like user-friendly login and registration, diverse communities, interactive channels, engaging video content, and immersive audio channels, Mindspace provides the perfect platform to build meaningful connections in a digital world. Discover, interact, and share your thoughts within vibrant communities tailored to your interests. Join in on the engaging discussions or start your own conversation, all with the convenience of our easy-to-use login and registration system. Explore a world of multimedia content through our video and audio channels. Dive into a wide range of topics, from informative videos to inspiring audio discussions, all at your fingertips. Join Mindspace today and unlock a world of like-minded individuals and engaging content. Your journey to meaningful connections and shared experiences starts here!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          font.className,
          "bg-white dark:bg-[#313338]"
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>
                {children}
              </QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
