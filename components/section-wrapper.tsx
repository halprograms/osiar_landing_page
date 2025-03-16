"use client"

import { type ReactNode, useRef, useEffect, useState } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"

type SlideDirection = "left" | "right" | "up" | "down" | "none"

interface SectionWrapperProps {
  children: ReactNode
  direction?: SlideDirection
  delay?: number
  className?: string
  once?: boolean
}

export function SectionWrapper({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: SectionWrapperProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Define variants for different slide directions
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    } as Variant,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for a smooth entrance
        delay: delay,
      },
    } as Variant,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          controls.start("visible")
          setIsInView(true)

          // If once is true, disconnect the observer after animation
          if (once && entry.isIntersecting) {
            observer.disconnect()
          }
        } else if (!entry.isIntersecting && !once && isInView) {
          controls.start("hidden")
          setIsInView(false)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15, // Trigger when 15% of the element is visible
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, isInView, once])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

