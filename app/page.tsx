import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  TrendingUp,
  Calendar,
  Bell,
  CreditCard,
  CheckCircle,
  Star,
  ArrowRight,
  Smartphone,
  Lock,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
            <CreditCard className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">ROSCAFlow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Pricing
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
                    Trusted by 10,000+ Groups
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Simplify Your ROSCA Management
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Transform how your group saves together. Track contributions, manage rotations, and build financial
                    trust with our comprehensive ROSCA management platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    width="400"
                    height="600"
                    alt="ROSCAFlow App Interface"
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is ROSCA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What is a ROSCA?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A Rotating Savings and Credit Association (ROSCA) is a group financial arrangement where members
                  contribute a fixed amount regularly, and each member takes turns receiving the total pot.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-emerald-100">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Group Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Friends, family, or colleagues form a trusted group and agree on contribution amounts and rotation
                    schedule.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Regular Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Each member contributes the same amount at regular intervals (weekly, monthly, etc.).
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Rotating Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Members take turns receiving the total collected amount, helping achieve financial goals faster.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Your ROSCA</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your rotating savings group efficiently and transparently.
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
                      <h3 className="text-xl font-bold">Mobile-First Design</h3>
                      <p className="text-gray-600">
                        Access your ROSCA anytime, anywhere with our intuitive mobile app and responsive web platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                      <Bell className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Smart Notifications</h3>
                      <p className="text-gray-600">
                        Never miss a contribution deadline with automated reminders and real-time updates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                      <BarChart3 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Detailed Analytics</h3>
                      <p className="text-gray-600">
                        Track group performance, contribution history, and financial insights with comprehensive
                        reports.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                      <Lock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Bank-Level Security</h3>
                      <p className="text-gray-600">
                        Your financial data is protected with enterprise-grade encryption and security measures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  width="400"
                  height="500"
                  alt="App Features"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How ROSCAFlow Works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started in minutes and transform your group savings experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Your Group</h3>
                <p className="text-gray-600">
                  Set up your ROSCA with group details, contribution amounts, and rotation schedule.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600">
                  2
                </div>
                <h3 className="text-xl font-bold">Invite Members</h3>
                <p className="text-gray-600">
                  Send invitations to trusted friends, family, or colleagues to join your group.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600">
                  3
                </div>
                <h3 className="text-xl font-bold">Track Contributions</h3>
                <p className="text-gray-600">
                  Monitor payments, send reminders, and maintain transparent records for all members.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600">
                  4
                </div>
                <h3 className="text-xl font-bold">Manage Payouts</h3>
                <p className="text-gray-600">
                  Automate rotation schedules and ensure fair, timely distribution of funds.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Communities Worldwide</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how ROSCAFlow is helping groups achieve their financial goals together.
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
                    "ROSCAFlow made managing our family savings group so much easier. The transparency and automation
                    features are game-changers!"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-emerald-600">MJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Maria Johnson</p>
                      <p className="text-xs text-gray-500">Group Organizer</p>
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
                    "The mobile app is perfect for our busy schedules. Everyone stays updated and contributions are
                    never missed."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-emerald-600">DL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">David Lee</p>
                      <p className="text-xs text-gray-500">Small Business Owner</p>
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
                    "We've been using ROSCAFlow for 6 months. The analytics help us make better financial decisions as a
                    group."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-emerald-600">SP</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Sarah Patel</p>
                      <p className="text-xs text-gray-500">Community Leader</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Transform Your Group Savings?
                </h2>
                <p className="max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of groups already using ROSCAFlow to achieve their financial goals together.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder:text-emerald-100"
                  />
                  <Button type="submit" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-emerald-100">
                  Start your 14-day free trial. No credit card required.{" "}
                  <Link href="/terms" className="underline underline-offset-2 hover:text-white">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} ROSCAFlow. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/privacy"
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-900"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-900">
            Terms of Service
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
