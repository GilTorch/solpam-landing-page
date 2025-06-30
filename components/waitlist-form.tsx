"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { addToWaitlist } from "@/lib/waitlist"
import { CheckCircle, Loader2, Mail } from "lucide-react"

const formSchema = z.object({
  email: z.string().min(1, "L'adresse email est requise").email("Veuillez entrer une adresse email valide"),
})

type FormData = z.infer<typeof formSchema>

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await addToWaitlist(data.email)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        form.reset()
      } else {
        setSubmitStatus({ type: "error", message: result.message })
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

  if (submitStatus.type === "success") {
    return (
      <div className="flex flex-col items-center space-y-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200 w-full">
        <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full">
          <CheckCircle className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-emerald-800 font-heading">Inscription confirmée !</h3>
          <p className="text-emerald-700 mt-1">{submitStatus.message}</p>
          <p className="text-sm text-emerald-600 mt-2">Nous vous tiendrons informé du lancement de l'application.</p>
        </div>
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
    <div className="w-full">
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
                      className="pl-10 h-12 text-base border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitStatus.type === "error" && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-700">{submitStatus.message}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium text-center justify-center"
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

      <p className="text-xs text-gray-500 text-center mt-3">
        En vous inscrivant, vous acceptez de recevoir des mises à jour sur le lancement de Sòlpam.
      </p>
    </div>
  )
}
