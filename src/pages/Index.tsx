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
  Wifi,
  Copy,
  Scan,
  Layers
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
    { icon: Layers, label: "6.350", desc: "Fogli Max" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ProductHeader onContactClick={() => setShowQuoteForm(true)} />

      {/* Breadcrumb */}
      <div className="section-container py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-primary transition-colors">Dispositivi</a>
          <span>/</span>
          <span className="text-foreground font-medium">MX-5500</span>
        </nav>
      </div>

      {/* Hero Product Section */}
      <section className="section-container py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Product Gallery */}
          <div className="lg:sticky lg:top-24">
            <ProductGallery images={productImages} />
          </div>

          {/* Product Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="badge-mpf">Noleggio Operativo</span>
              <span className="badge-success">
                <Check className="h-3 w-3" />
                Disponibile
              </span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                ProPrint MX-5500
              </h1>
              <p className="text-lg text-muted-foreground">
                Multifunzione Laser A3 per uffici ad alto volume
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="card-mpf p-4 text-center"
                >
                  <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="card-mpf p-5 space-y-3">
              <h3 className="font-semibold text-foreground">Panoramica</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                La soluzione completa per uffici che non si accontentano. Stampa, copia, 
                scansiona e invia fax con qualità professionale. Progettata per volumi 
                elevati e massima affidabilità, con funzionalità avanzate che riducono i 
                costi operativi fino al <span className="text-primary font-semibold">30%</span>.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                { icon: Wifi, text: "Connettività completa: Wi-Fi, Ethernet, USB 3.0, NFC" },
                { icon: Shield, text: "Sicurezza enterprise: crittografia AES-256" },
                { icon: Zap, text: "Display touchscreen 10.1\" intuitivo" },
                { icon: Layers, text: "Capacità carta fino a 6.350 fogli" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                size="lg" 
                className="btn-mpf h-12 px-8 rounded"
                onClick={() => setShowQuoteForm(true)}
              >
                Richiedi Preventivo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="btn-mpf-outline h-12 px-8 rounded"
              >
                <Download className="h-4 w-4 mr-2" />
                Scheda Tecnica
              </Button>
            </div>

            {/* Rental Teaser */}
            <motion.div 
              className="card-mpf-featured p-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Noleggio operativo a partire da
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">€89</span>
                    <span className="text-muted-foreground">/mese</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Toner + assistenza inclusi • 36 mesi
                  </p>
                </div>
                <Button 
                  variant="outline"
                  className="btn-mpf-outline"
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
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="h-12 p-1 bg-card border border-border rounded-lg">
                <TabsTrigger 
                  value="overview" 
                  className="h-full px-6 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded transition-all"
                >
                  Panoramica
                </TabsTrigger>
                <TabsTrigger 
                  value="specs" 
                  className="h-full px-6 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded transition-all"
                >
                  Specifiche
                </TabsTrigger>
                <TabsTrigger 
                  value="rental" 
                  data-value="rental" 
                  className="h-full px-6 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded transition-all"
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
      <section className="py-16 lg:py-20 bg-card border-t border-border">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Pronto per fare il prossimo passo?
            </h2>
            <p className="text-muted-foreground mb-8">
              Richiedi una consulenza gratuita. I nostri esperti ti aiuteranno a 
              trovare la soluzione perfetta per la tua azienda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                className="btn-mpf h-12 px-8"
                onClick={() => setShowQuoteForm(true)}
              >
                Richiedi Preventivo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="btn-mpf-outline h-12 px-6"
              >
                <Phone className="h-4 w-4 mr-2" />
                02 1234 5678
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <Printer className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">
                MPF S.p.A.
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 MPF S.p.A. Tutti i diritti riservati. <a href="https://www.mpf.it" className="text-primary hover:underline">www.mpf.it</a>
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
      icon: Layers,
      title: "Target Ideale",
      metric: "Uffici 20-100 utenti",
      description: "Studi professionali, PMI e aziende con volumi di stampa medio-alti. Perfetto per ambienti condivisi che richiedono affidabilità e performance."
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="card-mpf-hover p-6"
        >
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <feature.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
          <p className="text-2xl font-bold text-primary mb-3">{feature.metric}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Index;