import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProductGalleryProps {
  images: Array<{ src: string; alt: string }>;
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-square glass-card rounded-2xl overflow-hidden group cursor-pointer tech-corners"
        onClick={() => setIsZoomed(true)}
      >
        {/* Tech overlay */}
        <div className="absolute inset-0 tech-grid-dense opacity-30 pointer-events-none z-10" />
        
        {/* Corner HUD elements */}
        <div className="absolute top-4 left-4 z-20">
          <div className="glass-panel px-3 py-1.5 rounded-md">
            <span className="text-xs font-mono text-primary tracking-wider">
              VIEW {String(selectedIndex + 1).padStart(2, '0')}/{String(images.length).padStart(2, '0')}
            </span>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 z-20">
          <div className="glass-panel p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="h-4 w-4 text-primary" />
          </div>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="w-full h-full object-contain p-8"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-lg glass-panel border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:border-primary hover:neon-glow"
        >
          <ChevronLeft className="h-5 w-5 text-primary" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-lg glass-panel border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:border-primary hover:neon-glow"
        >
          <ChevronRight className="h-5 w-5 text-primary" />
        </button>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-square rounded-xl overflow-hidden glass-card transition-all ${
              selectedIndex === index
                ? "ring-2 ring-primary neon-glow"
                : "hover:ring-1 hover:ring-primary/50 opacity-60 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain p-2"
            />
            {selectedIndex === index && (
              <div className="absolute inset-0 bg-primary/5" />
            )}
          </motion.button>
        ))}
      </div>

      {/* Zoom Modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-5xl w-full glass-panel border border-primary/30 p-0">
          <div className="relative aspect-square">
            {/* Tech overlay */}
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
            
            {/* HUD corners */}
            <div className="absolute top-4 left-4 z-20 glass-panel px-3 py-1.5 rounded-md">
              <span className="text-xs font-mono text-primary tracking-wider">
                ZOOM MODE ACTIVE
              </span>
            </div>
            
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-full object-contain p-8"
            />
            
            {/* Navigation in modal */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-lg glass-panel border border-primary/30 flex items-center justify-center hover:border-primary hover:neon-glow transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-lg glass-panel border border-primary/30 flex items-center justify-center hover:border-primary hover:neon-glow transition-all"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Thumbnails in modal */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 glass-panel rounded-full p-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    selectedIndex === index
                      ? "w-8 bg-primary neon-glow"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductGallery;
