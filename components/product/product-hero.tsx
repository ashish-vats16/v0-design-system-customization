"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Layers, Zap } from "lucide-react"

export function ProductHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Floating decorative elements */}
      <div
        className="absolute top-32 right-1/4 w-3 h-3 rounded-full bg-primary/40 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-48 left-1/3 w-2 h-2 rounded-full bg-accent/50 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 right-1/3 w-4 h-4 rounded-full bg-primary/30 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Two Engines. One Workflow.</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          Everything you need to turn <span className="text-gradient">one video</span> into many outcomes
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Transform long-form content into campaigns, clips, summaries, and searchable insights — all from a single
          source.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 h-14 text-base"
          >
            Start Free Trial
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 px-8 h-14 text-base bg-transparent border-border hover:bg-secondary/50"
          >
            <Play className="h-5 w-5" />
            Watch Product Tour
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Layers, label: "Campaign Engine" },
            { icon: Zap, label: "Summarization Engine" },
            { icon: Sparkles, label: "AI-Powered" },
          ].map((feature, index) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
