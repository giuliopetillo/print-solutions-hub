import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechnicalSpecs = () => {
  const printSpecs = [
    { label: "Velocità stampa B/N", value: "55 ppm (A4)" },
    { label: "Velocità stampa Colore", value: "50 ppm (A4)" },
    { label: "Risoluzione stampa", value: "1200 x 1200 dpi" },
    { label: "Tempo prima pagina (B/N)", value: "3.9 secondi" },
    { label: "Tempo prima pagina (Colore)", value: "4.8 secondi" },
    { label: "Formati carta supportati", value: "A3, A4, A5, A6, Buste" },
    { label: "Grammatura carta", value: "52 - 300 g/m²" },
    { label: "Ciclo mensile max", value: "300.000 pagine" },
    { label: "Volume mensile consigliato", value: "8.000 - 25.000 pagine" },
    { label: "Stampa fronte/retro", value: "Automatica (standard)" },
  ];

  const copySpecs = [
    { label: "Velocità copia B/N", value: "55 cpm" },
    { label: "Velocità copia Colore", value: "50 cpm" },
    { label: "Risoluzione copia", value: "600 x 600 dpi" },
    { label: "Zoom", value: "25% - 400%" },
    { label: "Copie multiple", value: "1 - 9.999 copie" },
    { label: "Copia fronte/retro", value: "Automatica" },
  ];

  const scanSpecs = [
    { label: "Tipo scanner", value: "CCD a colori" },
    { label: "Risoluzione scansione", value: "600 x 600 dpi (ottica)" },
    { label: "Velocità scansione", value: "80 ipm (fronte/retro)" },
    { label: "Formati file", value: "PDF, TIFF, JPEG, XPS, DOCX" },
    { label: "Destinazioni", value: "Email, FTP, SMB, USB" },
    { label: "Alimentatore automatico", value: "300 fogli" },
  ];

  const generalSpecs = [
    { label: "Memoria RAM", value: "4 GB (espandibile a 8 GB)" },
    { label: "Disco rigido", value: "320 GB HDD + 8 GB SSD" },
    { label: "Display", value: "Touchscreen 10.1\" a colori" },
    { label: "Connettività", value: "Ethernet, Wi-Fi, USB 3.0, NFC" },
    { label: "Protocolli", value: "TCP/IP, IPX/SPX, AppleTalk" },
    { label: "Sistemi operativi", value: "Windows, macOS, Linux" },
    { label: "Dimensioni", value: "615 x 685 x 875 mm" },
    { label: "Peso", value: "85 kg" },
    { label: "Alimentazione", value: "220-240V, 50/60 Hz" },
    { label: "Consumo energetico", value: "1.8 kW (max)" },
  ];

  const SpecTable = ({ specs }: { specs: { label: string; value: string }[] }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2 font-semibold">Caratteristica</TableHead>
          <TableHead className="font-semibold">Specifica</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {specs.map((spec, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-foreground">{spec.label}</TableCell>
            <TableCell className="text-muted-foreground">{spec.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <Card className="card-elevated border-0">
      <CardHeader>
        <CardTitle className="text-2xl">Specifiche Tecniche Complete</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="print" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="print">Stampa</TabsTrigger>
            <TabsTrigger value="copy">Copia</TabsTrigger>
            <TabsTrigger value="scan">Scansione</TabsTrigger>
            <TabsTrigger value="general">Generali</TabsTrigger>
          </TabsList>

          <TabsContent value="print">
            <SpecTable specs={printSpecs} />
          </TabsContent>

          <TabsContent value="copy">
            <SpecTable specs={copySpecs} />
          </TabsContent>

          <TabsContent value="scan">
            <SpecTable specs={scanSpecs} />
          </TabsContent>

          <TabsContent value="general">
            <SpecTable specs={generalSpecs} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TechnicalSpecs;
