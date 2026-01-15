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
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-square card-ai rounded-3xl overflow-hidden group cursor-pointer"
        onClick={() => setIsZoomed(true)}
      >
        {/* View indicator */}
        <div className="absolute top-4 left-4 z-20">
          <div className="badge-ai">
            {String(selectedIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </div>
        
        {/* Zoom icon */}
        <div className="absolute top-4 right-4 z-20">
          <div className="h-10 w-10 rounded-xl glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="h-4 w-4 text-foreground" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="w-full h-full object-contain p-8"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-xl glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-secondary"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-xl glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-secondary"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-square rounded-2xl overflow-hidden card-ai transition-all ${
              selectedIndex === index
                ? "ring-2 ring-primary shadow-glow-primary"
                : "opacity-60 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain p-2"
            />
          </motion.button>
        ))}
      </div>

      {/* Zoom Modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-5xl w-full glass-strong border-border p-0 rounded-3xl overflow-hidden">
          <div className="relative aspect-square">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-full object-contain p-12"
            />
            
            {/* Navigation in modal */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-xl glass flex items-center justify-center hover:bg-secondary transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-xl glass flex items-center justify-center hover:bg-secondary transition-all"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 glass rounded-full p-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    selectedIndex === index
                      ? "w-8 bg-gradient-ai"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
