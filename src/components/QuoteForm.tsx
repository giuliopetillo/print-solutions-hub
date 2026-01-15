import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

interface QuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteForm = ({ open, onOpenChange }: QuoteFormProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      toast({ title: "Richiesta inviata!", description: "Ti contatteremo entro 24 ore lavorative." });
      onOpenChange(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(value) => { onOpenChange(value); if (!value) setIsSubmitted(false); }}>
      <DialogContent className="sm:max-w-lg glass-strong border-border overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div 
              key="success" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="py-12 text-center"
            >
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.2, type: "spring" }} 
                className="h-20 w-20 rounded-2xl bg-gradient-ai flex items-center justify-center mx-auto mb-6 shadow-glow-success"
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="font-display text-2xl text-foreground mb-2">Richiesta Inviata</h3>
              <p className="text-muted-foreground">Ti contatteremo entro 24 ore lavorative.</p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs text-primary font-medium">Preventivo gratuito</span>
                </div>
                <DialogTitle className="font-display text-2xl">
                  Richiedi <span className="text-gradient-ai">Preventivo</span>
                </DialogTitle>
                <DialogDescription>
                  Compila il modulo per ricevere un preventivo personalizzato entro 24h.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-xs text-muted-foreground">Nome *</Label>
                    <Input id="firstName" placeholder="Mario" required className="h-11 glass border-border rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-xs text-muted-foreground">Cognome *</Label>
                    <Input id="lastName" placeholder="Rossi" required className="h-11 glass border-border rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs text-muted-foreground">Azienda *</Label>
                  <Input id="company" placeholder="Nome Azienda S.r.l." required className="h-11 glass border-border rounded-xl" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs text-muted-foreground">Email *</Label>
                    <Input id="email" type="email" placeholder="email@azienda.it" required className="h-11 glass border-border rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs text-muted-foreground">Telefono *</Label>
                    <Input id="phone" type="tel" placeholder="+39 02 1234567" required className="h-11 glass border-border rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Interesse</Label>
                    <Select>
                      <SelectTrigger className="h-11 glass border-border rounded-xl">
                        <SelectValue placeholder="Seleziona" />
                      </SelectTrigger>
                      <SelectContent className="glass-strong border-border rounded-xl">
                        <SelectItem value="purchase">Acquisto</SelectItem>
                        <SelectItem value="rental">Noleggio</SelectItem>
                        <SelectItem value="both">Entrambi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Volume Mensile</Label>
                    <Select>
                      <SelectTrigger className="h-11 glass border-border rounded-xl">
                        <SelectValue placeholder="Seleziona" />
                      </SelectTrigger>
                      <SelectContent className="glass-strong border-border rounded-xl">
                        <SelectItem value="low">{'< 5.000 pagine'}</SelectItem>
                        <SelectItem value="medium">5.000 - 15.000</SelectItem>
                        <SelectItem value="high">15.000 - 30.000</SelectItem>
                        <SelectItem value="veryhigh">{'>30.000 pagine'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs text-muted-foreground">Note Aggiuntive</Label>
                  <Textarea id="message" placeholder="Descrivi le tue esigenze specifiche..." rows={3} className="resize-none glass border-border rounded-xl" />
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" className="flex-1 h-12 btn-ai-outline rounded-xl" onClick={() => onOpenChange(false)}>
                    Annulla
                  </Button>
                  <Button type="submit" className="flex-1 h-12 btn-ai rounded-xl">
                    Invia Richiesta
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
