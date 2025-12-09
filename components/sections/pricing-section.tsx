"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto">
          <div className="card-premium rounded-3xl border border-border overflow-hidden">
            {/* Header */}
            <div className="relative p-8 lg:p-12 text-center bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
              <div className="absolute top-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Limited Spots</span>
                </div>
              </div>

              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Early Access Pricing</p>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                Join the early adopters
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                We're currently onboarding early users with founder-friendly pricing and close product support.
              </p>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Individual & Small Teams</h4>
                    <p className="text-sm text-muted-foreground">
                      Flexible plans for creators and small marketing teams
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Agencies & Enterprise</h4>
                    <p className="text-sm text-muted-foreground">Custom options for high-volume needs</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-semibold gap-2 group"
                >
                  Talk to Us About Pricing
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
