"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Megaphone, Zap, Globe, Users, Clock, TrendingUp, Gift, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Megaphone,
    text: "Turn launch events and customer stories into ongoing campaigns",
  },
  {
    icon: Globe,
    text: "Produce platform-specific content without a large editing team",
  },
  {
    icon: Users,
    text: "Maintain brand consistency across markets and regions",
  },
  {
    icon: Zap,
    text: "Save editors and marketers from manual clipping and rewriting",
  },
]

const valueProps = [
  { icon: Clock, text: "Reduce campaign prep time from weeks to days" },
  { icon: TrendingUp, text: "Scale content output without scaling headcount" },
  { icon: Gift, text: "Give clients more value from every shoot or webinar" },
]

export function MarketingSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-8 glass-strong rounded-3xl p-8 flex flex-col justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <Megaphone className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Marketing Team</h3>
                <p className="text-muted-foreground">Ship campaigns faster with AI-powered content</p>

                {/* Value Props Mini Cards */}
                <div className="mt-6 space-y-3">
                  {valueProps.map((prop, index) => (
                    <motion.div
                      key={prop.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50"
                    >
                      <prop.icon className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{prop.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full glass-strong"
              >
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Agency Ready</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-6">
              <Megaphone className="w-4 h-4" />
              Solution 2
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Marketing Teams & Agencies
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ship campaigns faster. Reuse content smarter.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl glass hover:bg-secondary/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 group">
              See Marketing Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
