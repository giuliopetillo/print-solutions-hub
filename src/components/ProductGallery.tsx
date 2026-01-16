import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
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
    <div className="space-y-3">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-square card-mpf rounded-lg overflow-hidden group cursor-pointer"
        onClick={() => setIsZoomed(true)}
      >
        {/* View indicator */}
        <div className="absolute top-3 left-3 z-20">
          <div className="badge-neutral">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
        
        {/* Zoom icon */}
        <div className="absolute top-3 right-3 z-20">
          <div className="h-8 w-8 rounded bg-card/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="w-full h-full object-contain p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded bg-card/90 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-card"
        >
          <ChevronLeft className="h-5 w-5 text-muted-foreground" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded bg-card/90 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-card"
        >
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-square rounded overflow-hidden card-mpf transition-all ${
              selectedIndex === index
                ? "ring-2 ring-primary"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain p-2"
            />
          </button>
        ))}
      </div>

      {/* Zoom Modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-4xl w-full bg-card border-border p-0 rounded-lg overflow-hidden">
          <div className="relative aspect-square">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-full object-contain p-8"
            />
            
            {/* Navigation in modal */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded bg-muted/80 flex items-center justify-center hover:bg-muted transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded bg-muted/80 flex items-center justify-center hover:bg-muted transition-all"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-muted/80 rounded-full px-3 py-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    selectedIndex === index
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
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