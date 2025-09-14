import type React from "react"
import type { Metadata } from "next"
import { Inter, VT323 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
})


const navigation = [
  { name: "Resume", href: "/resume" },
  { name: "Software", href: "/software" },
];

export const metadata: Metadata = {
  title: "Just Press Tab",
  description: "Exploring applications of AI, everywhere!",
  openGraph: {
    title: "Just Press Tab",
    description: "Exploring applications of AI, everywhere!",
    url: "https://just-press-tab.com",
    siteName: "Just Press Tab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Press Tab",
    description: "Exploring applications of AI, everywhere!",
    creator: "@slyyyle",
  },
  metadataBase: new URL("https://just-press-tab.com"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${vt323.variable} font-sans bg-black text-green-400`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'