"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQ {
  question: string
  answer: string
}

interface FAQBlockProps {
  faqs: FAQ[]
}

export function FAQBlock({ faqs }: FAQBlockProps) {
  return (
    <div className="my-8 border border-border rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-muted/30 border-b border-border">
        <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Frequently Asked Questions
        </h3>
      </div>
      <Accordion type="single" collapsible className="px-6">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
