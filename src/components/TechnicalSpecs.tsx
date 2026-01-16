import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Printer, Copy, Scan, Settings } from "lucide-react";

const TechnicalSpecs = () => {
  const categories = [
    { id: "print", label: "Stampa", icon: Printer, specs: [
      { label: "Velocità Stampa B/N", value: "55 ppm (A4)" },
      { label: "Velocità Stampa Colori", value: "50 ppm (A4)" },
      { label: "Risoluzione Stampa", value: "1200 x 1200 dpi" },
      { label: "Prima Pagina (B/N)", value: "3.9 sec" },
      { label: "Prima Pagina (Colori)", value: "4.8 sec" },
      { label: "Formati Carta", value: "A3, A4, A5, A6, Buste" },
      { label: "Grammatura Carta", value: "52 - 300 g/m²" },
      { label: "Ciclo Mensile Max", value: "300.000 pagine" },
      { label: "Volume Consigliato", value: "8.000 - 25.000 pag/mese" },
      { label: "Stampa Fronte/Retro", value: "Automatica (standard)" },
    ]},
    { id: "copy", label: "Copia", icon: Copy, specs: [
      { label: "Velocità Copia B/N", value: "55 cpm" },
      { label: "Velocità Copia Colori", value: "50 cpm" },
      { label: "Risoluzione Copia", value: "600 x 600 dpi" },
      { label: "Zoom", value: "25% - 400%" },
      { label: "Copie Multiple", value: "1 - 9.999" },
      { label: "Copia Fronte/Retro", value: "Automatica" },
    ]},
    { id: "scan", label: "Scansione", icon: Scan, specs: [
      { label: "Tipo Scanner", value: "CCD a colori" },
      { label: "Risoluzione Ottica", value: "600 x 600 dpi" },
      { label: "Velocità Scansione", value: "80 ipm (fronte/retro)" },
      { label: "Formati File", value: "PDF, TIFF, JPEG, XPS, DOCX" },
      { label: "Destinazioni", value: "Email, FTP, SMB, USB, Cloud" },
      { label: "Alimentatore Auto", value: "300 fogli" },
    ]},
    { id: "general", label: "Sistema", icon: Settings, specs: [
      { label: "Memoria RAM", value: "4 GB (esp. 8 GB)" },
      { label: "Storage", value: "320 GB HDD + 8 GB SSD" },
      { label: "Display", value: "10.1\" Touchscreen a colori" },
      { label: "Connettività", value: "Ethernet, Wi-Fi, USB 3.0, NFC" },
      { label: "Protocolli di Rete", value: "TCP/IP, IPX/SPX, AppleTalk" },
      { label: "Sistemi Operativi", value: "Windows, macOS, Linux" },
      { label: "Dimensioni (LxPxA)", value: "615 x 685 x 875 mm" },
      { label: "Peso", value: "85 kg" },
      { label: "Alimentazione", value: "220-240V, 50/60 Hz" },
      { label: "Consumo Max", value: "1.8 kW" },
    ]},
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card className="card-mpf overflow-hidden">
        <CardHeader className="bg-muted border-b border-border">
          <span className="font-semibold text-foreground">Specifiche Tecniche</span>
        </CardHeader>
        <CardContent className="p-5 lg:p-6">
          <Tabs defaultValue="print" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-1 h-auto p-1 bg-muted rounded-lg">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id} 
                  className="flex items-center gap-2 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded transition-all"
                >
                  <cat.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-5">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-0 divide-y divide-border"
                >
                  {cat.specs.map((spec, index) => (
                    <motion.div 
                      key={spec.label} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: index * 0.02 }} 
                      className="flex items-center justify-between py-3 hover:bg-muted px-3 -mx-3 rounded transition-colors"
                    >
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className="text-sm font-medium text-foreground">{spec.value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TechnicalSpecs;