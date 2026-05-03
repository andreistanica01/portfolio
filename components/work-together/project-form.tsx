"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FORM_FIELDS, FORM_MESSAGES, FORM_SECTIONS, FORM_CONFIG } from "@/lib/form-constants"
import { WORK_TOGETHER_CONTENT, SITE_CONFIG } from "@/lib/content"
import { CheckCircle2, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ProjectForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    buildingType: "",
    numberOfImages: "",
    timeline: "",
    budget: "",
    fileLinks: "",
    description: "",
    hasCAD: false,
    hasReferences: false,
    needsAnimation: false,
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
          company: "",
          projectType: "",
          buildingType: "",
          numberOfImages: "",
          timeline: "",
          budget: "",
          fileLinks: "",
          description: "",
          hasCAD: false,
          hasReferences: false,
          needsAnimation: false,
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

          <div className="space-y-2">
            <Label htmlFor="company">{FORM_FIELDS.company.label}</Label>
            <Input
              id="company"
              name="company"
              placeholder={FORM_FIELDS.company.placeholder}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold">{FORM_SECTIONS.project.title}</h3>
          <p className="text-sm text-muted-foreground">{FORM_SECTIONS.project.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>
              {FORM_FIELDS.projectType.label} <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.projectType}
              onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={FORM_FIELDS.projectType.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {FORM_FIELDS.projectType.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>
              {FORM_FIELDS.buildingType.label} <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.buildingType}
              onValueChange={(value) => setFormData({ ...formData, buildingType: value })}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={FORM_FIELDS.buildingType.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {FORM_FIELDS.buildingType.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>
              {FORM_FIELDS.numberOfImages.label} <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.numberOfImages}
              onValueChange={(value) => setFormData({ ...formData, numberOfImages: value })}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={FORM_FIELDS.numberOfImages.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {FORM_FIELDS.numberOfImages.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>
              {FORM_FIELDS.timeline.label} <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.timeline}
              onValueChange={(value) => setFormData({ ...formData, timeline: value })}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={FORM_FIELDS.timeline.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {FORM_FIELDS.timeline.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>{FORM_FIELDS.budget.label}</Label>
            <Select
              value={formData.budget}
              onValueChange={(value) => setFormData({ ...formData, budget: value })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={FORM_FIELDS.budget.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {FORM_FIELDS.budget.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Project Files */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold">{FORM_SECTIONS.files.title}</h3>
          <p className="text-sm text-muted-foreground">{FORM_SECTIONS.files.description}</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fileLinks">{FORM_FIELDS.fileLinks.label}</Label>
          <Textarea
            id="fileLinks"
            name="fileLinks"
            placeholder={FORM_FIELDS.fileLinks.placeholder}
            value={formData.fileLinks}
            onChange={(e) => setFormData({ ...formData, fileLinks: e.target.value })}
            className="min-h-[100px]"
          />
          <p className="text-xs text-muted-foreground">{FORM_FIELDS.fileLinks.helpText}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Checkbox
              id="hasCAD"
              checked={formData.hasCAD}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, hasCAD: checked === true })
              }
            />
            <Label htmlFor="hasCAD" className="font-normal cursor-pointer">
              {FORM_FIELDS.hasCAD.label}
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              id="hasReferences"
              checked={formData.hasReferences}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, hasReferences: checked === true })
              }
            />
            <Label htmlFor="hasReferences" className="font-normal cursor-pointer">
              {FORM_FIELDS.hasReferences.label}
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              id="needsAnimation"
              checked={formData.needsAnimation}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, needsAnimation: checked === true })
              }
            />
            <Label htmlFor="needsAnimation" className="font-normal cursor-pointer">
              {FORM_FIELDS.needsAnimation.label}
            </Label>
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
            className="min-h-[200px]"
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
