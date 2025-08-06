"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight, Package, Zap, Settings, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import BOPPMachine1 from "@/assests/BOPP Machine.jpg";
import BOPPMachine2 from "@/assests/Packaging-Solution-For-Mineral-Water.jpg";
import BOPPMachine3 from "@/assests/Automatic Shrink Wrapping Machine.jpg";

interface MediaItem {
  type: "image" | "video";
  src: string | StaticImageData;
  alt: string;
  thumbnail?: StaticImageData;
}

const productMedia: MediaItem[] = [
  {
    type: "image",
    src: BOPPMachine1,
    alt: "BOPP Labeling Machine"
  },
  {
    type: "image", 
    src: BOPPMachine2,
    alt: "Packaging Solution System"
  },
  {
    type: "image",
    src: BOPPMachine3,
    alt: "Automatic Labeling Machine"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: BOPPMachine1,
    alt: "BOPP Machine Operation Video"
  }
];

const features = [
  {
    icon: <Package className="w-6 h-6" />,
    title: "Precise Labeling",
    description: "Accurate label placement with consistent positioning"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High Speed",
    description: "Up to 36,000 bottles per hour labeling capacity"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Easy Operation",
    description: "User-friendly controls with quick changeover"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Finish",
    description: "Professional labeling with bubble-free application"
  }
];

const specifications = [
  { label: "Labeling Speed", value: "Up to 600 BPM" },
  { label: "Bottle Diameter", value: "40-120mm" },
  { label: "Label Width", value: "15-300mm" },
  { label: "Power Supply", value: "380V, 50Hz, 3 Phase" },
  { label: "Air Pressure", value: "6-8 kg/cm²" },
  { label: "Control System", value: "PLC with HMI" }
];

export default function BOPPMachinePage() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % productMedia.length);
    setIsVideoPlaying(false);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + productMedia.length) % productMedia.length);
    setIsVideoPlaying(false);
  };

  const currentMedia = productMedia[currentMediaIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Hero Section with Media Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
        
        {/* Media Carousel */}
        <div className="relative w-full h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMediaIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {currentMedia.type === "image" ? (
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="relative w-full h-full bg-black">
                  {!isVideoPlaying ? (
                    <>
                      <Image
                        src={currentMedia.thumbnail || currentMedia.src}
                        alt={currentMedia.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsVideoPlaying(true)}
                          className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-all duration-300"
                        >
                          <Play className="w-12 h-12 text-white ml-1" />
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    <iframe
                      src={typeof currentMedia.src === 'string' ? currentMedia.src : ''}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevMedia}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextMedia}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Media Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {productMedia.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentMediaIndex(index);
                  setIsVideoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentMediaIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl font-light text-white mb-6 leading-tight">
                BOPP
                <span className="block font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Machine
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                High-speed BOPP labeling machines for professional bottle 
                labeling with precision and efficiency in packaging lines.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl"
                >
                  Get Quote
                </Button>
              </motion.div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Advanced 
              <span className="font-bold text-green-600"> Labeling Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional labeling solutions for superior packaging presentation
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
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-green-50">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Specifications Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Technical 
                <span className="font-bold text-green-600"> Specifications</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                High-performance BOPP machines engineered for maximum efficiency 
                and consistent labeling quality in high-volume production.
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
                    <span className="text-green-600 font-semibold">{spec.value}</span>
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
                  src={BOPPMachine2}
                  alt="BOPP Machine Technical View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactUs />
    </div>
  );
}