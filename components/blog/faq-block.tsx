"use client"

import { ChevronDown } from "lucide-react"
import { useLocaleDictionary } from "@/components/locale-provider"

interface FAQ {
  question: string
  answer: string
}

interface FAQBlockProps {
  faqs: FAQ[]
}

export function FAQBlock({ faqs }: FAQBlockProps) {
  const { faqHeading } = useLocaleDictionary()

  return (
    <div className="my-8 border border-border rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-muted/30 border-b border-border">
        <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {faqHeading}
        </h3>
      </div>
      <div className="px-6">
        {faqs.map((faq, index) => (
          <details key={index} className="group border-b border-border last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-medium [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span><ChevronDown size={16} className="shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}
