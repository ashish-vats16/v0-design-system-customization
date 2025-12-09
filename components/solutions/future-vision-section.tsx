"use client"

import { motion } from "framer-motion"
import { Cpu, MessageSquare, Search, Clock, Sparkles, ArrowRight } from "lucide-react"

const queries = [
  {
    icon: MessageSquare,
    text: '"Show me 3 clips where customers talk about onboarding pain."',
  },
  {
    icon: Search,
    text: '"Summarize everything we\'ve said about feature X in customer webinars."',
  },
  {
    icon: Clock,
    text: '"Give me a 10-minute recap of this 3-hour training."',
  },
]

export function FutureVisionSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            <Cpu className="w-4 h-4" />
            Future Vision
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Where we're going
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LuminaCore is moving toward a <span className="text-primary font-semibold">Video LLM for enterprises</span>{" "}
            — where you can ask:
          </p>
        </motion.div>

        {/* Query Cards */}
        <div className="space-y-4 mb-16">
          {queries.map((query, index) => (
            <motion.div
              key={query.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-6 hover:bg-secondary/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <query.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-foreground font-medium italic">{query.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-strong rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Today */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-sm font-medium text-muted-foreground mb-4">
                Today
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Campaign Engine + Summarization</h3>
              <p className="text-muted-foreground">
                Turn long videos into actionable content and campaigns automatically.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowRight className="w-12 h-12 text-primary/50" />
              </motion.div>
            </div>

            {/* Divider for mobile */}
            <div className="md:hidden flex items-center justify-center py-4">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowRight className="w-8 h-8 text-primary/50 rotate-90" />
              </motion.div>
            </div>

            {/* Tomorrow */}
            <div className="text-center md:text-left md:col-start-1 md:row-start-2 md:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-sm font-medium text-primary mb-4">
                <Sparkles className="w-4 h-4" />
                Tomorrow
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Video as a Searchable, Strategic Asset
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                Query your entire video library like a database. Find insights, generate reports, and unlock the full
                value of your video content.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
