import { useState, useEffect, useRef } from "react";
import {
  Zap,
  LayoutDashboard,
  BarChart3,
  Menu,
  X,
  ArrowRight,
  Linkedin,
  Mail,
} from "lucide-react";

// ============================================
// NAVIGATION COMPONENT
// ============================================
function Navigation({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to add blur effect to nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "nav-blur" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="font-mono font-semibold text-xl text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              HK
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className={`nav-link ${activeSection === "services" ? "active" : ""}`}
              >
                Services
              </a>
              <a
                href="#work"
                className={`nav-link ${activeSection === "work" ? "active" : ""}`}
              >
                Work
              </a>
              <a
                href="#contact"
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              >
                Contact
              </a>
            </div>

            {/* CTA Button (Desktop) */}
            <a
              href="https://calendly.com/hrishikesh"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block btn-primary text-sm"
            >
              Book a Call
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-mono font-semibold text-xl text-indigo-500">
              HK
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-4">
          <a
            href="#services"
            onClick={handleNavClick}
            className="mobile-menu-link"
          >
            Services
          </a>
          <a href="#work" onClick={handleNavClick} className="mobile-menu-link">
            Work
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mobile-menu-link"
          >
            Contact
          </a>
          <a
            href="https://calendly.com/hrishikesh"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mobile-menu-link text-indigo-500"
          >
            Book a Call
          </a>
        </div>
      </div>
    </>
  );
}

// ============================================
// HERO SECTION COMPONENT
// ============================================
function HeroSection() {
  const [animatedWords, setAnimatedWords] = useState([]);
  const headline = "The Fractional Co-Founder for Early-Stage Startups";
  const words = headline.split(" ");

  // Animate words on mount
  useEffect(() => {
    words.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedWords((prev) => [...prev, index]);
      }, 100 * index);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
      {/* Floating Gradient Orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main Headline with Word Animation */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-3 ${
                animatedWords.includes(index) ? "word-animate" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Sub-tagline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          I take your product from whiteboard to deployed MVP — handling
          full-stack engineering, product strategy, and data infrastructure.
          Without the equity dilution.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#work" className="btn-primary flex items-center gap-2">
            See My Work
            <ArrowRight size={18} />
          </a>
          <a
            href="https://calendly.com/hrishikeshkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Book a 30-min Call
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <div className="trust-badge">PM @ Fortune 100</div>
          <div className="trust-badge">Ex-Carrier R&D</div>
          <div className="trust-badge">MBA @ IIM Lucknow</div>
          <div className="trust-badge">Full-Stack Builder</div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SERVICES SECTION COMPONENT
// ============================================
function ServicesSection() {
  const services = [
    {
      icon: Zap,
      name: "The MVP Sprint",
      description:
        "End-to-end product build in 4–6 weeks. PRD, UI/UX, full-stack development (React/PHP/SQL), deployment, and analytics instrumentation. Demo-ready for your investors.",
      price: "Starting at $4,500",
    },
    {
      icon: LayoutDashboard,
      name: "Fractional Head of Product",
      description:
        "Embedded PM leadership for startups that need product thinking without a full-time hire. Sprint planning, roadmap ownership, KPI dashboards, and investor-ready reporting.",
      price: "From $2,500/month",
    },
    {
      icon: BarChart3,
      name: "Data & Growth Audit",
      description:
        "A 2-week strategic deep-dive into your analytics gaps, funnel instrumentation, and growth levers. Delivered as a 20-page actionable roadmap.",
      price: "Fixed at $1,500",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Three ways I embed with early-stage startups and ship outcomes
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-8 fade-in-section"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6">
                <service.icon className="text-indigo-500" size={24} />
              </div>

              {/* Service Name */}
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price */}
              <p className="text-indigo-400 font-medium mb-4">
                {service.price}
              </p>

              {/* CTA Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors group"
              >
                {"Let's Talk"}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CASE STUDIES SECTION COMPONENT
// ============================================
function CaseStudiesSection() {
  const projects = [
    {
      label: "Full-Stack Product Build",
      title: "Campus Social Platform",
      description:
        "Architected and shipped a campus-exclusive social platform for the IIM Lucknow MBA community from scratch — handling authentication, real-time feed logic, voting systems, and admin portals. Built with React, PHP, and SQL.",
      tags: ["React", "PHP", "SQL", "Product Design"],
      accent: "indigo",
    },
    {
      label: "Fortune 100 · Product Management Internship",
      title: "Enterprise Data Infrastructure @ American Express",
      description:
        "Designed campaign tracking and data attribution infrastructure for a global financial services platform processing millions of user events. Worked within SAFe Agile across cross-functional engineering and product teams.",
      tags: ["Data Strategy", "Mixpanel", "Agile", "AmEx"],
      accent: "emerald",
    },
    {
      label: "Engineering Leadership Program",
      title: "AI-Driven Product Development @ Carrier",
      description:
        "Led development of AI-driven tools deployed across global engineering teams as part of a 2-year rotational engineering leadership program. Focused on product modeling, software excellence, and measurable operational impact.",
      tags: ["AI/ML", "Product Modeling", "Enterprise", "Carrier"],
      accent: "indigo",
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-zinc-400 text-lg">Real products. Real outcomes.</p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`case-study-card accent-${project.accent} p-8 fade-in-section ${
                index === 2 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Label */}
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  project.accent === "emerald"
                    ? "text-emerald-400"
                    : "text-indigo-400"
                }`}
              >
                {project.label}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold mt-3 mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CREDIBILITY BAR COMPONENT
// ============================================
function CredibilityBar() {
  const credentials = [
    "American Express",
    "Carrier",
    "IIM Lucknow",
    "GitHub",
    "Agile/SAFe",
  ];

  return (
    <section className="credibility-bar py-8 fade-in-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-zinc-500">
          <span className="text-sm">Trusted frameworks from:</span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {credentials.map((credential, index) => (
              <span key={index} className="flex items-center gap-4">
                <span className="text-zinc-400 font-medium">{credential}</span>
                {index < credentials.length - 1 && (
                  <span className="hidden md:inline text-zinc-700">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION COMPONENT
// ============================================
function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative contact-glow">
      <div className="max-w-3xl mx-auto px-6 text-center fade-in-section">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {"Let's Build Something"}
        </h2>

        {/* Sub-text */}
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Currently accepting select engagements for Q3 2026. If {"you're"} a
          seed or Series A founder moving fast, {"let's"} talk.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://calendly.com/hrishikeshkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            Book a 30-min Strategy Call
            <ArrowRight size={18} />
          </a>
          <a
            href="mailto:hrishikeshkumar16@gmail.com"
            className="btn-secondary flex items-center gap-2"
          >
            <Mail size={18} />
            hrishikeshkumar@email.com
          </a>
        </div>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/glint-hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-colors"
        >
          <Linkedin size={20} />
          <span className="text-sm">Connect on LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <a
            href="https://glint-hk.github.io/HrishikeshKumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <span>© {new Date().getFullYear()} Hrishikesh Kumar</span>
          </a>

          <span>Designed & built by Hrishikesh Kumar</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  const [activeSection, setActiveSection] = useState("");

  // Intersection Observer for scroll animations and active section tracking
  useEffect(() => {
    // Animate sections on scroll
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Track active section for nav highlighting
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    // Observe all fade-in sections
    document.querySelectorAll(".fade-in-section").forEach((el) => {
      fadeObserver.observe(el);
    });

    // Observe main sections for nav
    ["services", "work", "contact"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      fadeObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <CredibilityBar />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
