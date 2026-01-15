import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Download, 
  Printer, 
  Zap, 
  Shield, 
  Phone,
  ArrowRight,
  Sparkles,
  Cpu,
  Wifi,
  Database,
  Copy,
  Scan,
  Layers,
  Bot
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
    { icon: Printer, label: "55 ppm", desc: "Stampa B/N" },
    { icon: Copy, label: "50 ppm", desc: "Stampa Colori" },
    { icon: Scan, label: "80 ipm", desc: "Scansione Duplex" },
    { icon: Database, label: "6.350", desc: "Fogli Max" },
  ];

  return (
    <div className="min-h-screen bg-background mesh-gradient relative overflow-hidden">
      {/* Ambient glow */}
      <div className="glow-ambient min-h-screen">
        <ProductHeader onContactClick={() => setShowQuoteForm(true)} />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
            <span className="text-muted-foreground/50">/</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Dispositivi</span>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-foreground font-medium">MX-5500</span>
          </nav>
        </div>

        {/* Hero Product Section */}
        <section className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Product Gallery */}
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
              {/* AI Badge */}
              <div className="flex flex-wrap gap-3">
                <span className="badge-ai">
                  <Sparkles className="h-3 w-3" />
                  AI-Powered
                </span>
                <span className="badge-ai-success">
                  <Check className="h-3 w-3" />
                  Disponibile
                </span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl lg:text-5xl text-foreground">
                  ProPrint <span className="text-gradient-ai">MX-5500</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Multifunzione Laser Enterprise con intelligenza artificiale integrata
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="card-ai p-5 text-center"
                  >
                    <item.icon className="h-5 w-5 text-primary mx-auto mb-3" />
                    <div className="font-display text-2xl text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="card-ai p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Panoramica Sistema</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  La soluzione completa per uffici che non si accontentano. Stampa, copia, 
                  scansiona e invia fax con qualità professionale. Progettata per volumi 
                  elevati e massima affidabilità, con tecnologia AI che riduce i 
                  costi operativi fino al <span className="text-primary font-medium">30%</span>.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { icon: Wifi, text: "Connettività completa: Wi-Fi, Ethernet, USB 3.0, NFC" },
                  { icon: Shield, text: "Sicurezza enterprise: crittografia AES-256" },
                  { icon: Cpu, text: "Display touchscreen 10.1\" con AI assistant" },
                  { icon: Layers, text: "Capacità carta fino a 6.350 fogli" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-gradient-ai-soft border border-primary/20 flex items-center justify-center shrink-0 group-hover:shadow-glow-primary transition-all">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="btn-ai h-14 px-8"
                  onClick={() => setShowQuoteForm(true)}
                >
                  Richiedi Preventivo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  className="btn-ai-outline h-14 px-8"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Scheda Tecnica
                </Button>
              </div>

              {/* Rental Teaser */}
              <motion.div 
                className="card-ai-featured p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Noleggio operativo a partire da
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl text-gradient-ai">€89</span>
                      <span className="text-muted-foreground">/mese</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Toner + assistenza inclusi • 36 mesi
                    </p>
                  </div>
                  <Button 
                    className="btn-ai-outline"
                    onClick={() => {
                      const tabsElement = document.querySelector('[data-value="rental"]');
                      if (tabsElement) {
                        tabsElement.scrollIntoView({ behavior: 'smooth' });
                        (tabsElement as HTMLElement).click();
                      }
                    }}
                  >
                    Vedi Piani
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="relative py-20 lg:py-28">
          <div className="container mx-auto px-4 relative z-10">
            <Tabs defaultValue="overview" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-14 p-1.5 glass-strong rounded-2xl">
                  <TabsTrigger 
                    value="overview" 
                    className="h-full px-8 text-sm font-medium data-[state=active]:bg-gradient-ai data-[state=active]:text-white data-[state=active]:shadow-glow-primary rounded-xl transition-all"
                  >
                    Panoramica
                  </TabsTrigger>
                  <TabsTrigger 
                    value="specs" 
                    className="h-full px-8 text-sm font-medium data-[state=active]:bg-gradient-ai data-[state=active]:text-white data-[state=active]:shadow-glow-primary rounded-xl transition-all"
                  >
                    Specifiche
                  </TabsTrigger>
                  <TabsTrigger 
                    value="rental" 
                    data-value="rental" 
                    className="h-full px-8 text-sm font-medium data-[state=active]:bg-gradient-ai data-[state=active]:text-white data-[state=active]:shadow-glow-primary rounded-xl transition-all"
                  >
                    Noleggio
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
        <section className="relative py-24 lg:py-32">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="badge-ai mb-8 inline-flex">
                <Sparkles className="h-3 w-3" />
                Pronto per il deployment
              </div>
              
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
                Pronto per fare il <span className="text-gradient-ai">prossimo passo</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Richiedi una consulenza gratuita. I nostri esperti ti aiuteranno a 
                trovare la soluzione perfetta per la tua azienda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="btn-ai h-14 px-10"
                  onClick={() => setShowQuoteForm(true)}
                >
                  Richiedi Preventivo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  className="btn-ai-outline h-14 px-8"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  02 1234 5678
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-strong border-t border-border py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-ai flex items-center justify-center">
                  <Printer className="h-5 w-5 text-white" />
                </div>
                <span className="font-display text-xl text-foreground">
                  Print<span className="text-gradient-ai">Pro</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 PrintPro Solutions. Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </footer>

        {/* Quote Form Modal */}
        <QuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />
      </div>
    </div>
  );
};

// Overview Section Component
const OverviewSection = () => {
  const features = [
    {
      icon: Printer,
      title: "Qualità di Stampa",
      metric: "1200x1200 DPI",
      description: "Risoluzione superiore per stampe nitide e colori vibranti. Tecnologia laser avanzata per risultati professionali."
    },
    {
      icon: Zap,
      title: "Performance",
      metric: "300K pag/mese",
      description: "Ciclo mensile massimo. Prima pagina in uscita in 3.9 secondi. Alimentatore automatico da 300 fogli."
    },
    {
      icon: Shield,
      title: "Sicurezza",
      metric: "AES-256",
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
          className="card-ai p-8"
        >
          <div className="h-14 w-14 rounded-2xl bg-gradient-ai-soft border border-primary/20 flex items-center justify-center mb-6">
            <feature.icon className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
          <p className="text-gradient-ai font-display text-2xl mb-4">{feature.metric}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Index;
