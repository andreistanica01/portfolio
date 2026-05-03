"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FORM_FIELDS, FORM_MESSAGES, FORM_CONFIG, FORM_SECTIONS } from "@/lib/form-constants"
import { WORK_TOGETHER_CONTENT, SITE_CONFIG } from "@/lib/content"
import { CheckCircle2, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ProjectForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch(FORM_CONFIG.web3formsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: FORM_CONFIG.accessKey,
          subject: `New Project Inquiry from ${formData.name}`,
          from_name: "Bevel Graphics Website",
          ...formData,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
        })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 md:p-12 border border-border bg-card text-center">
        <div className="max-w-md mx-auto space-y-4">
          <CheckCircle2 className="h-12 w-12 mx-auto text-foreground" />
          <h3 className="text-2xl font-bold">{FORM_MESSAGES.success.title}</h3>
          <p className="text-muted-foreground">{FORM_MESSAGES.success.message}</p>
          <Button
            onClick={() => setStatus("idle")}
            variant="outline"
            className="mt-4"
          >
            Submit another inquiry
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
          <h3 className="text-lg font-bold">{FORM_SECTIONS.contact.title}</h3>
          <p className="text-sm text-muted-foreground">{FORM_SECTIONS.contact.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              {FORM_FIELDS.name.label} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder={FORM_FIELDS.name.placeholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              {FORM_FIELDS.email.label} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={FORM_FIELDS.email.placeholder}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{FORM_FIELDS.phone.label}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={FORM_FIELDS.phone.placeholder}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold">{FORM_SECTIONS.additional.title}</h3>
          <p className="text-sm text-muted-foreground">{FORM_SECTIONS.additional.description}</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">
            {FORM_FIELDS.description.label} <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder={FORM_FIELDS.description.placeholder}
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
            <p className="font-medium">{FORM_MESSAGES.error.title}</p>
            <p className="text-sm text-muted-foreground">{FORM_MESSAGES.error.message}</p>
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
          {status === "submitting" ? FORM_MESSAGES.submitting : FORM_MESSAGES.submitButton}
        </Button>

        <p className="text-xs text-muted-foreground">
          {WORK_TOGETHER_CONTENT.privacyNote}
        </p>
      </div>
    </form>
  )
}
