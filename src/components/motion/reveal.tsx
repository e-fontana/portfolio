"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  id?: string;
  immediate?: boolean;
  once?: boolean;
  amount?: number;
  y?: number;
};

type StaggerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  immediate?: boolean;
  once?: boolean;
  amount?: number;
  delayChildren?: number;
  staggerChildren?: number;
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 0.55,
  id,
  immediate = false,
  once = true,
  amount = 0.2,
  y = 24,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      {...(immediate
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once, amount } })}
      transition={{
        delay,
        duration: reduceMotion ? 0.01 : duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export const Stagger = ({
  children,
  id,
  className,
  immediate = false,
  once = true,
  amount = 0.2,
  delayChildren = 0,
  staggerChildren = 0.12,
}: StaggerProps) => {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren,
        staggerChildren: reduceMotion ? 0 : staggerChildren,
      },
    },
  };

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once, amount } })}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
  y = 18,
}: Omit<RevealProps, "delay" | "duration">) => {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : y,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
};
