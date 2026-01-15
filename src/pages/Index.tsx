import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Download, 
  Printer, 
  Zap, 
  Shield, 
  Phone,
  ChevronRight,
  Activity,
  Cpu,
  Wifi,
  Database,
  Copy,
  Scan,
  FileText,
  Terminal,
  CircuitBoard
} from "lucide-react";

import printerHero from "@/assets/printer-hero.png";
import printerFront from "@/assets/printer-front.png";
import printerDisplay from "@/assets/printer-display.png";
import printerTray from "@/assets/printer-tray.png";

import ProductGallery from "@/components/ProductGallery";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import RentalPlans from "@/components/RentalPlans";
import QuoteForm from "@/components/QuoteForm";
import ProductHeader from "@/components/ProductHeader";

const Index = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const productImages = [
    { src: printerHero, alt: "ProPrint MX-5500 Vista Principale" },
    { src: printerFront, alt: "ProPrint MX-5500 Vista Frontale" },
    { src: printerDisplay, alt: "Display Touchscreen" },
    { src: printerTray, alt: "Cassetti Carta" },
  ];

  const highlights = [
    { icon: Printer, label: "55 ppm", metric: "B/N", desc: "HIGH SPEED" },
    { icon: Copy, label: "50 ppm", metric: "COLOR", desc: "PHOTO QUALITY" },
    { icon: Scan, label: "80 ipm", metric: "SCAN", desc: "DUPLEX AUTO" },
    { icon: Database, label: "6.350", metric: "SHEETS", desc: "MAX CAPACITY" },
  ];

  return (
    <div className="min-h-screen bg-background tech-grid relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <ProductHeader onContactClick={() => setShowQuoteForm(true)} />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 relative z-10">
        <nav className="flex items-center gap-2 text-sm font-mono">
          <span className="text-primary/60 hover:text-primary cursor-pointer transition-colors">HOME</span>
          <ChevronRight className="h-3 w-3 text-primary/40" />
          <span className="text-primary/60 hover:text-primary cursor-pointer transition-colors">DEVICES</span>
          <ChevronRight className="h-3 w-3 text-primary/40" />
          <span className="text-primary font-medium">MX-5500</span>
        </nav>
      </div>

      {/* Hero Product Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Product Gallery - Sticky on desktop */}
          <div className="lg:sticky lg:top-24">
            <ProductGallery images={productImages} />
          </div>

          {/* Product Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Status badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="glass-panel border-success/30 text-success font-mono text-xs tracking-wider px-3 py-1.5">
                <Activity className="h-3 w-3 mr-2 animate-pulse" />
                ONLINE
              </Badge>
              <Badge className="glass-panel border-primary/30 text-primary font-mono text-xs tracking-wider px-3 py-1.5">
                <Cpu className="h-3 w-3 mr-2" />
                A3/A4 CAPABLE
              </Badge>
              <Badge className="glass-panel border-accent/30 text-accent font-mono text-xs tracking-wider px-3 py-1.5">
                <Zap className="h-3 w-3 mr-2" />
                TOP RATED
              </Badge>
            </div>

            {/* Title with tech styling */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                <span className="text-xs font-mono text-primary/60 tracking-[0.3em]">SERIES MX</span>
              </div>
              <h1 className="font-display text-display-sm lg:text-display-lg text-foreground tracking-tight">
                <span className="text-primary neon-text">PRO</span>PRINT
                <span className="block text-primary">MX-5500</span>
              </h1>
              <p className="text-lg font-mono text-muted-foreground">
                ENTERPRISE MULTIFUNCTION LASER SYSTEM
              </p>
            </div>

            {/* Tech Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 tech-card-hover group"
                >
                  <item.icon className="h-5 w-5 text-primary mb-3 group-hover:neon-glow transition-all" />
                  <div className="font-display text-2xl text-foreground tracking-tight">{item.label}</div>
                  <div className="text-xs font-mono text-primary tracking-wider">{item.metric}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="glass-panel rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-primary/60 uppercase tracking-wider">
                <Terminal className="h-4 w-4" />
                <span>System Overview</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                La soluzione completa per uffici che non si accontentano. Stampa, copia, 
                scansiona e invia fax con qualità professionale. Progettata per volumi 
                elevati e massima affidabilità, con tecnologia avanzata che riduce i 
                costi operativi fino al <span className="text-primary font-semibold">30%</span>.
              </p>
            </div>

            {/* Key Features with tech styling */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-primary/60 uppercase tracking-wider">
                <CircuitBoard className="h-4 w-4" />
                <span>Core Features</span>
              </div>
              {[
                { icon: Wifi, text: "Connettività completa: Wi-Fi, Ethernet, USB 3.0, NFC per mobile print" },
                { icon: Shield, text: "Sicurezza enterprise: crittografia dati, autenticazione avanzata" },
                { icon: Cpu, text: "Display touchscreen 10.1\" con interfaccia personalizzabile" },
                { icon: Database, text: "Capacità carta fino a 6.350 fogli con cassetti opzionali" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all group-hover:neon-glow">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed pt-1">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="btn-tech-primary h-14 px-8 text-base gap-2"
                onClick={() => setShowQuoteForm(true)}
              >
                <span className="font-display tracking-wider">REQUEST QUOTE</span>
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                className="btn-tech h-14 px-8 text-base gap-2"
              >
                <Download className="h-5 w-5" />
                <span className="font-mono">DATASHEET.PDF</span>
              </Button>
            </div>

            {/* Rental Teaser */}
            <motion.div 
              className="glass-panel rounded-xl p-6 animated-border relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-xs font-mono text-primary/60 uppercase tracking-wider mb-2">
                    Rental Program Starting From
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-primary neon-text">€89</span>
                    <span className="text-muted-foreground font-mono">/month</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mt-2">
                    TONER + SUPPORT INCLUDED • 36 MONTHS
                  </p>
                </div>
                <Button 
                  className="btn-tech gap-2" 
                  onClick={() => {
                    const tabsElement = document.querySelector('[data-value="rental"]');
                    if (tabsElement) {
                      tabsElement.scrollIntoView({ behavior: 'smooth' });
                      (tabsElement as HTMLElement).click();
                    }
                  }}
                >
                  <span className="font-mono">VIEW PLANS</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="relative py-16 lg:py-24 bg-hero-gradient">
        {/* Decorative lines */}
        <div className="absolute inset-0 tech-grid-dense opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-14 p-1.5 glass-panel rounded-xl border border-primary/20">
                <TabsTrigger 
                  value="overview" 
                  className="h-full px-6 font-mono text-sm tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:neon-glow rounded-lg transition-all"
                >
                  OVERVIEW
                </TabsTrigger>
                <TabsTrigger 
                  value="specs" 
                  className="h-full px-6 font-mono text-sm tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:neon-glow rounded-lg transition-all"
                >
                  TECH SPECS
                </TabsTrigger>
                <TabsTrigger 
                  value="rental" 
                  data-value="rental" 
                  className="h-full px-6 font-mono text-sm tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:neon-glow rounded-lg transition-all"
                >
                  RENTAL
                </TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <TabsContent value="overview" className="mt-0">
                <OverviewSection />
              </TabsContent>

              <TabsContent value="specs" className="mt-0">
                <TechnicalSpecs />
              </TabsContent>

              <TabsContent value="rental" className="mt-0">
                <RentalPlans onRequestQuote={() => setShowQuoteForm(true)} />
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-8">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                System Ready For Deployment
              </span>
            </div>
            
            <h2 className="font-display text-display-sm lg:text-display text-foreground mb-6">
              READY TO <span className="text-primary neon-text">UPGRADE</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Richiedi una consulenza gratuita. I nostri esperti ti aiuteranno a 
              trovare la soluzione perfetta per la tua azienda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-tech-primary h-14 px-10 text-base"
                onClick={() => setShowQuoteForm(true)}
              >
                <span className="font-display tracking-wider">REQUEST QUOTE</span>
              </Button>
              <Button 
                size="lg" 
                className="btn-tech h-14 px-8 text-base gap-2"
              >
                <Phone className="h-5 w-5" />
                <span className="font-mono">02 1234 5678</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel border-t border-primary/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg border border-primary/30 flex items-center justify-center neon-glow">
                <Printer className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display text-xl text-foreground tracking-wide">
                PRINT<span className="text-primary">PRO</span>
              </span>
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              © 2024 PRINTPRO SOLUTIONS // ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>

      {/* Quote Form Modal */}
      <QuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />
    </div>
  );
};

// Overview Section Component
const OverviewSection = () => {
  const features = [
    {
      icon: Printer,
      title: "PRINT QUALITY",
      metric: "1200x1200",
      unit: "DPI",
      description: "Risoluzione superiore per stampe nitide e colori vibranti. Tecnologia laser avanzata per risultati professionali."
    },
    {
      icon: Zap,
      title: "PERFORMANCE",
      metric: "300K",
      unit: "PAGES/MONTH",
      description: "Ciclo mensile massimo. Prima pagina in uscita in 3.9 secondi. Alimentatore automatico da 300 fogli."
    },
    {
      icon: Shield,
      title: "SECURITY",
      metric: "AES-256",
      unit: "ENCRYPTION",
      description: "Autenticazione multi-fattore, crittografia HDD, gestione centralizzata. Conforme a GDPR."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid md:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          className="glass-card p-8 tech-card-hover tech-corners"
        >
          <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
            <feature.icon className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-2 tracking-wider">{feature.title}</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display text-3xl text-primary">{feature.metric}</span>
            <span className="text-xs font-mono text-muted-foreground">{feature.unit}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Index;
