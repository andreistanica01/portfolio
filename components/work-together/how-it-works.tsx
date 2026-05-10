import { useLocaleDictionary } from "@/components/locale-provider"

export function HowItWorks() {
  const { workTogetherContent } = useLocaleDictionary()
  const { howItWorks } = workTogetherContent

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          {howItWorks.title}
        </h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Continuous connector line behind nodes */}
          <div className="relative mb-10">
            <div className="absolute top-7 left-[calc(100%/8)] right-[calc(100%/8)] h-px bg-border" />
            <div className="grid grid-cols-4 gap-0">
              {howItWorks.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Node */}
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border border-border bg-background">
                    <span className="text-lg font-bold tabular-nums">
                      {step.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text content below */}
          <div className="grid grid-cols-4 gap-8">
            {howItWorks.steps.map((step, index) => (
              <div key={index} className="space-y-3 text-center">
                <h3 className="text-base font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Left: node + vertical line */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background shrink-0 z-10">
                  <span className="text-base font-bold tabular-nums">
                    {step.number}
                  </span>
                </div>
                {index < howItWorks.steps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-0" />
                )}
              </div>

              {/* Right: text */}
              <div className={`space-y-1 pb-10 ${index === howItWorks.steps.length - 1 ? "pb-0" : ""}`}>
                <h3 className="text-base font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
