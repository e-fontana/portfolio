"use client";
import { useLanguage } from "@/app/contexts/LanguageContexts";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavItem } from "./item";
import { LanguageSwitch } from "./language-switch";
import { Logo } from "../logo";

export const Nav = () => {
  const { translations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { title: translations("nav.profile"), href: "#profile" },
    { title: translations("nav.about"), href: "#about" },
    { title: translations("nav.projects"), href: "#projects" },
    { title: translations("nav.skills"), href: "#skills" },
    { title: translations("nav.contact"), href: "#contact" },
  ];

  return (
    <>
      <div className="hidden items-center justify-end gap-8 lg:flex">
        {items.map(({ title, href }) => (
          <NavItem key={href} title={title} href={href} />
        ))}
        <LanguageSwitch />
      </div>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-zinc-200 lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-label={translations("nav.open")}
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.button
              type="button"
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsOpen(false)}
              aria-label={translations("nav.close")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[280px] flex-col gap-8 bg-zinc-950 px-6 py-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-zinc-100">
                  <Logo text={translations("nav.menu")} />
                </span>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-zinc-200"
                  onClick={() => setIsOpen(false)}
                  aria-label={translations("nav.close")}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                className="flex flex-col items-start gap-5"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.04,
                      delayChildren: 0.05,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.03,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {items.map(({ title, href }) => (
                  <motion.div
                    key={href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 16 },
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <NavItem
                      title={title}
                      href={href}
                      className="text-lg"
                      onClick={() => setIsOpen(false)}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-auto border-t border-zinc-800 pt-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.18, ease: "easeOut", delay: 0.08 }}
              >
                <LanguageSwitch />
              </motion.div>
            </motion.aside>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
