import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";

interface RentalPlansProps {
  onRequestQuote: () => void;
}

const RentalPlans = ({ onRequestQuote }: RentalPlansProps) => {
  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      monthlyPrice: 89,
      duration: "36 mesi",
      bwCopies: "3.000",
      colorCopies: "500",
      features: [
        "Manutenzione ordinaria inclusa",
        "Toner originali inclusi",
        "Supporto telefonico",
        "Tempo risposta 48h",
      ],
      popular: false,
      featured: false,
    },
    {
      name: "Business",
      icon: Zap,
      monthlyPrice: 149,
      duration: "48 mesi",
      bwCopies: "8.000",
      colorCopies: "1.500",
      features: [
        "Tutto incluso in Starter",
        "Supporto prioritario",
        "Tempo risposta 24h",
        "Monitoraggio proattivo remoto",
        "Report mensili dettagliati",
      ],
      popular: true,
      featured: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      monthlyPrice: 249,
      duration: "60 mesi",
      bwCopies: "20.000",
      colorCopies: "5.000",
      features: [
        "Tutto incluso in Business",
        "SLA risposta 4h",
        "Account manager dedicato",
        "Formazione team inclusa",
        "Stampante backup garantita",
        "SLA uptime 99.5%",
      ],
      popular: false,
      featured: false,
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
        <span className="badge-ai mb-6 inline-flex">
          <Sparkles className="h-3 w-3" />
          Zero investimento iniziale
        </span>
        <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
          Noleggio <span className="text-gradient-ai">Operativo</span>
        </h2>
        <p className="text-muted-foreground">
          Canone mensile fisso • Toner + manutenzione + assistenza inclusi • Nessuna sorpresa
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
                plan.featured 
                  ? 'card-ai-featured scale-[1.02] lg:scale-105' 
                  : 'card-ai'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-ai text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-glow-primary">
                    Più Popolare
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <plan.icon className={`h-5 w-5 ${plan.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="font-display text-xl">{plan.name}</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">€</span>
                    <span className={`font-display text-5xl ${plan.featured ? 'text-gradient-ai' : 'text-foreground'}`}>
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/mese</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Contratto: {plan.duration}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 pb-8">
                {/* Copies included */}
                <div className="glass rounded-2xl p-5 space-y-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Copie incluse/mese
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">B/N</span>
                    <span className="font-display text-xl text-foreground">{plan.bwCopies}</span>
                  </div>
                  <div className="divider-ai" />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Colori</span>
                    <span className="font-display text-xl text-foreground">{plan.colorCopies}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="h-5 w-5 rounded-full bg-success/10 border border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-success" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full h-12 ${
                    plan.featured 
                      ? 'btn-ai' 
                      : 'btn-ai-outline'
                  }`}
                  onClick={onRequestQuote}
                >
                  Richiedi Preventivo
                  <ArrowRight className="h-4 w-4 ml-2" />
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
        <div className="glass inline-block px-6 py-3 rounded-2xl">
          <p className="text-xs text-muted-foreground">
            * Copie eccedenti: B/N €0,008 | Colori €0,055 | IVA esclusa | Soggetto ad approvazione del credito
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RentalPlans;
