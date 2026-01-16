import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface ProductHeaderProps {
  onContactClick: () => void;
}

const ProductHeader = ({ onContactClick }: ProductHeaderProps) => {
  const navItems = [
    { label: "Prodotti", href: "#", hasDropdown: true },
    { label: "Noleggio", href: "#", hasDropdown: true },
    { label: "Assistenza", href: "#", hasDropdown: false },
    { label: "Chi Siamo", href: "#", hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-success border-2 border-background" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-base text-foreground leading-tight">
                MPF S.p.A.
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight tracking-wide">
                PRINTING SOLUTIONS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden sm:flex gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 h-9 px-3"
            >
              <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <span className="hidden md:inline text-sm">02 1234 5678</span>
            </Button>
            <Button 
              className="btn-mpf h-9 px-4 text-sm font-medium"
              onClick={onContactClick}
            >
              Contattaci
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-foreground h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-background border-l border-border p-0">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">M</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground">MPF S.p.A.</span>
                      <span className="text-xs text-muted-foreground">PRINTING SOLUTIONS</span>
                    </div>
                  </div>
                </div>
                <nav className="flex flex-col p-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between text-base text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors py-3 px-4 rounded-lg"
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
                    </a>
                  ))}
                  <div className="pt-4 mt-4 border-t border-border">
                    <Button className="w-full btn-mpf" onClick={onContactClick}>
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