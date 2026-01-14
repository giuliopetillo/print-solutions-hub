import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface QuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteForm = ({ open, onOpenChange }: QuoteFormProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Richiesta Inviata!",
      description: "Ti contatteremo entro 24 ore lavorative.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Richiedi Preventivo</DialogTitle>
          <DialogDescription>
            Compila il form e riceverai un preventivo personalizzato entro 24 ore.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nome *</Label>
              <Input id="firstName" placeholder="Mario" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Cognome *</Label>
              <Input id="lastName" placeholder="Rossi" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Azienda *</Label>
            <Input id="company" placeholder="Nome Azienda S.r.l." required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="mario.rossi@azienda.it" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefono *</Label>
            <Input id="phone" type="tel" placeholder="+39 02 1234567" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">Interesse principale</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona un'opzione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="purchase">Acquisto</SelectItem>
                <SelectItem value="rental">Noleggio</SelectItem>
                <SelectItem value="both">Valutare entrambi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="volume">Volume mensile stimato</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Fino a 5.000 pagine</SelectItem>
                <SelectItem value="medium">5.000 - 15.000 pagine</SelectItem>
                <SelectItem value="high">15.000 - 30.000 pagine</SelectItem>
                <SelectItem value="veryhigh">Oltre 30.000 pagine</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Note aggiuntive</Label>
            <Textarea 
              id="message" 
              placeholder="Descrivi le tue esigenze specifiche..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
              Annulla
            </Button>
            <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              Invia Richiesta
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
