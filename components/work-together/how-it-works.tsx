import { WORK_TOGETHER_CONTENT } from "@/lib/content"

export function HowItWorks() {
  const { howItWorks } = WORK_TOGETHER_CONTENT

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          {howItWorks.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < howItWorks.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl md:text-5xl font-bold text-muted-foreground/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
