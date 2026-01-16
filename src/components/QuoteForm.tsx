import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
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
      <DialogContent className="sm:max-w-lg bg-card border-border overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div 
              key="success" 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="py-10 text-center"
            >
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.2, type: "spring" }} 
                className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5"
              >
                <CheckCircle className="h-8 w-8 text-success" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Richiesta Inviata</h3>
              <p className="text-muted-foreground">Ti contatteremo entro 24 ore lavorative.</p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  Richiedi Preventivo
                </DialogTitle>
                <DialogDescription>
                  Compila il modulo per ricevere un preventivo personalizzato entro 24h.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName" className="text-xs text-muted-foreground">Nome *</Label>
                    <Input id="firstName" placeholder="Mario" required className="input-mpf h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName" className="text-xs text-muted-foreground">Cognome *</Label>
                    <Input id="lastName" placeholder="Rossi" required className="input-mpf h-10" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-xs text-muted-foreground">Azienda *</Label>
                  <Input id="company" placeholder="Nome Azienda S.r.l." required className="input-mpf h-10" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs text-muted-foreground">Email *</Label>
                    <Input id="email" type="email" placeholder="email@azienda.it" required className="input-mpf h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs text-muted-foreground">Telefono *</Label>
                    <Input id="phone" type="tel" placeholder="+39 02 1234567" required className="input-mpf h-10" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Interesse</Label>
                    <Select>
                      <SelectTrigger className="input-mpf h-10">
                        <SelectValue placeholder="Seleziona" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border rounded">
                        <SelectItem value="purchase">Acquisto</SelectItem>
                        <SelectItem value="rental">Noleggio</SelectItem>
                        <SelectItem value="both">Entrambi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Volume Mensile</Label>
                    <Select>
                      <SelectTrigger className="input-mpf h-10">
                        <SelectValue placeholder="Seleziona" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border rounded">
                        <SelectItem value="low">{'< 5.000 pagine'}</SelectItem>
                        <SelectItem value="medium">5.000 - 15.000</SelectItem>
                        <SelectItem value="high">15.000 - 30.000</SelectItem>
                        <SelectItem value="veryhigh">{'>30.000 pagine'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs text-muted-foreground">Note Aggiuntive</Label>
                  <Textarea id="message" placeholder="Descrivi le tue esigenze specifiche..." rows={3} className="input-mpf resize-none" />
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" className="flex-1 h-11 btn-mpf-outline" onClick={() => onOpenChange(false)}>
                    Annulla
                  </Button>
                  <Button type="submit" className="flex-1 h-11 btn-mpf">
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