"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

function useTypewriter(text: string, speed: number = 50) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), 600)
    return () => clearTimeout(delayTimer)
  }, [])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [started, displayed, text, speed])

  return displayed
}

const techTags = ["Python", "Kedro", "scikit-learn", "MLflow"]

export function Hero() {
  const headline = "Data Scientist & ML Engineer"
  const displayed = useTypewriter(headline)

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {displayed}
            <span
              className={`${
                displayed === headline ? "opacity-0" : "animate-pulse text-emerald-500"
              }`}
            >
              |
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="max-w-[600px] leading-relaxed text-muted-foreground">
            Building production ML systems with a focus on interpretability and
            measurable impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume">Download Resume</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-6"
        >
          {techTags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
