"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function ProductCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Floating elements */}
      <div className="absolute top-12 left-1/4 w-3 h-3 rounded-full bg-primary/30 animate-float" />
      <div
        className="absolute bottom-12 right-1/4 w-4 h-4 rounded-full bg-accent/30 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Ready to transform your content?</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Start creating with <span className="text-gradient">LuminaCore</span> today
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Join thousands of content teams already saving hours every week with AI-powered video transformation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            Book a Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <p className="mt-8 text-sm text-muted-foreground">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
