"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Zap,
  Layers,
  Scissors,
  Smartphone,
  Sparkles,
  MessageSquare,
  Palette,
  Clock,
  ListChecks,
  BookOpen,
  Search,
  Globe,
} from "lucide-react"

const engines = [
  {
    id: "campaign",
    icon: Layers,
    title: "Campaign Engine",
    tagline: "Turn a single video into a multi-platform campaign.",
    features: [
      {
        icon: Scissors,
        title: "Smart clip detection",
        description: "Finds impactful moments, not just time-based cuts.",
      },
      {
        icon: Smartphone,
        title: "Platform-aware formats",
        description: "Suggestions for Reels, Shorts, TikTok-style clips, and stories.",
      },
      {
        icon: Sparkles,
        title: "Hook & caption generator",
        description: "Creates scroll-stopping openers and captions in your brand voice.",
      },
      {
        icon: MessageSquare,
        title: "CTA & description ideas",
        description: "Suggests CTAs and supporting copy for posts, emails, and landing pages.",
      },
      {
        icon: Palette,
        title: "Branded outputs",
        description: "Consistent style across assets so it looks like your brand, not a template.",
      },
    ],
    useCases: [
      "Launch campaigns from webinars and live streams",
      "Repurpose podcasts and interviews",
      "Feed your social channels with a pipeline of content",
    ],
  },
  {
    id: "summarization",
    icon: Zap,
    title: "Summarization Engine",
    tagline: "Make video as searchable and usable as a document.",
    features: [
      {
        icon: Clock,
        title: "Short summaries of long sessions",
        description: "60–120 second read for a 60–90 minute video.",
      },
      {
        icon: ListChecks,
        title: "Key points & takeaways",
        description: "Bullet summaries for quick review.",
      },
      {
        icon: BookOpen,
        title: "Chaptering & highlights",
        description: '"What happened when" across the timeline.',
      },
      {
        icon: Search,
        title: "Searchable insights",
        description: "Find moments by topic, question, or speaker.",
      },
      {
        icon: Globe,
        title: "Multilingual support",
        description: "Summaries and key points in multiple languages.",
      },
    ],
    useCases: [
      "Recap trainings and all-hands meetings",
      "Help teams catch up fast",
      "Turn expert recordings into knowledge assets",
    ],
  },
]

export function EnginesSection() {
  const [activeEngine, setActiveEngine] = useState("campaign")
  const currentEngine = engines.find((e) => e.id === activeEngine)!

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-subtle)] opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground mb-4">
            Core Technology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Two Engines, One Workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI engines working together to maximize the value of every video.
          </p>
        </div>

        {/* Engine Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-secondary/50 border border-border">
            {engines.map((engine) => (
              <button
                key={engine.id}
                onClick={() => setActiveEngine(engine.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                  activeEngine === engine.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                )}
              >
                <engine.icon className="h-4 w-4" />
                {engine.title}
              </button>
            ))}
          </div>
        </div>

        {/* Engine Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Features Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {currentEngine.features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-premium p-6 rounded-2xl border border-border group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Use Cases Sidebar */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <currentEngine.icon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{currentEngine.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{currentEngine.tagline}</p>

              <div className="space-y-1 mb-8">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Use it to:</span>
              </div>

              <ul className="space-y-4">
                {currentEngine.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
