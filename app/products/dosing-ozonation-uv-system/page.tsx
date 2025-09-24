"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Leaf, Clock, Download, ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import DosingSystem1 from "@/assests/Chemical-Dosing-System.jpg";
import UVSystem from "@/assests/Ultraviolet-Water-Systems.jpg";
import OzonationSystem from "@/assests/UV and Ozonation System with Micron Filter.jpg";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Powerful Disinfection",
    description: "99.9% elimination of bacteria, viruses, and pathogens"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Chemical-Free",
    description: "No harmful chemical residues or by-products"
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Eco-Friendly",
    description: "Environmentally safe treatment methods"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Acting",
    description: "Rapid disinfection with immediate results"
  }
];

const specifications = [
  { label: "UV Dose", value: "30-40 mJ/cm²" },
  { label: "Ozone Output", value: "5g/hr to 1000g/hr" },
  { label: "Flow Rate", value: "100 LPH to 100,000 LPH" },
  { label: "Power Consumption", value: "50W to 15kW" },
  { label: "Lamp Life", value: "8000-10000 hours" },
  { label: "Control System", value: "PLC Based Automation" }
];

const productImages = [DosingSystem1, UVSystem, OzonationSystem];

export default function DosingOzonationUVSystemPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-yellow-600 via-amber-600 to-yellow-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-400/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Dosing, Ozonation
              <span className="block font-bold text-yellow-300">& UV System</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              These systems form an integral part of advanced water treatment plants, ensuring disinfection, oxidation, and precise chemical dosing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-xl"
              >
                Get Quote
              </Button>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={productImages[currentImageIndex]}
                alt={`Dosing/Ozonation/UV System ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              
              {/* Navigation Controls */}
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % productImages.length)}
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
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                  >
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Treatment Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive water treatment with multiple disinfection methods
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-yellow-50">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dosing Systems Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Dosing Systems</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Skid-mounted chemical dosing packages
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Diaphragm dosing pumps
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Capacity: 0.1 LPH – 500 LPH
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Applications:</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Antiscalant, chlorine, coagulants, pH correction
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Ozonation Systems Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Ozonation Systems</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                On-site ozone generation for powerful disinfection
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                SS/FRP contact tanks with diffusers
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Applications:</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Packaged drinking water, swimming pools, food & beverage
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* UV Systems Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">UV Systems</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                High-intensity UV disinfection chambers
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Stainless steel construction
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Flow range: 100 LPH – 100,000 LPH
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Applications:</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Final disinfection in RO, DM, mineral water & beverage projects
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Precision-engineered systems designed for maximum efficiency 
                and reliable water disinfection performance.
              </p>
              
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-yellow-600 font-semibold">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={OzonationSystem}
                  alt="UV and Ozonation System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
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
                src={productImages[currentImageIndex]}
                alt={`Dosing/Ozonation/UV System ${currentImageIndex + 1}`}
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

      <ContactUs />
    </div>
  );
}