import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Terminal } from "lucide-react";
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
      toast({ title: "Request Submitted!", description: "We'll contact you within 24 business hours." });
      onOpenChange(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(value) => { onOpenChange(value); if (!value) setIsSubmitted(false); }}>
      <DialogContent className="sm:max-w-lg glass-panel border-primary/30 overflow-hidden">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="h-20 w-20 rounded-xl border border-success/30 bg-success/10 flex items-center justify-center mx-auto mb-6 neon-glow" style={{ boxShadow: '0 0 20px hsl(150 100% 50% / 0.3)' }}>
                <CheckCircle className="h-10 w-10 text-success" />
              </motion.div>
              <h3 className="font-display text-2xl text-foreground mb-2">REQUEST SENT</h3>
              <p className="text-muted-foreground font-mono text-sm">We'll contact you within 24 business hours.</p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="h-4 w-4 text-primary" />
                  <span className="text-xs font-mono text-primary/60 tracking-wider">QUOTE REQUEST FORM</span>
                </div>
                <DialogTitle className="font-display text-2xl tracking-wide">REQUEST <span className="text-primary">QUOTE</span></DialogTitle>
                <DialogDescription className="font-mono text-sm">Fill the form to receive a personalized quote within 24h.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-mono text-xs tracking-wider text-muted-foreground">FIRST NAME *</Label>
                    <Input id="firstName" placeholder="Mario" required className="h-11 glass-card border-primary/20 font-mono" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-mono text-xs tracking-wider text-muted-foreground">LAST NAME *</Label>
                    <Input id="lastName" placeholder="Rossi" required className="h-11 glass-card border-primary/20 font-mono" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-mono text-xs tracking-wider text-muted-foreground">COMPANY *</Label>
                  <Input id="company" placeholder="Company Name S.r.l." required className="h-11 glass-card border-primary/20 font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-xs tracking-wider text-muted-foreground">EMAIL *</Label>
                    <Input id="email" type="email" placeholder="email@company.it" required className="h-11 glass-card border-primary/20 font-mono" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-mono text-xs tracking-wider text-muted-foreground">PHONE *</Label>
                    <Input id="phone" type="tel" placeholder="+39 02 1234567" required className="h-11 glass-card border-primary/20 font-mono" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-mono text-xs tracking-wider text-muted-foreground">INTEREST</Label>
                    <Select>
                      <SelectTrigger className="h-11 glass-card border-primary/20 font-mono"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent className="glass-panel border-primary/20">
                        <SelectItem value="purchase">Purchase</SelectItem>
                        <SelectItem value="rental">Rental</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-mono text-xs tracking-wider text-muted-foreground">MONTHLY VOLUME</Label>
                    <Select>
                      <SelectTrigger className="h-11 glass-card border-primary/20 font-mono"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent className="glass-panel border-primary/20">
                        <SelectItem value="low">{'< 5,000 pages'}</SelectItem>
                        <SelectItem value="medium">5,000 - 15,000</SelectItem>
                        <SelectItem value="high">15,000 - 30,000</SelectItem>
                        <SelectItem value="veryhigh">{'>30,000 pages'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-xs tracking-wider text-muted-foreground">ADDITIONAL NOTES</Label>
                  <Textarea id="message" placeholder="Describe your specific needs..." rows={3} className="resize-none glass-card border-primary/20 font-mono" />
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" className="flex-1 h-12 btn-tech" onClick={() => onOpenChange(false)}>CANCEL</Button>
                  <Button type="submit" className="flex-1 h-12 btn-tech-primary gap-2">
                    <Send className="h-4 w-4" />
                    SUBMIT
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
