"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Globe, Palette, Scale } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Understands context, not just timestamps",
    description: "Finds moments where the story, emotion, and message land — not random cuts.",
  },
  {
    icon: Palette,
    title: "On-brand by default",
    description: "Remembers your tone, keywords, and style so campaigns feel consistent.",
  },
  {
    icon: Globe,
    title: "Multilingual ready",
    description: "Generates subtitles and copy in multiple languages to reach global audiences.",
  },
  {
    icon: Scale,
    title: "Built for scale",
    description: "Process 1 video or 100 — LuminaCore was designed for high-volume workflows.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Why LuminaCore</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            More than a clipper tool. <span className="text-gradient">A video content brain.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 p-6 rounded-2xl transition-colors hover:bg-secondary/30">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold gap-2 group"
          >
            Get Early Access
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
