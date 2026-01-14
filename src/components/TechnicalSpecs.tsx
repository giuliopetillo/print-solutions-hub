import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Copy, Scan, Settings } from "lucide-react";

const TechnicalSpecs = () => {
  const categories = [
    {
      id: "print",
      label: "Stampa",
      icon: Printer,
      specs: [
        { label: "Velocità stampa B/N", value: "55 ppm (A4)" },
        { label: "Velocità stampa Colore", value: "50 ppm (A4)" },
        { label: "Risoluzione stampa", value: "1200 x 1200 dpi" },
        { label: "Tempo prima pagina (B/N)", value: "3.9 secondi" },
        { label: "Tempo prima pagina (Colore)", value: "4.8 secondi" },
        { label: "Formati carta", value: "A3, A4, A5, A6, Buste" },
        { label: "Grammatura carta", value: "52 - 300 g/m²" },
        { label: "Ciclo mensile max", value: "300.000 pagine" },
        { label: "Volume consigliato", value: "8.000 - 25.000 pag/mese" },
        { label: "Stampa fronte/retro", value: "Automatica (standard)" },
      ],
    },
    {
      id: "copy",
      label: "Copia",
      icon: Copy,
      specs: [
        { label: "Velocità copia B/N", value: "55 cpm" },
        { label: "Velocità copia Colore", value: "50 cpm" },
        { label: "Risoluzione copia", value: "600 x 600 dpi" },
        { label: "Zoom", value: "25% - 400%" },
        { label: "Copie multiple", value: "1 - 9.999 copie" },
        { label: "Copia fronte/retro", value: "Automatica" },
      ],
    },
    {
      id: "scan",
      label: "Scansione",
      icon: Scan,
      specs: [
        { label: "Tipo scanner", value: "CCD a colori" },
        { label: "Risoluzione ottica", value: "600 x 600 dpi" },
        { label: "Velocità scansione", value: "80 ipm (fronte/retro)" },
        { label: "Formati file", value: "PDF, TIFF, JPEG, XPS, DOCX" },
        { label: "Destinazioni", value: "Email, FTP, SMB, USB, Cloud" },
        { label: "Alimentatore automatico", value: "300 fogli" },
      ],
    },
    {
      id: "general",
      label: "Generali",
      icon: Settings,
      specs: [
        { label: "Memoria RAM", value: "4 GB (espandibile a 8 GB)" },
        { label: "Storage", value: "320 GB HDD + 8 GB SSD" },
        { label: "Display", value: "Touchscreen 10.1\" a colori" },
        { label: "Connettività", value: "Ethernet, Wi-Fi, USB 3.0, NFC" },
        { label: "Protocolli di rete", value: "TCP/IP, IPX/SPX, AppleTalk" },
        { label: "Sistemi operativi", value: "Windows, macOS, Linux" },
        { label: "Dimensioni (LxPxA)", value: "615 x 685 x 875 mm" },
        { label: "Peso", value: "85 kg" },
        { label: "Alimentazione", value: "220-240V, 50/60 Hz" },
        { label: "Consumo energetico", value: "1.8 kW (max)" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="card-premium border-0 overflow-hidden">
        <CardHeader className="bg-gradient-subtle border-b border-border">
          <CardTitle className="text-2xl">Specifiche Tecniche Complete</CardTitle>
        </CardHeader>
        <CardContent className="p-6 lg:p-8">
          <Tabs defaultValue="print" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 h-auto p-1 bg-muted">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-card data-[state=active]:shadow-sm"
                >
                  <cat.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid gap-0 divide-y divide-border"
                >
                  {cat.specs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-center justify-between py-4 hover:bg-muted/50 px-2 -mx-2 rounded-lg transition-colors"
                    >
                      <span className="font-medium text-foreground">{spec.label}</span>
                      <span className="text-muted-foreground text-right">{spec.value}</span>
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
