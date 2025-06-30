import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/images/solpam-logo.png" alt="Solpam Logo" width={32} height={32} className="w-8 h-8" />
          <span className="ml-2 text-xl font-bold text-gray-900">Solpam</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Comment ça marche
          </Link>
          <Link href="#download" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Télécharger
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                    Plus de 10 000 téléchargements
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    L'app mobile pour gérer votre sòl
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Transformez la façon dont votre groupe épargne ensemble. Suivez les contributions, gérez les
                    rotations et renforcez la confiance financière avec Solpam - directement sur votre téléphone.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger sur iOS
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger sur Android
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Téléchargement gratuit</span>
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
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    width="300"
                    height="600"
                    alt="Application mobile Solpam"
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Sòl Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Qu'est-ce qu'un sòl ?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un sòl est un système d'épargne collective où les membres contribuent régulièrement un montant fixe,
                  et chaque membre reçoit à tour de rôle la totalité de la cagnotte pour réaliser ses projets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-emerald-100">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Formation du groupe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Amis, famille ou collègues forment un groupe de confiance et s'accordent sur les montants de
                    contribution et le calendrier de rotation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Contributions régulières</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Chaque membre contribue le même montant à intervalles réguliers (hebdomadaire, mensuel, etc.).
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Versements rotatifs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Les membres reçoivent à tour de rôle le montant total collecté, aidant à atteindre les objectifs
                    financiers plus rapidement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Une app mobile complète pour votre sòl
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tout ce dont vous avez besoin pour gérer votre groupe d'épargne collective, directement dans votre
                  poche.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-8">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                      <Smartphone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Interface mobile intuitive</h3>
                      <p className="text-gray-600">
                        Gérez votre sòl facilement avec une interface conçue spécialement pour mobile, simple et rapide
                        à utiliser.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                      <Bell className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Notifications push</h3>
                      <p className="text-gray-600">
                        Recevez des notifications directement sur votre téléphone pour les échéances, versements et
                        mises à jour importantes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                      <BarChart3 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Suivi en temps réel</h3>
                      <p className="text-gray-600">
                        Consultez l'état de votre sòl, les contributions et les prochains versements en temps réel, même
                        hors ligne.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                      <Lock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Sécurité mobile avancée</h3>
                      <p className="text-gray-600">
                        Protection par code PIN, empreinte digitale et chiffrement des données pour une sécurité
                        maximale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    width="200"
                    height="400"
                    alt="Écran principal de l'app"
                    className="rounded-2xl shadow-xl"
                  />
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    width="200"
                    height="400"
                    alt="Écran de gestion du sòl"
                    className="rounded-2xl shadow-xl mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comment utiliser Solpam</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Téléchargez l'app et commencez à gérer votre sòl en quelques minutes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600">
                  1
                </div>
                <h3 className="text-xl font-bold">Téléchargez l'app</h3>
                <p className="text-gray-600">Téléchargez Solpam gratuitement sur l'App Store ou Google Play Store.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600">
                  2
                </div>
                <h3 className="text-xl font-bold">Créez votre sòl</h3>
                <p className="text-gray-600">
                  Configurez votre groupe avec les détails, montants et calendrier de rotation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600">
                  3
                </div>
                <h3 className="text-xl font-bold">Invitez vos proches</h3>
                <p className="text-gray-600">
                  Partagez un code d'invitation pour que vos amis et famille rejoignent votre sòl.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600">
                  4
                </div>
                <h3 className="text-xl font-bold">Gérez ensemble</h3>
                <p className="text-gray-600">
                  Suivez les contributions, recevez des notifications et gérez les versements facilement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Aimé par des utilisateurs du monde entier
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez pourquoi Solpam est l'app mobile préférée pour gérer les sòl.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
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
                  <p className="text-gray-600 mb-4">
                    "L'app Solpam est parfaite ! Je peux gérer notre sòl familial directement depuis mon téléphone.
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
                  <p className="text-gray-600 mb-4">
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
                  <p className="text-gray-600 mb-4">
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
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Téléchargez Solpam maintenant
                </h2>
                <p className="max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Rejoignez des milliers d'utilisateurs qui gèrent déjà leur sòl avec Solpam.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 min-w-[200px]"
                >
                  <Download className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 min-w-[200px]"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
              <p className="text-xs text-emerald-100 pt-2">Téléchargement gratuit • Compatible iOS 12+ et Android 8+</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Solpam. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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
            href="/support"
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-900"
          >
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}
