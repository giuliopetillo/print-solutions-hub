import { Button } from "@/components/ui/button";
import { Printer, Phone, Menu, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface ProductHeaderProps {
  onContactClick: () => void;
}

const ProductHeader = ({ onContactClick }: ProductHeaderProps) => {
  const navItems = [
    { label: "Prodotti", href: "#" },
    { label: "Noleggio", href: "#" },
    { label: "Assistenza", href: "#" },
    { label: "Chi Siamo", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-ai flex items-center justify-center transition-all group-hover:shadow-glow-primary">
              <Printer className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl text-foreground">
                Print<span className="text-gradient-ai">Pro</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-ai group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="hidden sm:flex gap-2 text-muted-foreground hover:text-foreground text-sm"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">02 1234 5678</span>
            </Button>
            <Button 
              className="btn-ai gap-2"
              onClick={onContactClick}
            >
              <Sparkles className="h-4 w-4" />
              Contattaci
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-foreground hover:bg-secondary">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 glass-strong border-l border-border">
                <nav className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors py-3 px-4 rounded-xl"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-6 mt-6 border-t border-border">
                    <Button className="w-full btn-ai" onClick={onContactClick}>
                      Richiedi Preventivo
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductHeader;
