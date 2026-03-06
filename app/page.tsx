"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { translations, type Language } from "../lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [language, setLanguage] = useState<Language>("th");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const openEmail = () => {
    const to = "matchchemical@gmail.com";
    const subject =
      language === "th"
        ? "ขอใบเสนอราคา / ขอคำปรึกษา - MatchChemical"
        : "Request a quotation / consultation - MatchChemical";
    const body =
      language === "th"
        ? [
            "สวัสดี MatchChemical",
            "",
            "ชื่อ:",
            "บริษัท:",
            "เบอร์ติดต่อ:",
            "รายละเอียดที่ต้องการให้ช่วย:",
            "",
            "ขอบคุณครับ/ค่ะ",
          ].join("\n")
        : [
            "Hello MatchChemical,",
            "",
            "Name:",
            "Company:",
            "Phone:",
            "How can we help:",
            "",
            "Thank you.",
          ].join("\n");

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <header>
        <nav
          className="relative z-10 bg-background/95 backdrop-blur-xl border-b border-border"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center py-4 lg:py-6">
              <div className="flex items-center space-x-2">
                <Image
                  src="/matchchemical_logo_removebg.png"
                  alt="MatchChemical Logo"
                  width={45}
                  height={45}
                  className="rounded-lg"
                />
                <div className="text-foreground font-bold text-lg lg:text-xl tracking-tight">
                  {t.header.companyName}
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
                >
                  {t.nav.home}
                </a>
                <a
                  href="#about"
                  className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
                >
                  {t.nav.about}
                </a>
                <a
                  href="#services"
                  className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#portfolio"
                  className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
                >
                  {t.nav.portfolio}
                </a>
                <a
                  href="#contact"
                  className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
                >
                  {t.nav.contact}
                </a>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-4">
                <ThemeToggle />
                <button
                  onClick={() => setLanguage(language === "th" ? "en" : "th")}
                  className="bg-secondary/50 backdrop-blur-sm border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-all duration-300 text-sm"
                  aria-label="Toggle language"
                >
                  {language === "th" ? "EN" : "TH"}
                </button>
                <button className="bg-primary text-primary-foreground px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-sm">
                  {t.nav.contactUs}
                </button>
                <a
                  href="https://sws.matchchemical.co/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-border text-foreground px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  {t.nav.iot}
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden bg-secondary/50 backdrop-blur-sm border border-border text-foreground p-2 rounded-lg hover:bg-secondary transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="lg:hidden bg-secondary/50 backdrop-blur-xl border border-border rounded-2xl mt-4 p-4"
              >
                <div className="flex flex-col space-y-3">
                  <a
                    href="#home"
                    className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.home}
                  </a>
                  <a
                    href="#about"
                    className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.about}
                  </a>
                  <a
                    href="#services"
                    className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.services}
                  </a>
                  <a
                    href="#portfolio"
                    className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.portfolio}
                  </a>
                  <a
                    href="#contact"
                    className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.contact}
                  </a>
                  <a
                    href="https://sws.matchchemical.co/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.iot}
                  </a>
                  <div className="flex items-center space-x-3 pt-3 border-t border-border">
                    <ThemeToggle />
                    <button
                      onClick={() => {
                        setLanguage(language === "th" ? "en" : "th");
                        setMobileMenuOpen(false);
                      }}
                      className="bg-secondary/50 backdrop-blur-sm border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-all duration-300 text-sm"
                      aria-label="Toggle language"
                    >
                      {language === "th" ? "EN" : "TH"}
                    </button>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      {t.nav.contactUs}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative z-10 py-32 px-6"
          role="main"
          aria-labelledby="hero-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-secondary backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="text-foreground/90 text-sm font-medium">
                    {t.hero.badge}
                  </span>
                </div>
                <h1
                  id="hero-title"
                  className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                >
                  {t.hero.title}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {" "}
                    {t.hero.titleHighlight}
                  </span>
                  <br />
                  {t.hero.subtitle}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Explore portfolio"
                  >
                    {t.hero.explorePortfolio}
                  </motion.button>
                  <motion.button
                    className="border-2 border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Get free consultation"
                  >
                    {t.hero.freeConsultation}
                  </motion.button>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  className="bg-card backdrop-blur-xl rounded-3xl p-8 border border-border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {t.hero.cards.map((card, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6 border border-border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-4xl mb-2" aria-hidden="true">
                          {card.icon}
                        </div>
                        <h3 className="text-foreground font-semibold mb-1">
                          {card.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {card.subtitle}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative z-10 py-16 px-6"
          aria-labelledby="stats-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-card backdrop-blur-xl rounded-3xl p-8 border border-border">
              <h2 id="stats-title" className="sr-only">
                Company Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {t.stats.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                      {item.value}
                    </div>
                    <div className="text-muted-foreground">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative z-10 py-20 px-6"
          aria-labelledby="about-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="about-title"
                className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
              >
                {t.about.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.about.subtitle}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-card backdrop-blur-xl rounded-2xl p-6 border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t.about.vision}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.about.visionText}
                  </p>
                </div>
                <div className="bg-card backdrop-blur-xl rounded-2xl p-6 border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t.about.mission}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.about.missionText}
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 border border-border">
                <div className="space-y-4">
                  {t.about.highlights.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-2xl">✓</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="relative z-10 py-20 px-6"
          aria-labelledby="services-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="services-title"
                className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
              >
                {t.services.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="group bg-card backdrop-blur-xl rounded-2xl p-8 border border-border hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl" aria-hidden="true">
                    🧪
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t.services.chemical.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.services.chemical.description}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {t.services.chemical.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="group bg-card backdrop-blur-xl rounded-2xl p-8 border border-border hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl" aria-hidden="true">
                    🔬
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t.services.analysis.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.services.analysis.description}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {t.services.analysis.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="group bg-card backdrop-blur-xl rounded-2xl p-8 border border-border hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl" aria-hidden="true">
                    🏭
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t.services.solutions.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.services.solutions.description}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {t.services.solutions.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="relative z-10 py-20 px-6"
          aria-labelledby="portfolio-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="portfolio-title"
                className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
              >
                {t.portfolio.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.portfolio.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.portfolio.items.map((item, index) => (
                <article
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card backdrop-blur-xl border border-border hover:bg-card/80 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-foreground font-semibold text-lg">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition">
                      <span>{t.portfolio.viewDetails}</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative z-10 py-20 px-6"
          aria-labelledby="contact-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="contact-title"
                className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
              >
                {t.contact.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.contact.subtitle}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-card backdrop-blur-xl rounded-2xl p-8 border border-border text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-hidden="true">
                    📍
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t.contact.address}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t.contact.addressText}
                  <br />
                  <button
                    className="text-primary hover:underline"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/2tYokGFksy577RyV7",
                        "_blank"
                      )
                    }
                  >
                    {t.contact.mapLink}
                  </button>
                </p>
              </div>
              <div className="bg-card backdrop-blur-xl rounded-2xl p-8 border border-border text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-hidden="true">
                    📞
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t.contact.phone}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t.contact.phoneText}
                </p>
              </div>
              <div className="bg-card backdrop-blur-xl rounded-2xl p-8 border border-border text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-hidden="true">
                    ✉️
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t.contact.email}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t.contact.emailText}
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={openEmail}
                type="button"
              >
                {t.contact.sendMessage}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-background/95 backdrop-blur-xl py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/matchchemical_logo_removebg.png"
                  alt="MatchChemical Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div className="text-foreground font-bold text-xl">
                  {t.footer.fullCompanyName}
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">
                {t.footer.services}
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {t.footer.links.services.map((label, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-foreground transition">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">
                {t.footer.about}
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {t.footer.links.about.map((label, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-foreground transition">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">
                {t.footer.contact}
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {t.footer.links.contact.map((label, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-foreground transition">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>
    </>
  );
}
