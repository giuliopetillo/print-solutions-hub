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
  Star,
  Truck,
  Headphones,
  Copy,
  Scan,
  FileText
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
    { icon: Printer, label: "55 ppm B/N", desc: "Alta velocità" },
    { icon: Copy, label: "50 ppm Colore", desc: "Qualità foto" },
    { icon: Scan, label: "80 ipm", desc: "Scansione duplex" },
    { icon: FileText, label: "A3/A4", desc: "Multi-formato" },
  ];

  const trustBadges = [
    { icon: Truck, text: "Consegna 24/48h" },
    { icon: Shield, text: "Garanzia 3 anni" },
    { icon: Headphones, text: "Assistenza dedicata" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ProductHeader onContactClick={() => setShowQuoteForm(true)} />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
          <ChevronRight className="h-4 w-4" />
          <span className="hover:text-foreground cursor-pointer transition-colors">Stampanti</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">ProPrint MX-5500</span>
        </nav>
      </div>

      {/* Hero Product Section */}
      <section className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Product Gallery - Sticky on desktop */}
          <div className="lg:sticky lg:top-8">
            <ProductGallery images={productImages} />
          </div>

          {/* Product Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-success/10 text-success border-0 font-medium">
                <Check className="h-3 w-3 mr-1" />
                Disponibile
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary font-medium">
                Multifunzione A3/A4
              </Badge>
              <Badge className="bg-accent/10 text-accent border-0 font-medium">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Bestseller
              </Badge>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-display-sm lg:text-display font-bold text-foreground">
                ProPrint MX-5500
              </h1>
              <p className="text-xl text-muted-foreground">
                Stampante Multifunzione Laser a Colori
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card-premium p-4 text-center"
                >
                  <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              La soluzione completa per uffici che non si accontentano. Stampa, copia, 
              scansiona e invia fax con qualità professionale. Progettata per volumi 
              elevati e massima affidabilità, con tecnologia avanzata che riduce i 
              costi operativi fino al 30%.
            </p>

            {/* Key Features List */}
            <div className="space-y-3">
              {[
                "Display touchscreen 10.1\" intuitivo con interfaccia personalizzabile",
                "Connettività completa: Wi-Fi, Ethernet, USB 3.0, NFC per mobile print",
                "Sicurezza enterprise: crittografia dati, autenticazione utente avanzata",
                "Capacità carta fino a 6.350 fogli con cassetti opzionali",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-accent-foreground shadow-accent-glow text-lg px-8 h-14 font-semibold"
                onClick={() => setShowQuoteForm(true)}
              >
                Richiedi Preventivo Gratuito
              </Button>
              <Button size="lg" variant="outline" className="gap-2 h-14 text-lg">
                <Download className="h-5 w-5" />
                Brochure PDF
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="h-5 w-5 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Rental Teaser */}
            <motion.div 
              className="card-premium p-6 bg-gradient-subtle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Noleggio operativo da</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">€89</span>
                    <span className="text-muted-foreground">/mese</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Toner e assistenza inclusi • 36 mesi
                  </p>
                </div>
                <Button variant="outline" className="gap-2" onClick={() => {
                  const tabsElement = document.querySelector('[data-value="rental"]');
                  if (tabsElement) {
                    tabsElement.scrollIntoView({ behavior: 'smooth' });
                    (tabsElement as HTMLElement).click();
                  }
                }}>
                  Scopri i piani
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-14 p-1.5 bg-card shadow-premium">
                <TabsTrigger value="overview" className="h-full px-6 text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Panoramica
                </TabsTrigger>
                <TabsTrigger value="specs" className="h-full px-6 text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Specifiche Tecniche
                </TabsTrigger>
                <TabsTrigger value="rental" data-value="rental" className="h-full px-6 text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
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
      <section className="bg-gradient-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-display-sm lg:text-display font-bold text-primary-foreground mb-6">
              Pronto a ottimizzare il tuo ufficio?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10">
              Richiedi una consulenza gratuita. I nostri esperti ti aiuteranno a 
              trovare la soluzione perfetta per la tua azienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-accent-foreground shadow-accent-glow text-lg px-10 h-14 font-semibold"
                onClick={() => setShowQuoteForm(true)}
              >
                Richiedi Preventivo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 text-lg gap-2"
              >
                <Phone className="h-5 w-5" />
                02 1234 5678
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Printer className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-foreground">PrintPro Solutions</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 PrintPro Solutions. Tutti i diritti riservati.
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
      title: "Qualità Superiore",
      description: "Risoluzione 1200x1200 dpi per stampe nitide e colori vibranti. Tecnologia laser avanzata per risultati professionali su ogni documento."
    },
    {
      icon: Zap,
      title: "Massima Produttività",
      description: "Ciclo mensile fino a 300.000 pagine. Prima pagina in uscita in 3.9 secondi. Alimentatore automatico da 300 fogli per scansioni veloci."
    },
    {
      icon: Shield,
      title: "Sicurezza Enterprise",
      description: "Autenticazione multi-fattore, crittografia HDD, gestione centralizzata. Conforme a GDPR e standard di sicurezza aziendale."
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
          className="card-premium p-8"
        >
          <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <feature.icon className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Index;
