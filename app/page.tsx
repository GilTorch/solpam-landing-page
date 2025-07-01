"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WaitlistForm } from "@/components/waitlist-form"
import {
  Users,
  TrendingUp,
  Calendar,
  Bell,
  CheckCircle,
  Star,
  Smartphone,
  Lock,
  BarChart3,
  Mail,
  Clock,
  Menu,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { href: "#features", label: "Fonctionnalités" },
    { href: "#how-it-works", label: "Comment ça marche" },
    { href: "#waitlist", label: "Liste d'attente" },
    { href: "https://www.facebook.com/profile.php?id=61568610369603", label: "Contact" },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/images/solpam-logo.png" alt="Sòlpam Logo" width={32} height={32} className="w-8 h-8" />
          <span className="ml-2 text-xl font-bold text-gray-900 font-heading">Sòlpam</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navigationLinks.map(({ href, label }) =>
            href.startsWith("mailto:") || href.startsWith("http") ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Image src="/images/solpam-logo.png" alt="Sòlpam Logo" width={24} height={24} className="w-6 h-6" />
                  <span className="text-lg font-bold text-gray-900 font-heading">Sòlpam</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-lg font-medium hover:text-emerald-600 transition-colors py-2 px-4 rounded-lg hover:bg-emerald-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="pt-6 border-t">
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                    asChild
                    onClick={handleLinkClick}
                  >
                    <Link href="#waitlist">
                      <Mail className="mr-2 h-4 w-4" />
                      Rejoindre la liste d'attente
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 w-fit mx-auto lg:mx-0">
                    Bientôt disponible
                  </Badge>
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-heading">
                    L'app mobile pour gérer votre sòl
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-base md:text-lg xl:text-xl mx-auto lg:mx-0">
                    Transformez la façon dont votre groupe épargne ensemble. Suivez les contributions, gérez les
                    rotations et renforcez la confiance financière avec Sòlpam - directement sur votre téléphone.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                    asChild
                  >
                    <Link href="#waitlist">
                      <Mail className="mr-2 h-4 w-4" />
                      Rejoindre la liste d'attente
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                    asChild
                  >
                    <Link href="#how-it-works">
                      <Clock className="mr-2 h-4 w-4" />
                      En savoir plus
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Application gratuite</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Fonctionne hors ligne</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Sécurisé et privé</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20"></div>
                  <Image
                    src="/images/solpam-dashboard-screen.png"
                    width="250"
                    height="500"
                    alt="Application mobile Sòlpam - Tableau de bord"
                    className="relative rounded-3xl shadow-2xl w-[250px] h-auto md:w-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Sòl Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-heading">
                  Qu'est-ce qu'un sòl ?
                </h2>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl">
                  Un sòl est un système d'épargne collective où les membres contribuent régulièrement un montant fixe,
                  et chaque membre reçoit à tour de rôle la totalité de la cagnotte pour réaliser ses projets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-6 py-8 md:py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="border-emerald-100">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle className="font-heading text-lg md:text-xl">Formation du groupe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm md:text-base">
                    Amis, famille ou collègues forment un groupe de confiance et s'accordent sur les montants de
                    contribution et le calendrier de rotation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle className="font-heading text-lg md:text-xl">Contributions régulières</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm md:text-base">
                    Chaque membre contribue le même montant à intervalles réguliers (hebdomadaire, mensuel, etc.).
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100 md:col-span-2 lg:col-span-1">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle className="font-heading text-lg md:text-xl">Versements rotatifs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm md:text-base">
                    Les membres reçoivent à tour de rôle le montant total collecté, aidant à atteindre les objectifs
                    financiers plus rapidement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-emerald-50 to-teal-50"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-heading">
                  Une app mobile complète pour votre sòl
                </h2>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl">
                  Tout ce dont vous avez besoin pour gérer votre groupe d'épargne collective, directement dans votre
                  poche.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-8 py-8 md:py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 flex-shrink-0">
                      <Smartphone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold font-heading">Interface mobile intuitive</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        Gérez votre sòl facilement avec une interface conçue spécialement pour mobile, simple et rapide
                        à utiliser.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 flex-shrink-0">
                      <Bell className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold font-heading">Notifications push</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        Recevez des notifications directement sur votre téléphone pour les échéances, versements et
                        mises à jour importantes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold font-heading">Suivi en temps réel</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        Consultez l'état de votre sòl, les contributions et les prochains versements en temps réel, même
                        hors ligne.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 flex-shrink-0">
                      <Lock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold font-heading">Sécurité mobile avancée</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        Protection par code PIN, empreinte digitale et chiffrement des données pour une sécurité
                        maximale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <Image
                    src="/images/solpam-login-screen.png"
                    width="150"
                    height="300"
                    alt="Écran de connexion Sòlpam"
                    className="rounded-2xl shadow-xl w-[150px] h-auto md:w-[180px] lg:w-[200px]"
                  />
                  <Image
                    src="/images/solpam-dashboard-screen.png"
                    width="150"
                    height="300"
                    alt="Tableau de bord principal Sòlpam"
                    className="rounded-2xl shadow-xl mt-6 md:mt-8 w-[150px] h-auto md:w-[180px] lg:w-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-heading">
                  Comment utiliser Sòlpam
                </h2>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl">
                  Téléchargez l'app et commencez à gérer votre sòl en quelques minutes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-8 py-8 md:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-xl md:text-2xl font-bold text-emerald-600">
                  1
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading">Téléchargez l'app</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Téléchargez Sòlpam gratuitement sur l'App Store ou Google Play Store.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-xl md:text-2xl font-bold text-emerald-600">
                  2
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading">Créez votre sòl</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Configurez votre groupe avec les détails, montants et calendrier de rotation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-xl md:text-2xl font-bold text-emerald-600">
                  3
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading">Invitez vos proches</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Partagez un code d'invitation pour que vos amis et famille rejoignent votre sòl.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-xl md:text-2xl font-bold text-emerald-600">
                  4
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading">Gérez ensemble</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Suivez les contributions, recevez des notifications et gérez les versements facilement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section
          id="waitlist"
          className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-emerald-50 to-teal-50"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mx-auto w-fit">
                  Lancement prévu pour 2024
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-heading">
                  Rejoignez la liste d'attente
                </h2>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl">
                  Soyez parmi les premiers à découvrir Sòlpam. Inscrivez-vous pour recevoir une notification dès que
                  l'application sera disponible.
                </p>
              </div>

              <div className="w-full max-w-md mx-auto">
                <WaitlistForm />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-8 md:mt-12 w-full">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                    <Bell className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold font-heading text-sm md:text-base">Notification prioritaire</h3>
                  <p className="text-xs md:text-sm text-gray-600">Recevez un email dès que l'app est disponible</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                    <Star className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold font-heading text-sm md:text-base">Accès anticipé</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Testez les nouvelles fonctionnalités en avant-première
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold font-heading text-sm md:text-base">100% gratuit</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Aucun frais, aucun engagement, désinscription facile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-heading">
                  Aimé par des utilisateurs du monde entier
                </h2>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl">
                  Découvrez pourquoi Sòlpam est l'app mobile préférée pour gérer les sòl.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-6 py-8 md:py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="border-emerald-100">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    "L'app Sòlpam est parfaite ! Je peux gérer notre sòl familial directement depuis mon téléphone.
                    Super pratique !"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-emerald-600">MJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Marie Joseph</p>
                      <p className="text-xs text-gray-500">Organisatrice de sòl</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-100">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    "Les notifications me rappellent toujours les échéances. Plus jamais d'oubli ! L'app est très bien
                    faite."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-emerald-600">PL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Pierre Louis</p>
                      <p className="text-xs text-gray-500">Propriétaire de petite entreprise</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-100 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    "Interface simple et claire. Même ma grand-mère arrive à utiliser l'app pour suivre notre sòl !"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-emerald-600">SD</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Sophia Désir</p>
                      <p className="text-xs text-gray-500">Leader communautaire</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-white font-heading">
                  Bientôt sur vos téléphones
                </h2>
                <p className="text-emerald-100 text-base md:text-lg lg:text-xl">
                  Sòlpam sera bientôt disponible sur iOS et Android. Rejoignez la liste d'attente pour être notifié du
                  lancement.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 min-w-[200px]"
                  asChild
                >
                  <Link href="#waitlist">
                    <Mail className="mr-2 h-5 w-5" />
                    Rejoindre la liste d'attente
                  </Link>
                </Button>
              </div>
              <p className="text-xs md:text-sm text-emerald-100 pt-2">
                Lancement prévu pour 2024 • Compatible iOS 12+ et Android 8+
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Sòlpam. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 text-center sm:text-left">
          <Link
            href="/privacy"
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-900"
          >
            Politique de confidentialité
          </Link>
          <Link href="/terms" className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-900">
            Conditions d'utilisation
          </Link>
          <Link
            href="mailto:contact@solpam.com"
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
