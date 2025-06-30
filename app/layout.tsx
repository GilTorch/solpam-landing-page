import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Nunito } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sòlpam - L'app mobile pour gérer votre sòl",
  description: "Transformez la façon dont votre groupe épargne ensemble avec Sòlpam",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${nunito.variable}`}>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
