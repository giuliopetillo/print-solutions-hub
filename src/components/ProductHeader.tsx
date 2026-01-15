import { Button } from "@/components/ui/button";
import { Printer, Phone, Menu, Radio } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface ProductHeaderProps {
  onContactClick: () => void;
}

const ProductHeader = ({ onContactClick }: ProductHeaderProps) => {
  const navItems = [
    { label: "PRODUCTS", href: "#" },
    { label: "RENTAL", href: "#" },
    { label: "SUPPORT", href: "#" },
    { label: "ABOUT", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-lg border border-primary/50 flex items-center justify-center transition-all group-hover:neon-glow group-hover:border-primary">
              <Printer className="h-5 w-5 text-primary" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl text-foreground tracking-wide">
                PRINT<span className="text-primary">PRO</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="hidden sm:flex gap-2 text-muted-foreground hover:text-primary font-mono text-sm"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">02 1234 5678</span>
            </Button>
            <Button 
              className="btn-tech-primary gap-2 font-display tracking-wider"
              onClick={onContactClick}
            >
              <Radio className="h-4 w-4" />
              CONTACT
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-primary hover:bg-primary/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 glass-panel border-l border-primary/20">
                <nav className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="font-mono text-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors py-3 px-4 rounded-lg"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-6 mt-6 border-t border-primary/20">
                    <Button className="w-full btn-tech-primary font-display tracking-wider" onClick={onContactClick}>
                      REQUEST QUOTE
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
