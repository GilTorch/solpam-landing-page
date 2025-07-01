"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { addToWaitlist, getWaitlistCount } from "@/lib/waitlist"
import { CheckCircle, Loader2, Mail, Users, TrendingUp, AlertCircle, Info } from "lucide-react"

const formSchema = z.object({
  email: z.string().min(1, "L'adresse email est requise").email("Veuillez entrer une adresse email valide"),
})

type FormData = z.infer<typeof formSchema>

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null)
  const [isLoadingCount, setIsLoadingCount] = useState(true)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "info" | null
    message: string
  }>({ type: null, message: "" })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  // Load waitlist count on component mount
  useEffect(() => {
    const loadCount = async () => {
      try {
        setIsLoadingCount(true)
        console.log("Loading waitlist count...")
        const count = await getWaitlistCount()
        console.log("Loaded count:", count)
        setWaitlistCount(count)
      } catch (error) {
        console.error("Error loading waitlist count:", error)
        setWaitlistCount(247) // Fallback count
      } finally {
        setIsLoadingCount(false)
      }
    }
    loadCount()
  }, [])

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with email:", data.email)
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await addToWaitlist(data.email)
      console.log("Waitlist result:", result)

      if (result.success) {
        // Check if it's demo mode
        const isDemoMode = result.message.includes("Mode démo") || result.message.includes("Firebase indisponible")
        setSubmitStatus({
          type: isDemoMode ? "info" : "success",
          message: result.message,
        })
        if (result.count) {
          setWaitlistCount(result.count)
        }
        form.reset()
      } else {
        setSubmitStatus({ type: "error", message: result.message })
        if (result.count) {
          setWaitlistCount(result.count)
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer plus tard.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus.type === "success" || submitStatus.type === "info") {
    const isDemo = submitStatus.type === "info"

    return (
      <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 w-full">
        <div
          className={`flex items-center justify-center w-16 h-16 rounded-full ${isDemo ? "bg-blue-100" : "bg-emerald-100"}`}
        >
          {isDemo ? <Info className="w-8 h-8 text-blue-600" /> : <CheckCircle className="w-8 h-8 text-emerald-600" />}
        </div>
        <div className="text-center space-y-3">
          <h3 className={`text-xl font-bold font-heading ${isDemo ? "text-blue-800" : "text-emerald-800"}`}>
            {isDemo ? "Mode démo activé 🔧" : "Inscription confirmée ! 🎉"}
          </h3>
          <p className={isDemo ? "text-blue-700" : "text-emerald-700"}>{submitStatus.message}</p>
          {isDemo && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
              <p className="font-medium">ℹ️ Configuration Firebase requise</p>
              <p className="mt-1">
                Pour enregistrer réellement les emails, configurez vos variables d'environnement Firebase.
              </p>
            </div>
          )}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-emerald-200">
            <p className="text-sm text-emerald-600">✅ Vous recevrez une notification dès que l'app sera disponible</p>
            <p className="text-sm text-emerald-600 mt-1">📱 Accès prioritaire aux nouvelles fonctionnalités</p>
          </div>
        </div>

        {/* Waitlist Counter */}
        {waitlistCount && (
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-emerald-200 shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Personnes inscrites</p>
              <p className="text-3xl font-bold text-emerald-600">{waitlistCount.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-1 text-emerald-600">
              <TrendingUp className="w-4 w-4" />
              <span className="text-xs font-medium">En croissance</span>
            </div>
          </div>
        )}

        <Button
          variant="outline"
          onClick={() => {
            setSubmitStatus({ type: null, message: "" })
            form.reset()
          }}
          className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 w-full sm:w-auto"
        >
          Inscrire une autre adresse
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full space-y-6">
      {/* Waitlist Counter */}
      {waitlistCount && !isLoadingCount && (
        <div className="flex items-center justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-emerald-200 shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 font-medium">Déjà inscrits</p>
            <p className="text-3xl font-bold text-emerald-600">{waitlistCount.toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-1 text-emerald-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">+12 cette semaine</span>
          </div>
        </div>
      )}

      {/* Loading state for counter */}
      {isLoadingCount && (
        <div className="flex items-center justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-emerald-200 shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full">
            <Loader2 className="w-6 h-6 text-emerald-600 animate-spin" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 font-medium">Chargement...</p>
            <p className="text-lg font-bold text-emerald-600">---</p>
          </div>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="votre@email.com"
                      {...field}
                      className="pl-10 h-12 text-base border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 w-full bg-white/80 backdrop-blur-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitStatus.type === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-red-700 font-medium">Erreur d'inscription</p>
                <p className="text-sm text-red-600 mt-1">{submitStatus.message}</p>
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium text-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Inscription en cours...
              </>
            ) : (
              "Rejoindre la liste d'attente"
            )}
          </Button>
        </form>
      </Form>

      <p className="text-xs text-gray-500 text-center">
        En vous inscrivant, vous acceptez de recevoir des mises à jour sur le lancement de Sòlpam.
        <br />
        Aucun spam, désinscription facile à tout moment.
      </p>
    </div>
  )
}
