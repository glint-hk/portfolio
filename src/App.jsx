import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Bot,
  Rocket,
  Workflow,
  BarChart3,
  CloudCog,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";

// ============================================
// DATA: THE 5 PREMIUM OFFERINGS
// ============================================
const services = [
  {
    id: "01",
    title: "AI Product Build & Integration",
    icon: Bot,
    description:
      "Operationalize AI at scale. From product audit to deployed LLM architecture, giving your startup a tangible AI moat.",
    deliverables: [
      "Custom LLM Architecture",
      "RAG Pipelines",
      "Investor-Ready Analytics",
    ],
    price: "$4k - $6k / Sprint",
    featured: true,
  },
  {
    id: "02",
    title: "MVP Build Sprint",
    icon: Rocket,
    description:
      "Whiteboard to deployed product in 4-6 weeks. Full-stack execution combined with product strategy to hit your next funding milestone.",
    deliverables: [
      "React/PHP/SQL Stack",
      "PRD & Wireframes",
      "Event Tracking Setup",
    ],
    price: "$2.5k - $4k / Project",
    featured: false,
  },
  {
    id: "03",
    title: "Fractional Head of Product",
    icon: Workflow,
    description:
      "Embedded PM leadership. I translate abstract business goals into precise engineering tickets and manage the agile sprint cycles.",
    deliverables: ["Roadmap Ownership", "Sprint Planning", "KPI Dashboards"],
    price: "From $1.5k / mo",
    featured: false,
  },
  {
    id: "04",
    title: "Data Infrastructure",
    icon: BarChart3,
    description:
      "Enterprise-grade tracking. Stop flying blind and start capturing the funnel metrics that Series A investors demand.",
    deliverables: [
      "Mixpanel/PostHog Setup",
      "Funnel Instrumentation",
      "Growth Audit",
    ],
    price: "Fixed $1.5k",
    featured: false,
  },
  {
    id: "05",
    title: "Cloud & DevOps Setup",
    icon: CloudCog,
    description:
      "Bulletproof infrastructure. Automated CI/CD, scalable environments, and security hardening led by a GCP Certified Architect.",
    deliverables: [
      "CI/CD Pipelines",
      "Environment Setup",
      "Security Hardening",
    ],
    price: "$1.2k - $2k / Project",
    featured: false,
  },
];

// ============================================
// ANIMATION VARIANTS (Framer Motion)
// ============================================
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Dark Mode Toggle
  // Replace your existing isDark state and useEffect with this:
  const [isDark, setIsDark] = useState(() => {
    // Check local storage first, fallback to system preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true; // Default to dark mode
  });

  // Handle Dark Mode Toggle & Persistence
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Handle Scroll state for Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 font-sans transition-colors duration-500 selection:bg-indigo-500/30">
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-slate-200 dark:border-zinc-800 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            Hrishikesh
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Expertise
            </a>
            <a
              href="#process"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Process
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="https://calendly.com/hrishikeshkumar/30min"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-zinc-950 text-sm font-medium rounded-full hover:scale-105 transition-transform"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsDark(!isDark)}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              Accepting Engagements for Q3 2026
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8"
            >
              The Fractional Co-Founder <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400">
                for Early-Stage Startups.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed"
            >
              I bridge the gap between executive product strategy and deep
              technical execution. From whiteboard concepts to deployed MVP,
              without the equity dilution.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#services"
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-zinc-950 font-medium rounded-full hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Explore Services <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-zinc-500 ml-4 border-l border-slate-300 dark:border-zinc-800 pl-4">
                <span>Ex-Carrier R&D</span>
                <span>•</span>
                <span>PM @ Fortune 100</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="py-32 bg-white dark:bg-zinc-900/50 border-t border-slate-200 dark:border-zinc-800/50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Core Offerings
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-xl">
              High-leverage engagements designed specifically for seed and
              Series A founders moving fast.
            </p>
          </motion.div>

          {/* Grid Layout: 2 featured on top, 3 standard on bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            <AnimatePresence>
              {services.map((service, index) => {
                const Icon = service.icon;
                const isFeatured = service.featured || index === 1; // Make first two featured sizing

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className={`group relative p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/50 hover:bg-white dark:hover:bg-zinc-900 overflow-hidden transition-colors ${
                      isFeatured ? "lg:col-span-3" : "lg:col-span-2"
                    }`}
                  >
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent dark:from-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-zinc-900 flex items-center justify-center border border-indigo-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                          {service.id}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-emerald-500"
                            />
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-slate-200 dark:border-zinc-800 flex justify-between items-center mt-auto">
                        <span className="font-medium text-indigo-600 dark:text-indigo-400">
                          {service.price}
                        </span>
                        <a
                          href="#contact"
                          className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-slate-900 dark:text-white"
                        >
                          <ArrowRight size={20} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FOOTER / CTA */}
      <footer className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-8"
          >
            Stop hiring separate strategists <br /> and developers.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://calendly.com/hrishikeshkumar/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/20 transition-all"
            >
              Book a Strategy Call <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
