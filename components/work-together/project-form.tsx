"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useLocaleDictionary } from "@/components/locale-provider"
import { CheckCircle2, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ProjectForm() {
  const {
    formFields,
    formMessages,
    formConfig,
    formSections,
    workTogetherContent,
    locale,
  } = useLocaleDictionary()
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState(formMessages.error.message)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formConfig.accessKey) {
      setErrorMessage(formMessages.missingConfig.message)
      setStatus("error")
      return
    }

    setErrorMessage(formMessages.error.message)
    setStatus("submitting")

    try {
      const response = await fetch(formConfig.web3formsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: formConfig.accessKey,
          subject:
            locale === "ro"
              ? `Cerere noua de proiect de la ${formData.name}`
              : `New Project Inquiry from ${formData.name}`,
          from_name: formConfig.fromName,
          replyto: formData.email,
          botcheck: false,
          ...formData,
        }),
      })

      const result = await response.json().catch(() => null)

      if (response.ok && result?.success !== false) {
        setStatus("success")
        setErrorMessage(formMessages.error.message)
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
        })
      } else {
        setErrorMessage(result?.message || formMessages.error.message)
        setStatus("error")
      }
    } catch {
      setErrorMessage(formMessages.error.message)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 md:p-12 border border-border bg-card text-center">
        <div className="max-w-md mx-auto space-y-4">
          <CheckCircle2 className="h-12 w-12 mx-auto text-foreground" />
          <h3 className="text-2xl font-bold">{formMessages.success.title}</h3>
          <p className="text-muted-foreground">{formMessages.success.message}</p>
          <Button
            onClick={() => setStatus("idle")}
            variant="outline"
            className="mt-4"
          >
            {locale === "ro" ? "Trimite o alta cerere" : "Submit another inquiry"}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Contact Information */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold">{formSections.contact.title}</h3>
          <p className="text-sm text-muted-foreground">{formSections.contact.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              {formFields.name.label} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder={formFields.name.placeholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              {formFields.email.label} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={formFields.email.placeholder}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{formFields.phone.label}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={formFields.phone.placeholder}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold">{formSections.additional.title}</h3>
          <p className="text-sm text-muted-foreground">{formSections.additional.description}</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">
            {formFields.description.label} <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder={formFields.description.placeholder}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="min-h-[100px]"
            required
          />
        </div>
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 border border-destructive bg-destructive/10 rounded-md">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">{formMessages.error.title}</p>
            <p className="text-sm text-muted-foreground">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Submit */}
      <div className="space-y-4">
        <Button
          type="submit"
          size="lg"
          className="w-full md:w-auto px-12"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? formMessages.submitting : formMessages.submitButton}
        </Button>

        <p className="text-xs text-muted-foreground">
          {workTogetherContent.privacyNote}
        </p>
      </div>
    </form>
  )
}
