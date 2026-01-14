import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
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
      toast({
        title: "Richiesta Inviata!",
        description: "Ti contatteremo entro 24 ore lavorative.",
      });
      onOpenChange(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(value) => {
      onOpenChange(value);
      if (!value) setIsSubmitted(false);
    }}>
      <DialogContent className="sm:max-w-lg overflow-hidden">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="h-10 w-10 text-success" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Richiesta Inviata!</h3>
              <p className="text-muted-foreground">Ti contatteremo entro 24 ore lavorative.</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Richiedi Preventivo</DialogTitle>
                <DialogDescription>
                  Compila il form e riceverai un preventivo personalizzato entro 24 ore.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome *</Label>
                    <Input id="firstName" placeholder="Mario" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Cognome *</Label>
                    <Input id="lastName" placeholder="Rossi" required className="h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Azienda *</Label>
                  <Input id="company" placeholder="Nome Azienda S.r.l." required className="h-11" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="email@azienda.it" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefono *</Label>
                    <Input id="phone" type="tel" placeholder="+39 02 1234567" required className="h-11" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="interest">Interesse</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Seleziona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="purchase">Acquisto</SelectItem>
                        <SelectItem value="rental">Noleggio</SelectItem>
                        <SelectItem value="both">Entrambi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Volume mensile</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Seleziona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">{'< 5.000 pagine'}</SelectItem>
                        <SelectItem value="medium">5.000 - 15.000</SelectItem>
                        <SelectItem value="high">15.000 - 30.000</SelectItem>
                        <SelectItem value="veryhigh">{'>30.000 pagine'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Note aggiuntive</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descrivi le tue esigenze specifiche..."
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 h-12" 
                    onClick={() => onOpenChange(false)}
                  >
                    Annulla
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 h-12 bg-gradient-accent text-accent-foreground shadow-accent-glow font-semibold gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Invia Richiesta
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
