import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Printer, Copy, Scan, Settings, Terminal } from "lucide-react";

const TechnicalSpecs = () => {
  const categories = [
    { id: "print", label: "PRINT", icon: Printer, specs: [
      { label: "B/W Print Speed", value: "55 ppm (A4)" },
      { label: "Color Print Speed", value: "50 ppm (A4)" },
      { label: "Print Resolution", value: "1200 x 1200 dpi" },
      { label: "First Page Out (B/W)", value: "3.9 sec" },
      { label: "First Page Out (Color)", value: "4.8 sec" },
      { label: "Paper Formats", value: "A3, A4, A5, A6, Envelopes" },
      { label: "Paper Weight", value: "52 - 300 g/m²" },
      { label: "Max Monthly Cycle", value: "300,000 pages" },
      { label: "Recommended Volume", value: "8,000 - 25,000 pag/mo" },
      { label: "Duplex Print", value: "Automatic (standard)" },
    ]},
    { id: "copy", label: "COPY", icon: Copy, specs: [
      { label: "B/W Copy Speed", value: "55 cpm" },
      { label: "Color Copy Speed", value: "50 cpm" },
      { label: "Copy Resolution", value: "600 x 600 dpi" },
      { label: "Zoom Range", value: "25% - 400%" },
      { label: "Multiple Copies", value: "1 - 9,999" },
      { label: "Duplex Copy", value: "Automatic" },
    ]},
    { id: "scan", label: "SCAN", icon: Scan, specs: [
      { label: "Scanner Type", value: "Color CCD" },
      { label: "Optical Resolution", value: "600 x 600 dpi" },
      { label: "Scan Speed", value: "80 ipm (duplex)" },
      { label: "File Formats", value: "PDF, TIFF, JPEG, XPS, DOCX" },
      { label: "Destinations", value: "Email, FTP, SMB, USB, Cloud" },
      { label: "Auto Feeder", value: "300 sheets" },
    ]},
    { id: "general", label: "SYSTEM", icon: Settings, specs: [
      { label: "RAM Memory", value: "4 GB (exp. 8 GB)" },
      { label: "Storage", value: "320 GB HDD + 8 GB SSD" },
      { label: "Display", value: "10.1\" Color Touchscreen" },
      { label: "Connectivity", value: "Ethernet, Wi-Fi, USB 3.0, NFC" },
      { label: "Network Protocols", value: "TCP/IP, IPX/SPX, AppleTalk" },
      { label: "OS Support", value: "Windows, macOS, Linux" },
      { label: "Dimensions (WxDxH)", value: "615 x 685 x 875 mm" },
      { label: "Weight", value: "85 kg" },
      { label: "Power", value: "220-240V, 50/60 Hz" },
      { label: "Max Power Consumption", value: "1.8 kW" },
    ]},
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card className="glass-card border-primary/20 overflow-hidden">
        <CardHeader className="glass-panel border-b border-primary/20">
          <div className="flex items-center gap-3">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-display text-xl tracking-wider">TECHNICAL SPECIFICATIONS</span>
          </div>
        </CardHeader>
        <CardContent className="p-6 lg:p-8">
          <Tabs defaultValue="print" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 h-auto p-1.5 glass-panel rounded-xl">
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2 py-3 font-mono text-xs tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:neon-glow rounded-lg">
                  <cat.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-6">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-0 divide-y divide-primary/10">
                  {cat.specs.map((spec, index) => (
                    <motion.div key={spec.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.03 }} className="flex items-center justify-between py-4 hover:bg-primary/5 px-3 -mx-3 rounded-lg transition-colors group">
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">{spec.label}</span>
                      <span className="font-mono text-sm text-primary">{spec.value}</span>
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
