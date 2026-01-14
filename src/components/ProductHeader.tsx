import { Button } from "@/components/ui/button";
import { Printer, Phone, Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
              <Printer className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              PrintPro
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="hidden sm:flex gap-2 text-muted-foreground hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">02 1234 5678</span>
            </Button>
            <Button 
              className="bg-gradient-hero text-primary-foreground shadow-glow font-medium"
              onClick={onContactClick}
            >
              Contattaci
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-border mt-4">
                    <Button className="w-full bg-gradient-hero text-primary-foreground" onClick={onContactClick}>
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
