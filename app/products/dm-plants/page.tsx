"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight, Beaker, Zap, Settings, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "@/components/contactus";

// Import product images
import DMPlant1 from "@/assests/DM .jpg";
import DMPlant2 from "@/assests/DM-Water-Plants.jpg";
import DMPlant3 from "@/assests/Mixed-Bed-DM-Plant.jpg";

interface MediaItem {
  type: "image" | "video";
  src: string | StaticImageData;
  alt: string;
  thumbnail?: StaticImageData;
}

const productMedia: MediaItem[] = [
  {
    type: "image",
    src: DMPlant1,
    alt: "DM Water Plant"
  },
  {
    type: "image", 
    src: DMPlant2,
    alt: "DM Water Treatment System"
  },
  {
    type: "image",
    src: DMPlant3,
    alt: "Mixed Bed DM Plant"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: DMPlant1,
    alt: "DM Plant Operation Video"
  }
];

const features = [
  {
    icon: <Beaker className="w-6 h-6" />,
    title: "Ultra Pure Water",
    description: "Produces water with conductivity less than 1 µS/cm"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Efficient Process",
    description: "Advanced ion exchange technology for optimal performance"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Automated Operation",
    description: "Fully automated regeneration and monitoring systems"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Industry Standard",
    description: "Meets pharmaceutical and electronics industry requirements"
  }
];

const specifications = [
  { label: "Capacity", value: "100 LPH to 50,000 LPH" },
  { label: "Conductivity", value: "< 1 µS/cm" },
  { label: "Silica Content", value: "< 0.02 ppm" },
  { label: "Resin Type", value: "Nuclear Grade Ion Exchange" },
  { label: "Regeneration", value: "Acid & Caustic Based" },
  { label: "Material", value: "SS 316L / FRP" }
];

export default function DMPlantsPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
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
                DM Water
                <span className="block font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Plants
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Advanced demineralization plants producing ultra-pure water 
                for pharmaceutical, electronics, and high-tech industries.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl"
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
              <span className="font-bold text-purple-600"> Demineralization</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision-engineered systems for the highest purity water requirements
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
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-purple-50">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Technical 
                <span className="font-bold text-purple-600"> Specifications</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Engineered to meet the most stringent water quality standards 
                for critical industrial applications.
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
                    <span className="text-purple-600 font-semibold">{spec.value}</span>
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
                  src={DMPlant2}
                  alt="DM Plant Technical View"
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