import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

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
        "Manutenzione inclusa",
        "Toner incluso",
        "Assistenza telefonica",
        "Tempo intervento 48h",
      ],
      popular: false,
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
        "Tempo intervento 24h",
        "Monitoraggio remoto",
        "Report mensili utilizzo",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 249,
      duration: "60 mesi",
      bwCopies: "20.000",
      colorCopies: "5.000",
      features: [
        "Tutto incluso in Business",
        "Tempo intervento 4h",
        "Account manager dedicato",
        "Formazione personale",
        "Backup dispositivo",
        "SLA garantito 99.5%",
      ],
      popular: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Noleggio Operativo All-Inclusive
        </h2>
        <p className="text-lg text-muted-foreground">
          Nessun investimento iniziale. Canone mensile fisso con toner, manutenzione e assistenza inclusi.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`card-hover relative ${
              plan.popular 
                ? 'border-2 border-accent shadow-lg' 
                : 'card-elevated border-0'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Più Richiesto
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">€{plan.monthlyPrice}</span>
                <span className="text-muted-foreground">/mese</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Durata: {plan.duration}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-secondary rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Copie B/N incluse</span>
                  <span className="font-semibold text-foreground">{plan.bwCopies}/mese</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Copie Colore incluse</span>
                  <span className="font-semibold text-foreground">{plan.colorCopies}/mese</span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground btn-accent-glow' 
                    : ''
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={onRequestQuote}
              >
                Richiedi Preventivo
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          * Copie eccedenti: B/N €0.008/pag | Colore €0.055/pag | IVA esclusa | Offerta soggetta ad approvazione creditizia
        </p>
      </div>
    </div>
  );
};

export default RentalPlans;
