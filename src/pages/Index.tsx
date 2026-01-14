import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download, Printer, Zap, Shield, Phone } from "lucide-react";
import printerImage from "@/assets/printer-hero.png";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import RentalPlans from "@/components/RentalPlans";
import QuoteForm from "@/components/QuoteForm";
import { useState } from "react";

const Index = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const features = [
    "Stampa fino a 55 ppm in B/N e 50 ppm a colori",
    "Scansione fronte/retro automatica",
    "Connettività Wi-Fi, Ethernet e USB 3.0",
    "Display touchscreen 10.1\" a colori",
    "Capacità carta fino a 6.350 fogli",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">PrintPro Solutions</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Prodotti</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Noleggio</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Assistenza</a>
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Contattaci
            </Button>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-muted-foreground">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Stampanti Multifunzione</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">ProPrint MX-5500</span>
        </nav>
      </div>

      {/* Hero Product Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="card-elevated rounded-2xl p-8 animate-fade-in">
            <div className="relative">
              <Badge className="absolute top-0 left-0 bg-accent text-accent-foreground">
                Bestseller
              </Badge>
              <img
                src={printerImage}
                alt="ProPrint MX-5500 Stampante Multifunzione"
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-slide-in-right">
            <div>
              <Badge variant="outline" className="mb-3 text-primary border-primary">
                Multifunzione A3/A4
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                ProPrint MX-5500
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                Stampante Multifunzione Professionale
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              La soluzione completa per uffici esigenti. Stampa, copia, scansiona e invia fax con 
              qualità professionale. Progettata per volumi elevati e massima affidabilità nel 
              tempo, con costi operativi ottimizzati.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground btn-accent-glow text-lg px-8"
                onClick={() => setShowQuoteForm(true)}
              >
                Richiedi Preventivo
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-5 w-5" />
                Scarica Brochure
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-5 w-5 text-primary" />
                Installazione in 24h
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                Garanzia 3 anni
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="overview" className="text-base">Panoramica</TabsTrigger>
            <TabsTrigger value="specs" className="text-base">Specifiche Tecniche</TabsTrigger>
            <TabsTrigger value="rental" className="text-base">Noleggio</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-elevated card-hover rounded-xl p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Printer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Stampa di Qualità</h3>
                <p className="text-muted-foreground">
                  Risoluzione fino a 1200x1200 dpi per documenti nitidi e immagini vivide. 
                  Tecnologia laser avanzata per risultati professionali.
                </p>
              </div>
              <div className="card-elevated card-hover rounded-xl p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Alta Produttività</h3>
                <p className="text-muted-foreground">
                  Ciclo mensile fino a 300.000 pagine. Primo documento in uscita in meno 
                  di 4 secondi per massimizzare l'efficienza del tuo team.
                </p>
              </div>
              <div className="card-elevated card-hover rounded-xl p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Sicurezza Avanzata</h3>
                <p className="text-muted-foreground">
                  Autenticazione utente, crittografia dati e gestione centralizzata. 
                  Conforme agli standard di sicurezza enterprise.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specs" className="animate-fade-in">
            <TechnicalSpecs />
          </TabsContent>

          <TabsContent value="rental" className="animate-fade-in">
            <RentalPlans onRequestQuote={() => setShowQuoteForm(true)} />
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Hai bisogno di una soluzione personalizzata?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            I nostri esperti ti aiuteranno a trovare la configurazione perfetta per le tue esigenze aziendali.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground btn-accent-glow text-lg px-8"
            onClick={() => setShowQuoteForm(true)}
          >
            Parla con un Esperto
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 PrintPro Solutions. Tutti i diritti riservati.</p>
        </div>
      </footer>

      {/* Quote Form Modal */}
      <QuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />
    </div>
  );
};

export default Index;
