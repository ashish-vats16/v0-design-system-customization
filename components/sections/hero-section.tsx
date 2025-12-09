"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Video } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/30 blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Video Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Turn long videos into <span className="text-gradient">campaigns & summaries</span> in minutes
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl text-pretty">
            LuminaCore AI transforms webinars, trainings, podcasts, and events into ready-to-publish clips, captions,
            summaries, and multilingual subtitles — so your team ships more content with less effort.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold gap-2 group"
            >
              Get Early Access
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base font-semibold gap-2 border-border hover:bg-secondary/50 bg-transparent"
            >
              <Play className="h-5 w-5" />
              Watch 2-min Demo
            </Button>
          </div>

          {/* Support text */}
          <p className="mt-6 text-sm text-muted-foreground">
            For creators, agencies, and teams who live on video but don't have time to edit it.
          </p>

          {/* Hero Visual */}
          <div className="mt-16 relative w-full max-w-5xl">
            <div className="card-premium rounded-2xl border border-border overflow-hidden">
              {/* Mock UI */}
              <div className="bg-card p-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Product Launch Webinar</p>
                      <p className="text-sm text-muted-foreground">1h 23m • Processing complete</p>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Ready
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Zap, title: "12 Clips Generated", subtitle: "Reels, Shorts, Stories" },
                  { icon: Sparkles, title: "Summary Created", subtitle: "Key moments extracted" },
                  { icon: Video, title: "Subtitles Added", subtitle: "5 languages ready" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:bg-secondary/50"
                  >
                    <item.icon className="h-8 w-8 text-primary mb-3" />
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 animate-float hidden lg:block">
              <div className="glass rounded-xl p-4 shadow-lg">
                <p className="text-xs font-medium text-muted-foreground">Content generated</p>
                <p className="text-2xl font-bold text-foreground">847</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
              <div className="glass rounded-xl p-4 shadow-lg">
                <p className="text-xs font-medium text-muted-foreground">Time saved</p>
                <p className="text-2xl font-bold text-foreground">92%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
