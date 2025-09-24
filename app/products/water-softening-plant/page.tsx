"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Wrench, Clock, ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import WaterSoftener1 from "@/assests/stainless-steel-water-softeners.jpg";
import WaterSoftener2 from "@/assests/Water-Softening-Plant.jpg";
import WaterSoftener3 from "@/assests/Water-Treatment-System.jpg";

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "High-Capacity Ion-Exchange Resins",
    description: "Superior resin quality for maximum hardness removal"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automatic or Semi-Automatic Options",
    description: "Flexible operation modes to suit your requirements"
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Easy Regeneration",
    description: "Simple salt-based regeneration process"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Rugged & Durable",
    description: "Built to withstand harsh operating conditions"
  }
];

const productMedia = [
  { type: "image", src: WaterSoftener1, alt: "Stainless Steel Water Softeners" },
  { type: "image", src: WaterSoftener2, alt: "Water Softening Plant" },
  { type: "image", src: WaterSoftener3, alt: "Water Treatment System" }
];

export default function WaterSofteningPlantPage() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % productMedia.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + productMedia.length) % productMedia.length);
  };

  const currentMedia = productMedia[currentMediaIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-400/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Water Softeners
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Hard water contains excess calcium and magnesium, leading to scaling in boilers, pipes, and appliances. Our water softening systems provide an efficient, low-cost solution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-xl">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Media Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                className="object-cover"
              />
              
              {/* Navigation Controls */}
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Zoom Button */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              {/* Media Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productMedia.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMediaIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsZoomOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Information Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Hotels & restaurants
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Textile & dye industries
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Boilers & cooling towers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Laundry & healthcare
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Features</h3>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <div className="text-emerald-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Specifications</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Capacity</h3>
                  <p className="text-gray-700 text-lg">1 m³/hr to 200 m³/hr</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Hardness Reduction</h3>
                  <p className="text-gray-700 text-lg">Up to 5 ppm</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Vessel</h3>
                  <p className="text-gray-700 text-lg">FRP/MSRL (Mild Steel Rubber Lined)</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Regeneration</h3>
                  <p className="text-gray-700 text-lg">Salt-based automatic regeneration</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}