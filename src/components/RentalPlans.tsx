import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Sparkles } from "lucide-react";

interface RentalPlansProps {
  onRequestQuote: () => void;
}

const RentalPlans = ({ onRequestQuote }: RentalPlansProps) => {
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 89,
      duration: "36 mesi",
      bwCopies: "3.000",
      colorCopies: "500",
      features: [
        "Manutenzione ordinaria inclusa",
        "Toner originale incluso",
        "Assistenza telefonica",
        "Intervento entro 48h",
      ],
      popular: false,
      accent: false,
    },
    {
      name: "Business",
      monthlyPrice: 149,
      duration: "48 mesi",
      bwCopies: "8.000",
      colorCopies: "1.500",
      features: [
        "Tutto incluso in Starter",
        "Assistenza prioritaria",
        "Intervento entro 24h",
        "Monitoraggio remoto proattivo",
        "Report mensili dettagliati",
      ],
      popular: true,
      accent: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 249,
      duration: "60 mesi",
      bwCopies: "20.000",
      colorCopies: "5.000",
      features: [
        "Tutto incluso in Business",
        "Intervento entro 4h SLA",
        "Account manager dedicato",
        "Formazione team inclusa",
        "Stampante backup garantita",
        "Uptime garantito 99.5%",
      ],
      popular: false,
      accent: false,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div 
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Badge className="mb-4 bg-primary/10 text-primary border-0 font-medium">
          <Sparkles className="h-3 w-3 mr-1" />
          Zero investimento iniziale
        </Badge>
        <h2 className="text-display-sm font-bold text-foreground mb-4">
          Noleggio Operativo All-Inclusive
        </h2>
        <p className="text-lg text-muted-foreground">
          Canone mensile fisso. Toner, manutenzione e assistenza inclusi. 
          Nessuna sorpresa, massima tranquillità.
        </p>
      </motion.div>

      {/* Plans Grid */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <Card 
              className={`relative h-full transition-all duration-300 ${
                plan.accent 
                  ? 'border-2 border-primary shadow-glow scale-[1.02] lg:scale-105' 
                  : 'card-premium border-0'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-accent text-accent-foreground shadow-accent-glow px-4 py-1">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Più Richiesto
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">€</span>
                    <span className="text-5xl font-bold text-foreground">{plan.monthlyPrice}</span>
                    <span className="text-muted-foreground">/mese</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Durata contratto: {plan.duration}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 pb-8">
                {/* Copies included */}
                <div className="bg-secondary rounded-xl p-5 space-y-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Copie incluse/mese
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Bianco/Nero</span>
                    <span className="text-xl font-bold text-foreground">{plan.bwCopies}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Colore</span>
                    <span className="text-xl font-bold text-foreground">{plan.colorCopies}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-success" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full h-12 font-semibold ${
                    plan.accent 
                      ? 'bg-gradient-accent text-accent-foreground shadow-accent-glow' 
                      : 'bg-primary text-primary-foreground'
                  }`}
                  onClick={onRequestQuote}
                >
                  Richiedi Preventivo
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          * Copie eccedenti: B/N €0.008/copia | Colore €0.055/copia | Prezzi IVA esclusa | 
          Offerta soggetta ad approvazione creditizia | Condizioni contrattuali su richiesta
        </p>
      </motion.div>
    </div>
  );
};

export default RentalPlans;
