import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Nunito } from "next/font/google"
import "./globals.css"
import Head from "next/head"

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
  icons: {
    icon: [
      { url: "/images/favicons/favicon.ico" },
      { url: "/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/favicons/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${nunito.variable}`}>
      <Head>
        <link rel="icon" href="/images/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png" />
      </Head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
