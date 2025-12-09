"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export function SolutionsCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            Ready to Transform Your Video Content?
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Start Creating Smarter Content Today
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join teams already using LuminaCore to turn hours of video into strategic assets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group w-full sm:w-auto"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-border hover:bg-secondary/50 w-full sm:w-auto"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            No credit card required. Start with 3 free video transformations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
