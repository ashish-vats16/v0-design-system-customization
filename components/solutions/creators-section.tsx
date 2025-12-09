"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, RefreshCcw, Calendar, Layers, ArrowRight, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: RefreshCcw,
    text: "Repurpose old webinars, live sessions, and podcasts",
  },
  {
    icon: Calendar,
    text: "Keep your social channels active without burning out",
  },
  {
    icon: Sparkles,
    text: "Test multiple hooks and angles quickly",
  },
  {
    icon: Layers,
    text: "Turn one recording into a week (or month) of content",
  },
]

export function CreatorsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              Solution 1
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Creators & Solo Founders
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Turn your backlog into a content machine.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl glass hover:bg-secondary/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group">
              I'm a creator – show me more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-8 glass-strong rounded-3xl p-8 flex flex-col justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Content Creator</h3>
                <p className="text-muted-foreground">Transform your video library into engaging content</p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="text-2xl font-bold text-primary">10x</div>
                    <div className="text-sm text-muted-foreground">More Content</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="text-2xl font-bold text-accent">80%</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full glass-strong"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-foreground">Solo Founder</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
