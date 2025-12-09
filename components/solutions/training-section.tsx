"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  FileText,
  Search,
  CheckSquare,
  Globe,
  BookOpen,
  Headphones,
  Shield,
  Scale,
  ArrowRight,
} from "lucide-react"

const features = [
  {
    icon: FileText,
    text: "Provide quick recaps of long sessions",
  },
  {
    icon: Search,
    text: "Let employees search by topic instead of rewatching everything",
  },
  {
    icon: CheckSquare,
    text: "Highlight action items, decisions, and FAQs",
  },
  {
    icon: Globe,
    text: "Support teams across languages and time zones",
  },
]

const useCases = [
  { icon: BookOpen, text: "Internal training libraries" },
  { icon: Headphones, text: "Customer education content" },
  { icon: Scale, text: "Sales enablement content" },
  { icon: Shield, text: "Compliance and policy updates" },
]

export function TrainingSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

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
              <GraduationCap className="w-4 h-4" />
              Solution 3
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Training, Education & Internal Comms
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Make trainings and town halls actually useful after they're over.
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
              Explore Training Solutions
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
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Use Cases</h3>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase.text}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300 cursor-pointer group"
                    >
                      <useCase.icon className="w-6 h-6 text-primary mb-2 group-hover:text-accent transition-colors" />
                      <p className="text-sm text-foreground font-medium">{useCase.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full glass-strong"
              >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Enterprise Ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
