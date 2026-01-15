import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Hexagon, Zap, Shield, Crown } from "lucide-react";

interface RentalPlansProps {
  onRequestQuote: () => void;
}

const RentalPlans = ({ onRequestQuote }: RentalPlansProps) => {
  const plans = [
    {
      name: "STARTER",
      icon: Hexagon,
      monthlyPrice: 89,
      duration: "36 MONTHS",
      bwCopies: "3.000",
      colorCopies: "500",
      features: [
        "Standard maintenance included",
        "Original toner included",
        "Phone support",
        "48h response time",
      ],
      popular: false,
      accent: false,
    },
    {
      name: "BUSINESS",
      icon: Zap,
      monthlyPrice: 149,
      duration: "48 MONTHS",
      bwCopies: "8.000",
      colorCopies: "1.500",
      features: [
        "Everything in Starter",
        "Priority support",
        "24h response time",
        "Remote proactive monitoring",
        "Monthly detailed reports",
      ],
      popular: true,
      accent: true,
    },
    {
      name: "ENTERPRISE",
      icon: Crown,
      monthlyPrice: 249,
      duration: "60 MONTHS",
      bwCopies: "20.000",
      colorCopies: "5.000",
      features: [
        "Everything in Business",
        "4h SLA response",
        "Dedicated account manager",
        "Team training included",
        "Backup printer guaranteed",
        "99.5% uptime SLA",
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
        <Badge className="mb-4 glass-panel border-primary/30 text-primary font-mono text-xs tracking-wider px-4 py-2">
          <Shield className="h-3 w-3 mr-2" />
          ZERO INITIAL INVESTMENT
        </Badge>
        <h2 className="font-display text-display-sm text-foreground mb-4">
          OPERATIONAL <span className="text-primary neon-text">RENTAL</span>
        </h2>
        <p className="text-muted-foreground font-mono text-sm">
          FIXED MONTHLY FEE // TONER + MAINTENANCE + SUPPORT INCLUDED // NO SURPRISES
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
              className={`relative h-full glass-card transition-all duration-300 ${
                plan.accent 
                  ? 'border-2 border-primary neon-glow scale-[1.02] lg:scale-105' 
                  : 'border border-primary/20 tech-card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-mono text-xs tracking-wider px-4 py-1.5 neon-glow">
                    <Zap className="h-3 w-3 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <plan.icon className={`h-6 w-6 ${plan.accent ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="font-display text-xl tracking-wider">{plan.name}</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-mono text-muted-foreground">€</span>
                    <span className={`font-display text-5xl ${plan.accent ? 'text-primary neon-text' : 'text-foreground'}`}>
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground font-mono text-sm">/mo</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mt-2 tracking-wider">
                    CONTRACT: {plan.duration}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 pb-8">
                {/* Copies included */}
                <div className="glass-panel rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-primary/60 uppercase tracking-wider">
                    INCLUDED COPIES/MONTH
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-mono text-sm">B/W</span>
                    <span className="font-display text-xl text-foreground">{plan.bwCopies}</span>
                  </div>
                  <div className="h-px bg-primary/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-mono text-sm">COLOR</span>
                    <span className="font-display text-xl text-foreground">{plan.colorCopies}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="h-5 w-5 rounded border border-success/30 bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-success" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full h-12 font-display tracking-wider ${
                    plan.accent 
                      ? 'btn-tech-primary' 
                      : 'btn-tech'
                  }`}
                  onClick={onRequestQuote}
                >
                  REQUEST QUOTE
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
        <div className="glass-panel inline-block px-6 py-3 rounded-lg">
          <p className="text-xs font-mono text-muted-foreground">
            * EXCESS COPIES: B/W €0.008 | COLOR €0.055 | VAT EXCLUDED | SUBJECT TO CREDIT APPROVAL
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RentalPlans;
