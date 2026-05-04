import { FileText, Image, Palette, Camera } from "lucide-react"
import { WORK_TOGETHER_CONTENT } from "@/lib/content"

const icons = [FileText, Image, Palette, Camera]

export function WhatToPrepare() {
  const { whatToPrepare } = WORK_TOGETHER_CONTENT

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {whatToPrepare.title}
          </h2>
          <p className="text-muted-foreground">
            {whatToPrepare.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatToPrepare.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="p-6 border border-border bg-card hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-center gap-4 min-[400px]:block min-[400px]:space-y-4">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-border">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-2 min-[400px]:space-y-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
