"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clapperboard, FileText, Languages, MessageSquare, Sparkles, Video } from "lucide-react"

const campaignFeatures = [
  { icon: Clapperboard, text: "Platform-ready clips (Reels, Shorts, TikTok-style, stories)" },
  { icon: MessageSquare, text: "Hooks, captions, and CTAs tailored to each clip" },
  { icon: FileText, text: "Branded titles, descriptions, and posting suggestions" },
]

const summaryFeatures = [
  { icon: FileText, text: "Short, readable summaries of long sessions" },
  { icon: Sparkles, text: "Key moments and highlight reels" },
  { icon: Video, text: 'Searchable "what happened where" for future reference' },
]

export function SolutionSection() {
  return (
    <section id="product" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">The Solution</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            From one long video to a <span className="text-gradient">complete content kit</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload a video and LuminaCore automatically creates everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Campaign Engine */}
          <div className="card-premium rounded-3xl border border-border overflow-hidden group">
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
                <Clapperboard className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Campaign Engine</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-6">Ready-to-publish content for every platform</h3>

              <ul className="space-y-4">
                {campaignFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed pt-2">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
              <div className="absolute inset-4 grid grid-cols-3 gap-3">
                {["Reel", "Short", "Story"].map((type, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-card/80 border border-border p-3 flex flex-col items-center justify-center backdrop-blur-sm"
                  >
                    <Video className="h-6 w-6 text-primary mb-2" />
                    <span className="text-xs font-medium text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summarization Engine */}
          <div className="card-premium rounded-3xl border border-border overflow-hidden group">
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 mb-6">
                <FileText className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Summarization Engine</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-6">Never lose important knowledge again</h3>

              <ul className="space-y-4">
                {summaryFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed pt-2">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-48 bg-gradient-to-br from-accent/5 to-primary/5 border-t border-border p-4">
              <div className="h-full rounded-lg bg-card/80 border border-border p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Languages className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium text-foreground">Auto-generated summary</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-secondary rounded-full w-full" />
                  <div className="h-2 bg-secondary rounded-full w-4/5" />
                  <div className="h-2 bg-secondary rounded-full w-3/4" />
                  <div className="h-2 bg-secondary rounded-full w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-foreground mb-6">
            All in minutes, not weeks — with your brand voice and style baked in.
          </p>
          <Button
            size="lg"
            className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold gap-2 group"
          >
            Start Creating
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
