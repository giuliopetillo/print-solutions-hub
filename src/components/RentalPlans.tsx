import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

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
        "Toner originali inclusi",
        "Supporto telefonico",
        "Tempo risposta 48h",
      ],
      popular: false,
      featured: false,
    },
    {
      name: "Business",
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
    <div className="space-y-10">
      {/* Header */}
      <motion.div 
        className="text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="badge-mpf mb-4 inline-flex">Zero investimento iniziale</span>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
          Noleggio Operativo
        </h2>
        <p className="text-muted-foreground">
          Canone mensile fisso • Toner + manutenzione + assistenza inclusi • Nessuna sorpresa
        </p>
      </motion.div>

      {/* Plans Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className={`relative h-full transition-all duration-200 ${
                plan.featured 
                  ? 'card-mpf-featured' 
                  : 'card-mpf-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                    Più Popolare
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <span className="text-lg font-semibold text-foreground">{plan.name}</span>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">€</span>
                    <span className={`text-4xl font-bold ${plan.featured ? 'text-primary' : 'text-foreground'}`}>
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/mese</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Contratto: {plan.duration}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-5 pb-6">
                {/* Copies included */}
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                    Copie incluse/mese
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">B/N</span>
                    <span className="font-semibold text-foreground">{plan.bwCopies}</span>
                  </div>
                  <div className="divider" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Colori</span>
                    <span className="font-semibold text-foreground">{plan.colorCopies}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-success" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full h-11 ${
                    plan.featured 
                      ? 'btn-mpf' 
                      : 'btn-mpf-outline'
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
        transition={{ delay: 0.4 }}
      >
        <p className="text-xs text-muted-foreground bg-muted inline-block px-4 py-2 rounded">
          * Copie eccedenti: B/N €0,008 | Colori €0,055 | IVA esclusa | Soggetto ad approvazione del credito
        </p>
      </motion.div>
    </div>
  );
};

export default RentalPlans;