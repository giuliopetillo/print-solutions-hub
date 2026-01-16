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
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded bg-primary flex items-center justify-center">
              <Printer className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">
              MPF S.p.A.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="hidden sm:flex gap-2 text-muted-foreground hover:text-primary text-sm"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">02 1234 5678</span>
            </Button>
            <Button 
              className="btn-mpf text-sm"
              onClick={onContactClick}
            >
              Contattaci
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-card border-l border-border">
                <nav className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded"
                    >
                      {item.label}
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